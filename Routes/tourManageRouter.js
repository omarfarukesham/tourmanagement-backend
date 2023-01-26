const express = require('express')
const { getTour, createTour, updateTour, deleteTour, getDetailsTour } = require('../Controllers/tourManageController')

const router = express.Router()

router.get('/tour', getTour)
router.get('/tour/:id', getDetailsTour)
router.post('/tour', createTour)
router.patch('/tour/:id', updateTour)
router.delete('/tour/:id', deleteTour)

module.exports = router