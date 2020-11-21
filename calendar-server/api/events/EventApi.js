const express = require('express')
const router = express.Router();

const events = require("./Event")

router.get('/list/', (req, res, next) => {
  res.json(events.list())
})

router.get('/:id', (req, res, next) => {
  res.json(events.get(req.params.id))
})

module.exports = router;