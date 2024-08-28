import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Pricing() {
  return (
    <Container className="mt-5">
      <h2>Pricing</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Basic Plan</Card.Title>
              <Card.Text>For small businesses and startups.</Card.Text>
              <Button variant="primary" href="/register">Choose Basic Plan</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Pro Plan</Card.Title>
              <Card.Text>For growing businesses.</Card.Text>
              <Button variant="primary" href="/register">Choose Pro Plan</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Enterprise Plan</Card.Title>
              <Card.Text>For large enterprises.</Card.Text>
              <Button variant="primary" href="/register">Choose Enterprise Plan</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;
