// controllers/ProductController.js

const { Product } = require('../models');

module.exports = {
    // Create a new product
    createProduct: async (req, res) => {
        try {
            const { name, price, stock } = req.body;
            const product = await Product.create({ name, price, stock });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create product' });
        }
    },

    // Get all products
    getProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    }

    // You can add more controller methods for updating, deleting products, etc.
};
