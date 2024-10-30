import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './Context';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

import './products.css';

function Product() {
    const { addItemsToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products`);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-container">
            <h1 className="product-header">Products</h1>
            <button className="go-to-cart-button" onClick={() => navigate('/cart')}>
                <FaShoppingCart />

            </button>
            <div className="product-grid">
                {products.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.thumbnail} alt={item.title} className="product-image" />
                        <h3>{item.title}</h3>
                        <p className="product-price">Price: ${item.price.toFixed(2)}</p>
                        <button onClick={() => addItemsToCart(item)} className="product-button">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
