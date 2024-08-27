import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to ShopBill</h1>
        <p className="lead">Your all-in-one billing software solution for managing your shop effortlessly.</p>
        <Link to="/register" className="btn btn-light btn-lg">Get Started</Link>
      </div>
    </header>
  );
}

export default HeroSection;
