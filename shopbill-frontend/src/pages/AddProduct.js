import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/products', product);
            alert('Product added successfully');
        } catch (error) {
            console.error('There was an error adding the product!', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={product.description} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" className="form-control" name="quantity" value={product.quantity} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
