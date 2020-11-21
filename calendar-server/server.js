const express = require('express')
const app = express()
const port = 4000

const eventApi = require('./api/events/EventApi')

app.get('/', (req, res) => {
  res.send('Up && Running')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use("/events", eventApi);