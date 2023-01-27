const express = require('express')
const { getTour, createTour, updateTour, deleteTour, getDetailsTour, getTrendingTour, getCheapestTour } = require('../Controllers/tourManageController')

const router = express.Router()

router.get('/tour', getTour)
router.get('/tour/trending', getTrendingTour)
router.get('/tour/cheapest', getCheapestTour)
router.get('/tour/:id', getDetailsTour)
router.post('/tour', createTour)
router.patch('/tour/:id', updateTour)
router.delete('/tour/:id', deleteTour)

module.exports = router