const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   const type = req.get('accept')
   res.send(`hello ${type}`)
})

test('test header parameter', async () => {
   const response = await request(app)
      .get('/')
      .set('Accept', 'text/plain')
   expect(response.text).toBe('hello text/plain')
})