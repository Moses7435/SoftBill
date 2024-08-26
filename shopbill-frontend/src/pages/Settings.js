// Settings.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Settings = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle settings update logic here
    };

    return (
        <Container className="mt-5">
            <h2>Settings</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter company name" required />
                </Form.Group>
                <Form.Group controlId="formCompanyEmail">
                    <Form.Label>Company Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter company email" required />
                </Form.Group>
                <Form.Group controlId="formCompanyPhone">
                    <Form.Label>Company Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter company phone" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Update Settings</Button>
            </Form>
        </Container>
    );
};

export default Settings;
