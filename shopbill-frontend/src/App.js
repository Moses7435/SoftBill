import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
    return (
        <Router>
            <div>
                <h1>Billing Software</h1>
                <Routes>
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/add-product" element={<ProductForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
