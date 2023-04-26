const express = require('express');
const request = require('supertest');
const app = express()

const router = express.Router()
router.use((req, res, next) => {
   console.log(`receive request ${req.originalUrl}`)
   next()
})

router.get('/feature/a', (req, res) => {
   res.send('feature a')
})

test('test router disable', async () => {
   let response = await request(app).get('/feature/a');
   expect(response.status).toBe(404)
})

test('should route enable', async () => {
   app.use(router)
   const response = await request(app).get('/feature/a')
   expect(response.text).toBe('feature a')
})