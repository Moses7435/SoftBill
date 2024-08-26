// CustomerReport.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const CustomerReport = () => {
    const customers = [
        { id: 1, name: 'John Doe', totalSpent: 500 },
        { id: 2, name: 'Jane Smith', totalSpent: 750 },
        // Add more customer data as needed
    ];

    return (
        <Container className="mt-5">
            <h2>Customer Report</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Total Spent</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.totalSpent}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default CustomerReport;
