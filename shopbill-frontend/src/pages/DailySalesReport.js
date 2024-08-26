// DailySalesReport.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const DailySalesReport = () => {
    const sales = [
        { id: 1, product: 'Product A', quantity: 2, total: 100, date: '2024-08-23' },
        { id: 2, product: 'Product B', quantity: 1, total: 30, date: '2024-08-23' },
        // Add more sales as needed
    ];

    return (
        <Container className="mt-5">
            <h2>Daily Sales Report</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.product}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.total}</td>
                            <td>{sale.date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DailySalesReport;
