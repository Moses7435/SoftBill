// app.js

const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the product routes
app.use('/api', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
