import React from 'react';

function Reports() {
    return (
        <div className="container mt-5">
            <h2>Reports</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Daily Sales Report</h5>
                            <p className="card-text">View daily sales performance.</p>
                            <a href="/reports/daily-sales" className="btn btn-primary">View Report</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Monthly Sales Report</h5>
                            <p className="card-text">Analyze sales trends over the month.</p>
                            <a href="/reports/monthly-sales" className="btn btn-primary">View Report</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Customer Report</h5>
                            <p className="card-text">View customer purchase history and analytics.</p>
                            <a href="/reports/customer" className="btn btn-primary">View Report</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;
