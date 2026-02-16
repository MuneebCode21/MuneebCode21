const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const bookingController = require('../controllers/bookingController');

router.get('/cars', carController.getAllCars);
router.get('/cars/:id', carController.getCarById);
router.post('/book', bookingController.createBooking);

module.exports = router;