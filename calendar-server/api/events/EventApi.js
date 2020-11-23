const express = require('express')
const router = express.Router();

const events = require("./Event")

router.get('/', (req, res, next) => {
  res.json(events.list())
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.json(events.post(req.body))
})

router.put('/', (req, res, next) => {
  console.log(req.body)
  res.json(events.put(req.body))
})

router.delete('/', (req, res, next) => {
  console.log(req.params)
  console.log(req.body)
  res.json(events.remove(req.body.id))
})

module.exports = router;