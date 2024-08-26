// Dashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container className="mt-5">
            <h2>Dashboard</h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Create Bill</Card.Title>
                            <Card.Text>Generate a new bill for a customer.</Card.Text>
                            <Card.Link href="/create-bill">Go to Create Bill</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Manage Products</Card.Title>
                            <Card.Text>Add, edit, or delete products in your inventory.</Card.Text>
                            <Card.Link href="/products">Go to Products</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>View Reports</Card.Title>
                            <Card.Text>Generate and view sales reports.</Card.Text>
                            <Card.Link href="/reports/daily-sales">Go to Reports</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
