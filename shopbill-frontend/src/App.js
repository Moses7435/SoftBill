// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
    return (
        <Router>
            <div>
                <h1>Billing Software</h1>
                <Switch>
                    <Route path="/products" component={ProductList} />
                    <Route path="/add-product" component={ProductForm} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
