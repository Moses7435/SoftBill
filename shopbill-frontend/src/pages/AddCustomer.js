// AddCustomer.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddCustomer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle customer addition logic here
    };

    return (
        <Container className="mt-5">
            <h2>Add Customer</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCustomerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formCustomerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formCustomerPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Add Customer</Button>
            </Form>
        </Container>
    );
};

export default AddCustomer;
