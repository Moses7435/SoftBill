import React from 'react';

const Pricing = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Pricing</h1>
            <div className="row text-center">
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h3>Basic</h3>
                            <p>$10/month</p>
                            <p>Includes basic billing features</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h3>Standard</h3>
                            <p>$20/month</p>
                            <p>Includes customer management and basic reports</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h3>Premium</h3>
                            <p>$30/month</p>
                            <p>All features including advanced reporting and analytics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
