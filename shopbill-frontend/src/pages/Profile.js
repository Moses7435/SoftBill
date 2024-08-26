// Profile.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Profile = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update logic here
    };

    return (
        <Container className="mt-5">
            <h2>Profile</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUserName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group controlId="formUserEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formUserPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter new password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Update Profile</Button>
            </Form>
        </Container>
    );
};

export default Profile;
