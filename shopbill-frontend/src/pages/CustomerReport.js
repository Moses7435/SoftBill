import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerReport() {
    const [report, setReport] = useState([]);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await axios.get('/api/reports/customer');
                setReport(response.data);
            } catch (error) {
                console.error('There was an error fetching the customer report!', error);
            }
        };
        fetchReport();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Customer Report</h2>
            <ul className="list-group">
                {report.map((entry, index) => (
                    <li key={index} className="list-group-item">
                        {entry.customerName} - Total Purchases: ${entry.totalPurchases}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerReport;
