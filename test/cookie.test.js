const cookieParser = require('cookie-parser');
const express = require('express');
const request = require('supertest');
const app = express()

app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
   const name = req.cookies.name
   res.send(`Hello ${name}`)
})

app.post('/login', (req, res) => {
   const name = req.body.name
   res.cookie('Login', name, { Path: '/' })
   res.send(`hello ${name}`)
})

test('test cookie read', async () => {
   const response = await request(app).get('/')
      .set('Cookie', 'name=eko;author=Programer zaman now')
   expect(response.text).toBe('Hello eko')
})

test('test cookie write', async () => {
   const response = await request(app).post('/login')
      .send({ name: 'eko' })
   expect(response.get('Set-Cookie').toString()).toBe('Login=eko; Path=/')
   expect(response.text).toBe('hello eko')
})