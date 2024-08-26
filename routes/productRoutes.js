const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Ensure this path is correct

// Get all products
router.get('/products', productController.getAllProducts);

// Add a new product
router.post('/products', productController.addProduct);

// Update a product
router.put('/products/:id', productController.updateProduct);

// Delete a product
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
