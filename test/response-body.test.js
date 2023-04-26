const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   res.set('content-type', 'text/html')
   res.send(`<html><body>Hello word</body></html>`)
})

test('test response header', async () => {
   const response = await request(app).get('/');
   expect(response.get('content-type')).toContain('text/html')
   expect(response.text).toBe(`<html><body>Hello word</body></html>`)
})