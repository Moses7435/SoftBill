// routes/bill.js
const express = require('express');
const { createBill } = require('../controllers/billController');
const router = express.Router();

router.post('/create-bill', createBill);

module.exports = router;
