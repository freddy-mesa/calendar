const express = require('express')
const router = express.Router();

const model = require("../data/Event")

router.get('/', (req, res, next) => {
  res.json(model.list())
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.json(model.post(req.body))
})

router.put('/', (req, res, next) => {
  console.log(req.body)
  res.json(model.put(req.body))
})

router.delete('/', (req, res, next) => {
  console.log(req.params)
  console.log(req.body)
  res.json(model.remove(req.body.id))
})

module.exports = router;