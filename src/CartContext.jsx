import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage on mount
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      let newItems;
      if (existingItemIndex >= 0) {
        // If item exists, increase quantity
        newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
      } else {
        // Add new item with quantity 1
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }
      
      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      // Dispatch storage event for navbar update
      window.dispatchEvent(new Event('storage'));
      
      return newItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}