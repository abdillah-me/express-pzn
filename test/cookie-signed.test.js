const express = require('express');
const request = require('supertest');
const app = express()

const cookieParser = require('cookie-parser');
app.use(cookieParser('SECRETKEY'))
app.use(express.json())

app.get('/', (req, res) => {
   const name = req.signedCookies['Login']
   res.send(`Hello ${name}`)
})

app.post('/login', (req, res) => {
   const name = req.body.name
   res.cookie('Login', name, { Path: '/', signed: true })
   res.send(`hello ${name}`)
})

test('test cookie read', async () => {
   const response = await request(app).get('/')
      .set('Cookie', 'Login=s%3Aeko.%2FC%2FskFnox9EjvXwxutanO9jDb7mWgXIbh88mvKAOgIk; Path=/')
   expect(response.text).toBe('Hello eko')
})

test('test cookie write', async () => {
   const response = await request(app).post('/login')
      .send({ name: 'eko' })
   console.log(response.get('Set-Cookie'))
   expect(response.get('Set-Cookie').toString()).toContain('eko')
   expect(response.text).toBe('hello eko')
})