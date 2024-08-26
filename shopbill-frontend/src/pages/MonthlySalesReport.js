// MonthlySalesReport.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const MonthlySalesReport = () => {
    const sales = [
        { id: 1, month: 'August', totalSales: 2000 },
        { id: 2, month: 'July', totalSales: 1800 },
        // Add more monthly sales data as needed
    ];

    return (
        <Container className="mt-5">
            <h2>Monthly Sales Report</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Month</th>
                        <th>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.month}</td>
                            <td>{sale.totalSales}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default MonthlySalesReport;
