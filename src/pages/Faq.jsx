import React, { useState } from 'react';
import styles from './Faq.module.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. Follow the steps to enter your shipping and payment information to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, UPI, and net banking options. All payments are securely processed."
    },
    {
      question: "How long will shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for 1-2 business day delivery. International shipping may take 7-14 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items in their original, unused condition. Some products like opened cosmetics may not be eligible for returns due to hygiene reasons. Please see our full return policy for details."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes, all KosmoCare products are 100% cruelty-free and we never test on animals. We're committed to ethical beauty practices and sustainable sourcing."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can see shipping options during checkout."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to view order status and tracking details."
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Many of our products are formulated for sensitive skin, but we recommend checking the specific product details and ingredients list. Products marked 'for sensitive skin' have been specially formulated and tested."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about KosmoCare products and services</p>
      </div>

      <div className={styles.faqContent}>
        <div className={styles.faqAccordion}>
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.question}</h3>
                <span className={styles.faqIcon}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className={styles.faqAnswer} style={{
                maxHeight: activeIndex === index ? '500px' : '0'
              }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.faqSidebar}>
          <div className={styles.contactBox}>
            <h3>Still have questions?</h3>
            <p>Our customer support team is here to help you with any questions or concerns.</p>
            <button className={styles.contactBtn}>Contact Us</button>
          </div>
          
          <div className={styles.resourcesBox}>
            <h3>Helpful Resources</h3>
            <ul>
              <li><a href="/shipping">Shipping Information</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/product-care">Product Care</a></li>
              <li><a href="/ingredients">Ingredients Guide</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;