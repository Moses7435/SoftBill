import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DailySalesReport() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await axios.get('/api/reports/daily-sales');
                setSales(response.data);
            } catch (error) {
                console.error('There was an error fetching the daily sales report!', error);
            }
        };
        fetchSales();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Daily Sales Report</h2>
            <ul className="list-group">
                {sales.map((sale, index) => (
                    <li key={index} className="list-group-item">
                        {sale.date} - Total Sales: ${sale.totalSales}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DailySalesReport;
