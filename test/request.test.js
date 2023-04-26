const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   res.send(`hallo ${req.query.name}`)
})

test('should express', async () => {
   const response = await request(app).get("/").query({ name: 'abdillah' });
   expect(response.text).toBe('hallo abdillah')
})