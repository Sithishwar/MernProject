import React, { useState } from 'react';
import Navbar from '../connector/navbar'; // Change to lowercase
import styles from './OrderTracking.module.css';

function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!orderNumber || !email) {
      setError('Please fill in all fields');
      return;
    }
    
    // For demo purposes, we'll show a mock order if the order number is "KOS12345"
    if (orderNumber === 'KOS12345') {
      setOrderDetails({
        orderNumber: 'KOS12345',
        orderDate: 'May 15, 2025',
        status: 'shipped',
        items: [
          {
            id: 1,
            name: 'Lipstick',
            price: '₹599',
            quantity: 2,
            image: '/lipstick.jpeg'
          },
          {
            id: 2,
            name: 'Foundation',
            price: '₹899',
            quantity: 1,
            image: '/Foundation.jpeg'
          }
        ],
        shippingAddress: {
          name: 'Jane Doe',
          street: '123 Beauty Lane',
          city: 'Mumbai',
          state: 'Maharashtra',
          zip: '400001',
          country: 'India'
        },
        estimatedDelivery: 'May 20, 2025'
      });
      setError('');
    } else {
      setError('Order not found. Please check your order number and email.');
      setOrderDetails(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.trackingContainer}>
        <div className={styles.trackingHeader}>
          <h1>Track Your Order</h1>
          <p>Enter your order details to check the current status of your purchase</p>
        </div>

        <div className={styles.trackingContent}>
          <form className={styles.trackingForm} onSubmit={handleSubmit}>
            {error && <div className={styles.errorMessage}>{error}</div>}
            
            <div className={styles.formGroup}>
              <label htmlFor="orderNumber">Order Number</label>
              <input
                type="text"
                id="orderNumber"
                className={styles.inputField}
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="e.g., KOS12345"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter the email used for your order"
              />
            </div>
            
            <button type="submit" className={styles.trackButton}>
              Track Order
            </button>
            
            <p className={styles.formNote}>
              Try using order number "KOS12345" with any email for a demo
            </p>
          </form>

          {orderDetails && (
            <div className={styles.orderDetails}>
              <div className={styles.orderHeader}>
                <div className={styles.orderNumber}>
                  Order #{orderDetails.orderNumber}
                </div>
                <div className={styles.orderDate}>
                  Placed on {orderDetails.orderDate}
                </div>
              </div>
              
              <div className={styles.orderStatus}>
                <div className={styles.statusLabel}>
                  Current Status: <span className={styles.statusValue}>
                    {orderDetails.status.charAt(0).toUpperCase() + orderDetails.status.slice(1)}
                  </span>
                </div>
                
                <div className={styles.statusTracker}>
                  <div className={styles.statusStep}>
                    <div className={`${styles.statusDot} ${styles.completed}`}>✓</div>
                    <div className={styles.statusText}>Order Placed</div>
                  </div>
                  
                  <div className={styles.statusStep}>
                    <div className={`${styles.statusDot} ${styles.completed}`}>✓</div>
                    <div className={styles.statusText}>Processing</div>
                  </div>
                  
                  <div className={styles.statusStep}>
                    <div className={`${styles.statusDot} ${orderDetails.status === 'shipped' || orderDetails.status === 'delivered' ? styles.completed : ''}`}>
                      {orderDetails.status === 'shipped' || orderDetails.status === 'delivered' ? '✓' : '3'}
                    </div>
                    <div className={styles.statusText}>Shipped</div>
                  </div>
                  
                  <div className={styles.statusStep}>
                    <div className={`${styles.statusDot} ${orderDetails.status === 'delivered' ? styles.completed : ''}`}>
                      {orderDetails.status === 'delivered' ? '✓' : '4'}
                    </div>
                    <div className={styles.statusText}>Delivered</div>
                  </div>
                </div>
              </div>
              
              <div className={styles.orderItems}>
                <h3>Order Items</h3>
                {orderDetails.items.map(item => (
                  <div key={item.id} className={styles.orderItem}>
                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                    <div className={styles.itemDetails}>
                      <div className={styles.itemName}>{item.name}</div>
                      <div className={styles.itemPrice}>{item.price}</div>
                      <div className={styles.itemQuantity}>Quantity: {item.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.deliveryInfo}>
                <h3>Delivery Information</h3>
                <div className={styles.infoTitle}>Shipping Address:</div>
                <div className={styles.infoText}>{orderDetails.shippingAddress.name}</div>
                <div className={styles.infoText}>{orderDetails.shippingAddress.street}</div>
                <div className={styles.infoText}>
                  {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zip}
                </div>
                <div className={styles.infoText}>{orderDetails.shippingAddress.country}</div>
                
                <div className={styles.infoTitle} style={{ marginTop: '1rem' }}>
                  Estimated Delivery:
                </div>
                <div className={styles.infoText}>{orderDetails.estimatedDelivery}</div>
              </div>
            </div>
          )}
          
          <div className={styles.helpSection}>
            <h3 className={styles.helpTitle}>Need Help?</h3>
            <p className={styles.helpText}>
              If you have any questions about your order, our customer service team is here to help.
            </p>
            <a href="/contact" className={styles.contactButton}>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTracking;