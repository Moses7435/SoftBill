// AddProduct.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle product addition logic here
    };

    return (
        <Container className="mt-5">
            <h2>Add Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formProductPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="formProductStock">
                        <Form.Label>Stock Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Enter stock quantity" value={stock} onChange={(e) => setStock(e.target.value)} required />
                </Form.Group>
                <Button variant="success" type="submit" className="mt-3">Add Product</Button>
            </Form>
        </Container>
    );
};

export default AddProduct;
    