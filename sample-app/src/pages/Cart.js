// src/pages/Cart.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../pages/Cart.css';

function Cart() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    // Calculate the total price before discount
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Calculate the discounted price (10% off)
    const getDiscountedPrice = (total) => {
        return (total * 0.9).toFixed(2); // 10% off
    };

    const totalPrice = getTotalPrice();
    const discountedPrice = getDiscountedPrice(totalPrice);

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>

                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)} className="qty-btn">-</button>
                                        <span className="quantity-number">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="qty-btn">+</button>
                                    </div>

                                    <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

                                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <h3>Total: ${totalPrice}</h3>
                        <h4>Discount (10%): -${(totalPrice * 0.1).toFixed(2)}</h4>
                        <h3>Discounted Total: ${discountedPrice}</h3>
                        <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
