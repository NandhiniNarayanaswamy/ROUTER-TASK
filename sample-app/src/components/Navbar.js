// src/components/Navbar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../pages/Navbar.css';

function Navbar() {
    const { cartItems } = useContext(CartContext);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MyStore 🛍️</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Products</Link>
                <Link to="/cart" className="cart-icon">
                    🛒 <span className="cart-count">{cartCount}</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
