import React from 'react';
import styles from './Returns.module.css';

function Returns() {
  return (
    <div className={styles.returnsContainer}>
      <div className={styles.returnsHeader}>
        <h1>Returns & Refunds</h1>
        <p>Our hassle-free return policy ensures your satisfaction</p>
      </div>

      <div className={styles.returnsContent}>
        <div className={styles.returnsSection}>
          <h2>Return Policy</h2>
          <ul className={styles.policyList}>
            <li>We accept returns within 15 days of delivery</li>
            <li>Products must be unused and in their original packaging</li>
            <li>Certain items like opened cosmetics may not be eligible for returns due to hygiene reasons</li>
            <li>Sale items and special promotions may have different return policies</li>
            <li>Shipping fees are non-refundable</li>
          </ul>
        </div>

        <div className={styles.returnsSection}>
          <h2>How to Return</h2>
          <div className={styles.returnSteps}>
            <div className={styles.returnStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Initiate Return</h3>
                <p>Contact our customer support team with your order details to initiate a return</p>
              </div>
            </div>
            <div className={styles.returnStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Package Your Items</h3>
                <p>Securely pack the items in their original packaging</p>
              </div>
            </div>
            <div className={styles.returnStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Ship Your Return</h3>
                <p>Use the provided return label or ship to our returns address</p>
              </div>
            </div>
            <div className={styles.returnStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Refund Processing</h3>
                <p>Once we receive and inspect your return, we'll process your refund</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.returnsSection}>
          <h2>Refund Information</h2>
          <p>Refunds will be processed to the original payment method within 5-7 business days after we receive and inspect your return.</p>
          <p>You'll receive an email notification when your refund has been processed.</p>
        </div>

        <div className={styles.returnsFAQ}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <h3>Can I exchange an item instead of returning it?</h3>
            <p>Yes, you can request an exchange for a different shade or product of equal value.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What if I received a damaged or incorrect item?</h3>
            <p>Please contact our customer support team immediately with photos of the damaged item or incorrect product.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>How long do I have to return an item?</h3>
            <p>You have 15 days from the date of delivery to initiate a return.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Returns;