const express = require('express');
const app = express()
const port = 3001

app.get('/', (req, res) => {
   res.send('hallo')
})

app.listen(port, () => {
   console.log(`app listen on port ${port}`)
})