// src/pages/Products.js

import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../pages/Products.css';

function Products() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.title} has been added to your cart!`);
    };

    return (
        <div className="products-container">
            <div className="products-header">
                <h2>Our Products</h2>
                <Link to="/cart" className="cart-link">
                    🛒 View Cart
                </Link>
            </div>
            <div className="products-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img src={product.image} alt={product.title} className="product-image" />
                        </div>
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p className="price">${product.price}</p>
                            <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
