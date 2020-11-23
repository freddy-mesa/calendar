const express = require('express')
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express()
const port = 4000

const eventApi = require('./api/events/EventApi')

app.get('/', (req, res) => {
  res.send('Up && Running')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(cors({
  origin: 'http://localhost:3000'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/events", eventApi);