// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- Remove Link from here
import Products from './pages/Products';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
