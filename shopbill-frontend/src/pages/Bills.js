import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Bills() {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        const fetchBills = async () => {
            try {
                const response = await axios.get('/api/bills');
                setBills(response.data);
            } catch (error) {
                console.error('There was an error fetching the bills!', error);
            }
        };
        fetchBills();
    }, []);

    return (
        <div className="container mt-5">
            <h2>All Bills</h2>
            <ul className="list-group">
                {bills.map((bill, index) => (
                    <li key={index} className="list-group-item">
                        <a href={`/bills/${bill.id}`}>Bill #{bill.id}</a> - ${bill.totalAmount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bills;
