// ViewBills.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ViewBills = () => {
    const bills = [
        { id: 1, customer: 'John Doe', total: 100, date: '2024-08-23' },
        { id: 2, customer: 'Jane Smith', total: 150, date: '2024-08-24' },
        // Add more bills as needed
    ];

    return (
        <Container className="mt-5">
            <h2>View Bills</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map(bill => (
                        <tr key={bill.id}>
                            <td>{bill.id}</td>
                            <td>{bill.customer}</td>
                            <td>{bill.total}</td>
                            <td>{bill.date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewBills;
