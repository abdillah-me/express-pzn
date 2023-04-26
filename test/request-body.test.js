const express = require('express');
const request = require('supertest');
const app = express()

import expressFileUpload from 'express-fileupload'
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressFileUpload())

app.post('/json', (req, res) => {
   const name = req.body.name
   res.json({ hello: `hello ${name}` })
})

app.post('/file', (req, res) => {
   const textFile = req.files.article
})

app.post('/form', (req, res) => {
   const name = req.body.name
   res.json({ hello: `hello ${name}` })
})


test('req json', async () => {
   const response = await request(app)
      .post('/json')
      .set('content-type', 'application/json')
      .send({ name: 'world' })
   expect(response.body).toEqual({
      hello: 'hello world'
   })
})

test('req form', async () => {
   const response = await request(app)
      .post('/form')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('name=world')

   expect(response.body).toEqual({
      hello: 'hello world'
   })
})