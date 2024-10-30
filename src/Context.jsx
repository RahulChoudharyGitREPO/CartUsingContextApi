import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemsToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeItemFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemsToCart, removeItemFromCart, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};
