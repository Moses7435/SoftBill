import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SoftBill</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to ShopBill</h1>
          <p className="lead">Your all-in-one billing software solution for managing your shop effortlessly.</p>
          <a href="/register" className="btn btn-light btn-lg">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Start Managing Your Shop Today</h2>
          <p className="lead mb-4">Join thousands of businesses that trust ShopBill for their billing needs.</p>
          <a href="/register" className="btn btn-primary btn-lg">Sign Up Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 ShopBill. All rights reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="/privacy" className="text-white">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="/terms" className="text-white">Terms of Service</a></li>
            <li className="list-inline-item"><a href="/contact" className="text-white">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
