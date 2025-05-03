import React, { useState } from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    orderNumber: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      orderNumber: ''
    });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>We're here to help with any questions or concerns</p>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📞</div>
            <h3>Customer Support</h3>
            <p>+91 98765 43210</p>
            <p>Monday-Friday: 9AM-6PM</p>
            <p>Saturday: 10AM-4PM</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>✉️</div>
            <h3>Email Us</h3>
            <p>support@kosmocare.com</p>
            <p>For business inquiries:</p>
            <p>business@kosmocare.com</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏢</div>
            <h3>Head Office</h3>
            <p>KosmoCare Beauty Pvt. Ltd.</p>
            <p>123 Beauty Boulevard</p>
            <p>Mumbai, Maharashtra 400001</p>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          {submitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully. We'll get back to you within 24-48 hours.</p>
              <button 
                className={styles.newMessageBtn}
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>
              {error && <div className={styles.errorMessage}>{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.inputField}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.inputField}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="orderNumber">Order Number (if applicable)</label>
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder="e.g., KOS12345"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textareaField}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <p>Find quick answers to common questions or visit our <a href="/faq">FAQ page</a> for more information.</p>
      </div>
    </div>
  );
}

export default ContactUs;