import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2024 ShopBill. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><Link to="/privacy" className="text-white">Privacy Policy</Link></li>
          <li className="list-inline-item"><Link to="/terms" className="text-white">Terms of Service</Link></li>
          <li className="list-inline-item"><Link to="/contact" className="text-white">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
