import React from 'react';
import styles from './ShippingInfo.module.css';

function ShippingInfo() {
  return (
    <div className={styles.shippingContainer}>
      <div className={styles.shippingHeader}>
        <h1>Shipping Information</h1>
        <p>Everything you need to know about our shipping policies and delivery options</p>
      </div>

      <div className={styles.shippingContent}>
        <div className={styles.shippingSection}>
          <h2>Delivery Options</h2>
          <div className={styles.deliveryOptions}>
            <div className={styles.deliveryOption}>
              <h3>Standard Shipping</h3>
              <p>3-5 business days</p>
              <p>Free for orders above ₹299</p>
              <p>₹99 for orders below ₹299</p>
            </div>
            <div className={styles.deliveryOption}>
              <h3>Express Shipping</h3>
              <p>1-2 business days</p>
              <p>₹199 flat rate</p>
            </div>
            <div className={styles.deliveryOption}>
              <h3>Same Day Delivery</h3>
              <p>Available in select cities</p>
              <p>Order before 12 PM</p>
              <p>₹299 flat rate</p>
            </div>
          </div>
        </div>

        <div className={styles.shippingSection}>
          <h2>Shipping Policy</h2>
          <ul className={styles.policyList}>
            <li>Orders are processed within 24 hours on business days</li>
            <li>Delivery times are estimates and may vary based on location</li>
            <li>We ship to all locations across India</li>
            <li>International shipping is available to select countries</li>
            <li>Shipping fees are non-refundable</li>
            <li>Address changes cannot be made once an order has been shipped</li>
          </ul>
        </div>

        <div className={styles.shippingSection}>
          <h2>Track Your Order</h2>
          <p>Once your order ships, you'll receive a confirmation email with tracking information.</p>
          <p>You can also track your order by visiting our <a href="/order-tracking">Order Tracking</a> page.</p>
        </div>

        <div className={styles.shippingFAQ}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <h3>How can I check the status of my order?</h3>
            <p>You can check your order status by visiting the Order Tracking page and entering your order number and email address.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Do you ship internationally?</h3>
            <p>Yes, we ship to select international destinations. International shipping rates and delivery times vary by location.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What if I'm not available to receive my package?</h3>
            <p>Our courier partners will attempt delivery up to 3 times. If delivery is unsuccessful, the package will be returned to our facility.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;