import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Shop</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/order-tracking">Order Tracking</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/account">Account Settings</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <ul>
            <li><Link to="/about">About KosmoCare</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/accessibility">Accessibility</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} KosmoCare. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;