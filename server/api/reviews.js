const router = require('express').Router()
const { Review } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({})
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body)
    res.send(newReview).status(201)
  } catch (err) {
    next(err)
  }
})
