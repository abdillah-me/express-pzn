const express = require('express');
const request = require('supertest');
const app = express()

const logger = (req, res, next) => {
   console.log(`receive request: ${req.method} ${req.originalUrl}`)
   next()
}

const addPoweredHeader = (req, res, next) => {
   res.set('x-powered-by', 'programmer zaman now')
   next()
}

app.use(logger)
app.use(addPoweredHeader)

app.get('/', (req, res) => {
   res.send('hallo response')
})

test('test response middleware', async () => {
   const response = await request(app).get('/');
   expect(response.get('x-powered-by')).toBe('programmer zaman now')
   expect(response.text).toBe('hallo response')
})