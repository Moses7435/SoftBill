import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BillDetails() {
    const [bill, setBill] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBill = async () => {
            try {
                const response = await axios.get(`/api/bills/${id}`);
                setBill(response.data);
            } catch (error) {
                console.error('There was an error fetching the bill details!', error);
            }
        };
        fetchBill();
    }, [id]);

    if (!bill) return <p>Loading...</p>;

    return (
        <div className="container mt-5">
            <h2>Bill Details</h2>
            <p><strong>Customer:</strong> {bill.customerName}</p>
            <p><strong>Total Amount:</strong> ${bill.totalAmount}</p>
            <h4>Products</h4>
            <ul>
                {bill.products.map((product, index) => (
                    <li key={index}>{product.name} - ${product.price} x {product.quantity}</li>
                ))}
            </ul>
        </div>
    );
}

export default BillDetails;
