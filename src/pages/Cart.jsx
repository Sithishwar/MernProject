import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  './Cart.css';

const Cart = () => {
  // Example initialization of cart items - in a real app, this would come from context/redux/localStorage
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Premium Lipstick', 
      price: 599, 
      quantity: 2, 
      img: '/lipstick.jpeg',
      variant: 'Ruby Red'
    },
    { 
      id: 2, 
      name: 'Luxury Eyeshadow Palette', 
      price: 1299, 
      quantity: 1, 
      img: '/eyeshadow.jpeg',
      variant: 'Sunset Glow'
    },
    { 
      id: 3, 
      name: 'Volumizing Mascara', 
      price: 499, 
      quantity: 1, 
      img: '/mascara.jpeg',
      variant: 'Intense Black'
    }
  ]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(true);
  
  // Recommended products that complement items in cart
  const recommendedProducts = [
    { id: 4, name: 'Makeup Primer', price: 799, img: '/primer.jpeg' },
    { id: 5, name: 'Setting Spray', price: 699, img: '/setting-spray.jpeg' },
    { id: 6, name: 'Foundation Brush', price: 899, img: '/brush.jpeg' }
  ];
  
  // Valid coupon codes with their discount percentages
  const validCoupons = {
    "WELCOME10": 0.1,
    "SALE20": 0.2,
    "SPECIAL50": 0.5
  };

  // Settings
  const currencySymbol = "₹";
  const shippingFee = 99;
  const taxRate = 0.05; // 5% tax
  
  // Calculate prices
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxAmount = subtotal * taxRate;
  const discountAmount = subtotal * discount;
  const total = subtotal + shippingFee + taxAmount - discountAmount;

  // Apply coupon code
  const applyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      setCouponSuccess("");
      return;
    }
    
    const discountPercentage = validCoupons[couponCode.toUpperCase()];
    
    if (discountPercentage) {
      setDiscount(discountPercentage);
      setCouponError("");
      setCouponSuccess(`Coupon applied successfully! ${discountPercentage * 100}% off`);
    } else {
      setCouponError("Invalid coupon code");
      setCouponSuccess("");
      setDiscount(0);
    }
  };
  
  // Update quantity with validation
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item from cart with animation
  const removeItem = (id) => {
    // Find the item to remove for potential notification
    const itemToRemove = cartItems.find(item => item.id === id);
    
    // Filter out the item with the given id
    setCartItems(cartItems.filter(item => item.id !== id));
    
    // Show removal notification or trigger undo functionality
    // This would be implemented with a toast notification system
  };
  
  // Add recommended product to cart
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // If item already exists, update its quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  // Handle checkout process
  const handleCheckout = () => {
    setCheckoutLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Processing checkout:", {
        items: cartItems,
        subtotal,
        shipping: shippingFee,
        tax: taxAmount,
        discount: discountAmount,
        total,
        couponApplied: discount > 0 ? couponCode : null
      });
      setCheckoutLoading(false);
      // In a real app, redirect to checkout page or show confirmation
    }, 1500);
  };

  // Empty cart message when no items
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Shopping Cart</h1>
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>

          {/* Featured products */}
          <div className="featured-products">
            <h3>Popular Products You Might Like</h3>
            <div className="featured-products-grid">
              {recommendedProducts.map(product => (
                <div key={product.id} className="featured-product">
                  <div className="featured-product-image">
                    <img src={product.img || '/placeholder.jpg'} alt={product.name} />
                  </div>
                  <h4>{product.name}</h4>
                  <div className="featured-product-price">{currencySymbol}{product.price}</div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Your Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
        </h1>
        
        <div className="cart-steps">
          <div className="cart-step active">
            <div className="step-number">1</div>
            <div className="step-label">Cart</div>
          </div>
          <div className="step-divider"></div>
          <div className="cart-step">
            <div className="step-number">2</div>
            <div className="step-label">Shipping</div>
          </div>
          <div className="step-divider"></div>
          <div className="cart-step">
            <div className="step-number">3</div>
            <div className="step-label">Payment</div>
          </div>
        </div>
      </div>
      
      <div className="cart-content">
        <div className="cart-items-container">
          <div className="cart-items-header">
            <span className="product-col">Product</span>
            <span className="price-col">Price</span>
            <span className="quantity-col">Quantity</span>
            <span className="total-col">Total</span>
          </div>
          
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="product-col">
                  <div className="item-image">
                    <img src={item.img || '/placeholder.jpg'} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    {item.variant && <p className="item-variant">{item.variant}</p>}
                    <button 
                      className="remove-item"
                      onClick={() => removeItem(item.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"></path>
                        <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="price-col">
                  {currencySymbol}{item.price.toLocaleString()}
                </div>
                
                <div className="quantity-col">
                  <div className="quantity-selector">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                    
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    />
                    
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= 10}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="total-col">
                  {currencySymbol}{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-actions">
            <Link to="/" className="continue-shopping-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"></path>
                <path d="M12 19l-7-7 7-7"></path>
              </svg>
              Continue Shopping
            </Link>
            
            <button className="clear-cart" onClick={() => setCartItems([])}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"></path>
                <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
              </svg>
              Clear Cart
            </button>
          </div>
          
          {/* Product Recommendations */}
          {showRecommendations && (
            <div className="recommendations">
              <div className="recommendations-header">
                <h3>Frequently Bought Together</h3>
                <button 
                  className="close-recommendations"
                  onClick={() => setShowRecommendations(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="recommended-products">
                {recommendedProducts.map(product => (
                  <div key={product.id} className="recommended-product">
                    <div className="recommended-product-image">
                      <img src={product.img || '/placeholder.jpg'} alt={product.name} />
                    </div>
                    <div className="recommended-product-details">
                      <h4>{product.name}</h4>
                      <div className="recommended-product-price">
                        {currencySymbol}{product.price.toLocaleString()}
                      </div>
                      <button 
                        className="add-to-cart"
                        onClick={() => addToCart(product)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
            <span>{currencySymbol}{subtotal.toLocaleString()}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping</span>
            <span>{currencySymbol}{shippingFee.toLocaleString()}</span>
          </div>
          
          <div className="summary-row">
            <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
            <span>{currencySymbol}{taxAmount.toLocaleString()}</span>
          </div>
          
          {discount > 0 && (
            <div className="summary-row discount">
              <span>Discount ({(discount * 100).toFixed(0)}%)</span>
              <span>-{currencySymbol}{discountAmount.toLocaleString()}</span>
            </div>
          )}
          
          <div className="coupon-section">
            <div className="coupon-input">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={applyCoupon}>Apply</button>
            </div>
            
            {couponError && (
              <div className="coupon-error">{couponError}</div>
            )}
            
            {couponSuccess && (
              <div className="coupon-success">{couponSuccess}</div>
            )}
          </div>
          
          <div className="total-row">
            <span>Total</span>
            <span>{currencySymbol}{total.toLocaleString()}</span>
          </div>
          
          <button 
            className={`checkout-button ${checkoutLoading ? 'loading' : ''}`}
            onClick={handleCheckout}
            disabled={checkoutLoading}
          >
            {checkoutLoading ? (
              <>
                <div className="spinner"></div>
                Processing...
              </>
            ) : (
              <>
                Proceed to Checkout
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </>
            )}
          </button>
          
          <div className="payment-info">
            <div className="secure-checkout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0110 0v4"></path>
              </svg>
              <span>Secure Checkout</span>
            </div>
            
            <div className="payment-methods">
              <div className="payment-icon visa"></div>
              <div className="payment-icon mastercard"></div>
              <div className="payment-icon amex"></div>
              <div className="payment-icon paypal"></div>
            </div>
          </div>
          
          <div className="satisfaction-guarantee">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;