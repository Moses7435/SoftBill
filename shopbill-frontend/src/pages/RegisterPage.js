// RegisterPage.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <Container className="mt-5">
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button variant="success" type="submit" className="mt-3">Register</Button>
            </Form>
        </Container>
    );
};

export default RegisterPage;
