const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   res.send('hallo')
})

test('should express', async () => {
   const response = await request(app).get("/");
   expect(response.text).toBe('hallo')
})