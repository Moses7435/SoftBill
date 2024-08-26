// controllers/productController.js

const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const product = await Product.create({ name, price, stock });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the product.' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the product.' });
    }
};