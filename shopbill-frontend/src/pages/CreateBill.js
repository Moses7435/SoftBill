// CreateBill.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CreateBill = () => {
    const [customerName, setCustomerName] = useState('');
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle bill creation logic here
    };

    return (
        <Container className="mt-5">
            <h2>Create Bill</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCustomerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formProduct">
                    <Form.Label>Product</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" value={product} onChange={(e) => setProduct(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Create Bill</Button>
            </Form>
        </Container>
    );
};

export default CreateBill;
