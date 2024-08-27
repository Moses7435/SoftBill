import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">Start Managing Your Shop Today</h2>
        <p className="lead mb-4">Join thousands of businesses that trust ShopBill for their billing needs.</p>
        <Link to="/register" className="btn btn-primary btn-lg">Sign Up Now</Link>
      </div>
    </section>
  );
}

export default CTASection;
