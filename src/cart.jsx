import React, { useContext } from 'react';
import { CartContext } from './Context';
import './cart.css'; // Adjust if needed

function Cart() {
    const { cartItems, removeItemFromCart, getTotalItems } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h1 className="cart-header">Your Cart</h1>
            <h2 className="cart-total">Total: ${getTotalItems().toFixed(2)}</h2>

            <div className="cart-product-list">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-product-card">
                        <img src={item.thumbnail} alt={item.title} className="cart-product-image" />
                        <h3 className="cart-product-title">{item.title}</h3>
                        <p className="cart-product-price">Price: ${item.price.toFixed(2)}</p>
                        <button className="cart-remove-button" onClick={() => removeItemFromCart(item.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Cart;
