import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('There was an error fetching the products!', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mt-5">
            <h2>All Products</h2>
            <ul className="list-group">
                {products.map((product, index) => (
                    <li key={index} className="list-group-item">
                        {product.name} - ${product.price} - {product.quantity} in stock
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewProducts;
