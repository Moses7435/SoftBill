// Dashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Dashboard() {
    return (
        <Container className="mt-5">
            <h2>Dashboard</h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Create Bill</Card.Title>
                            <Card.Text>Generate a new bill for a customer.</Card.Text>
                            <Card.Link href="/create-bill" target="_blank">Go to Create Bill</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Manage Products</Card.Title>
                            <Card.Text>Add, edit, or delete products in your inventory.</Card.Text>
                            <Card.Link href="/products" target="_blank">Go to Products</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>View Reports</Card.Title>
                            <Card.Text>Generate and view sales reports.</Card.Text>
                            <Card.Link href="/reports/daily-sales" target="_blank">Go to Reports</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Additional cards for other pages */}
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Manage Customers</Card.Title>
                            <Card.Text>Add, edit, or view customer details.</Card.Text>
                            <Card.Link href="/customers" target="_blank">Go to Customers</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Settings</Card.Title>
                            <Card.Text>Configure your application settings.</Card.Text>
                            <Card.Link href="/settings" target="_blank">Go to Settings</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Profile</Card.Title>
                            <Card.Text>View and edit your profile information.</Card.Text>
                            <Card.Link href="/profile"target="_blank">Go to Profile</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
