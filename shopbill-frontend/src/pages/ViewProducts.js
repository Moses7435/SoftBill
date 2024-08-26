// ViewProducts.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ViewProducts = () => {
    const products = [
        { id: 1, name: 'Product A', price: 50, stock: 20 },
        { id: 2, name: 'Product B', price: 30, stock: 10 },
        // Add more products as needed
    ];

    return (
        <Container className="mt-5">
            <h2>View Products</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewProducts;
