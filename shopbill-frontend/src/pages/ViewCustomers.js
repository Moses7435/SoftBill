import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewCustomers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('There was an error fetching the customers!', error);
            }
        };
        fetchCustomers();
    }, []);

    return (
        <div className="container mt-5">
            <h2>All Customers</h2>
            <ul className="list-group">
                {customers.map((customer, index) => (
                    <li key={index} className="list-group-item">
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewCustomers;
