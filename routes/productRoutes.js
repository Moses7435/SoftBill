// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController.js');

// Route to create a new product
router.post('/products', ProductController.createProduct);

// Route to get all products
router.get('/products', ProductController.getProducts);

// Add more routes as needed...

module.exports = router;
