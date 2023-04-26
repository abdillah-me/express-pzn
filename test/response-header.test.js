const express = require('express');
const request = require('supertest');
const app = express()

app.get('/', (req, res) => {
   res.set({
      'x-powered-by': 'programmer zaman now',
      'x-author': 'eko'
   })
   res.send('hello response')
})

test('test response header', async () => {
   const response = await request(app).get('/');
   expect(response.text).toBe('hello response')
   expect(response.get('x-powered-by')).toBe('programmer zaman now')
   expect(response.get('x-author')).toBe('eko')
})