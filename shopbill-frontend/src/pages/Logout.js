// Logout.js
import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Handle logout logic here
        setTimeout(() => {
            navigate('/');
        }, 2000); // Simulate logout delay
    }, [navigate]);

    return (
        <Container className="text-center mt-5">
            <Spinner animation="border" role="status">
                <span className="sr-only">Logging out...</span>
            </Spinner>
            <p className="mt-3">Logging out...</p>
        </Container>
    );
};

export default Logout;
