const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   if (req.query.name) {
      res.status(200)
      res.send(`hello ${req.query.name}`)
   } else {
      res.status(400)
      res.end()
   }
})

test('test response status', async () => {
   let response = await request(app).get('/').query({ name: 'eko' })
   expect(response.status).toBe(200)
   expect(response.text).toBe('hello eko')

   response = await request(app).get('/')
   expect(response.status).toBe(400)
})