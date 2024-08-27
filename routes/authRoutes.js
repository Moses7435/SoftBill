// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authControllers');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
