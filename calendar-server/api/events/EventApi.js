const express = require('express')
const router = express.Router();

const events = require("./Event")

router.get('/', (req, res, next) => {
  res.json(events.list())
})

router.post('/', (req, res, next) => {
  //res.json(events.post(req.params))
  console.log(req.params)
  console.log(req.body)
  res.send("id: "+ req.body.id)
})

router.put('/', (req, res, next) => {
  res.json(events.put(req.params))
})

router.delete('/', (req, res, next) => {
  res.json(events.delete(req.params.id))
})

module.exports = router;