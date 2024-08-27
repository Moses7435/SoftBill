import React from 'react';

const Features = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Our Features</h1>
            <div className="row text-center">
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <i className="bi bi-cart-check fs-1 text-primary"></i>
                            <h3 className="mt-3">Easy Billing</h3>
                            <p>Create and manage invoices with just a few clicks. Fast and intuitive.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <i className="bi bi-people fs-1 text-primary"></i>
                            <h3 className="mt-3">Customer Management</h3>
                            <p>Keep track of your customers and their purchasing history effortlessly.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <i className="bi bi-bar-chart-line fs-1 text-primary"></i>
                            <h3 className="mt-3">Detailed Reports</h3>
                            <p>Generate comprehensive sales reports to stay on top of your business performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
