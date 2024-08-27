import React from 'react';

function FeaturesSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-4">
            <div className="p-4">
              <i className="bi bi-cart-check fs-1 text-primary"></i>
              <h3 className="mt-3">Easy Billing</h3>
              <p>Create and manage invoices with just a few clicks. Fast and intuitive.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4">
              <i className="bi bi-people fs-1 text-primary"></i>
              <h3 className="mt-3">Customer Management</h3>
              <p>Keep track of your customers and their purchasing history effortlessly.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4">
              <i className="bi bi-bar-chart-line fs-1 text-primary"></i>
              <h3 className="mt-3">Detailed Reports</h3>
              <p>Generate comprehensive sales reports to stay on top of your business performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
