import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';

const CreateBill = () => {
    const [billNumber, setBillNumber] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerDetails, setCustomerDetails] = useState('');
    const [products, setProducts] = useState([]);
    const [productCode, setProductCode] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [total, setTotal] = useState('');
    const [discount, setDiscount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const addProduct = () => {
        const product = {
            productCode,
            productName,
            price,
            quantity,
            total: price * quantity
        };
        setProducts([...products, product]);
        setTotalAmount(totalAmount + product.total);
        setProductCode('');
        setProductName('');
        setPrice('');
        setQuantity('');
        setTotal('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBill = {
            billNumber,
            customerName,
            customerDetails,
            products,
            discount,
            totalAmount: totalAmount - discount
        };

        try {
            await axios.post('/api/create-bill', newBill);
            alert('Bill created successfully!');
        } catch (error) {
            alert('Failed to create bill.');
        }
    };

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="productCode">
                            <Form.Label>Product Code</Form.Label>
                            <Form.Control type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={addProduct}>
                            Add Product
                        </Button>
                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.productCode}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Button variant="success" type="submit" className="mt-4">
                            Create Bill
                        </Button>
                    </Form>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="billNumber">
                        <Form.Label>Bill Number</Form.Label>
                        <Form.Control type="text" value={billNumber} onChange={(e) => setBillNumber(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="customerName">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="customerDetails">
                        <Form.Label>Customer Details</Form.Label>
                        <Form.Control as="textarea" rows={3} value={customerDetails} onChange={(e) => setCustomerDetails(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="discount">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="totalAmount">
                        <Form.Label>Total Amount</Form.Label>
                        <Form.Control type="number" value={totalAmount - discount} readOnly />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateBill;
