import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const currencySymbol = "₹";

  useEffect(() => {
    // Load cart items from localStorage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;
    
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Shopping Cart</h1>
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="product-col">
                <div className="item-image">
                  <img src={item.img || '/placeholder.jpg'} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
              
              <div className="price-col">
                {currencySymbol}{item.price.toLocaleString()}
              </div>
              
              <div className="quantity-col">
                <div className="quantity-selector">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= 10}>+</button>
                </div>
              </div>
              
              <div className="total-col">
                {currencySymbol}{(item.price * item.quantity).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-total">
            <span>Total</span>
            <span>{currencySymbol}{subtotal.toLocaleString()}</span>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;