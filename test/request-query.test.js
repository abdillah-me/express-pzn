const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   res.send(`hello ${req.query.firstName} ${req.query.lastName}`)
})

test('test query parameter', async () => {
   const response = await request(app)
      .get('/')
      .query({ firstName: 'muhammad', lastName: 'abdillah' });
   expect(response.text).toBe('hello muhammad abdillah')
})