const express = require('express');
const request = require('supertest');
const app = express()

app.get('/product/:id', (req, res) => {
   const idProducts = req.params.id
   res.send(`products : ${idProducts}`)
})

test('should express', async () => {
   const response = await request(app).get("/product/eko");
   expect(response.text).toBe('products : eko')
})