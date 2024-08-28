// routes/bill.js

const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

router.post('/create-bill', billController.createBill);

module.exports = router;
