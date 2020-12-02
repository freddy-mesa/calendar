const express = require('express')
const router = express.Router();

const model = require("../data/db.event")

router.get('/', async(req, res) => {
  try {
    const response = await model.list()
    res.json(response)
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async(req, res) => {
  try {
    const response = await model.post(req.body)
    res.json(response)
  } catch (error) {
    console.error(error)
  }
})

router.put('/', async(req, res) => {
  try {
    const response = await model.put(req.body)
    res.json(response)
  } catch (error) {
    console.error(error)
  }
})

router.delete('/', async(req, res) => {
  try {
    const response = await model.remove(req.body.id)
    res.json(response)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router;