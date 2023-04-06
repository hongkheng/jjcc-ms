const express = require('express')
const app = express()
const port = 3000

const getOrders = require('./services/order')

app.get('/order', getOrders)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
