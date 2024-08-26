// ViewCustomers.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ViewCustomers = () => {
    const customers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
        // Add more customers as needed
    ];

    return (
        <Container className="mt-5">
            <h2>View Customers</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewCustomers;
