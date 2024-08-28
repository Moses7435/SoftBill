import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function CreateBill() {
    const [customer, setCustomer] = useState('');
    const [products, setProducts] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/bills', { customer, products, amount });
            if (response.data.success) {
                setMessage('Bill created successfully');
                setCustomer('');
                setProducts('');
                setAmount('');
            } else {
                setMessage('Failed to create bill');
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        }
    };

    return (
        <Container className="mt-5">
            <h2>Create Bill</h2>
            {message && <Alert variant="info">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCustomer">
                    <Form.Label>Customer</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter customer name"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formProducts" className="mt-3">
                    <Form.Label>Products</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter products"
                        value={products}
                        onChange={(e) => setProducts(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formAmount" className="mt-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Create Bill
                </Button>
            </Form>
        </Container>
    );
}

export default CreateBill;
