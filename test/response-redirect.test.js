const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   res.redirect('/to-next-page')
})

test('test response redirect', async () => {
   const response = await request(app).get('/');
   expect(response.status).toBe(302);
   expect(response.get('location')).toBe('/to-next-page')
})