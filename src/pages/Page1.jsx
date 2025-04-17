import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Page1.module.css';  // Change to CSS module import

function Page1() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    { id: 1, name: 'Lipstick', price: 599, img: '/lipstick.jpeg' },
    { id: 2, name: 'Foundation', price: 899, img: '/Foundation.jpeg' },
    { id: 3, name: 'Eyeshadow', price: 1299, img: '/Eyeshadow.jpeg' },
    { id: 4, name: 'Skincare Cream', price: 499, img: '/SkincareCream.jpeg' },
    { id: 5, name: 'Perfume', price: 1599, img: '/Perfume.jpeg' },
    { id: 6, name: 'Nail Polish', price: 299, img: '/NailPolish.jpeg' },
    { id: 7, name: 'Mascara', price: 699, img: '/Mascara.jpeg' },
    { id: 8, name: 'Blush', price: 599, img: '/Blush.jpeg' },
    { id: 9, name: 'Concealer', price: 799, img: '/Concealer.jpeg' },
    { id: 10, name: 'Highlighter', price: 899, img: '/Highlighter.jpeg' },
    { id: 11, name: 'Eyeliner', price: 499, img: '/Eyeliner.jpeg' },
    { id: 12, name: 'Moisturizer', price: 699, img: '/Moisturizer.jpeg' },
  ];

  const addToCart = (product) => {
    // Get existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if product already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // If product already exists in cart, increase quantity
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Add new product to cart with quantity 1
      cartItems.push({
        ...product,
        quantity: 1
      });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Dispatch a storage event so the navbar can update the cart count
    window.dispatchEvent(new Event('storage'));
    
    console.log(`Added ${product.name} to cart`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = searchTerm 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          
          <h1>Welcome to KosmoCare</h1>
        </div>
      </header>

      <section className={styles.hero}>
        <img src="/img-2.jpg" alt="Hero Visual" />
        <div className={styles.heroText}>
          <h2>Beauty Redefined</h2>
          <p>Discover the finest beauty essentials curated just for you.</p>
        </div>
      </section>

      <main className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imgWrapper}>
              <img 
                className={styles.productImg} 
                src={product.img} 
                alt={product.name} 
              />
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p className={styles.price}>₹{product.price}</p>
              <button 
                className={styles.btn}
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h3>Shop</h3>
            <ul>
              <li>Makeup</li>
              <li>Skincare</li>
              <li>Fragrance</li>
              <li>Tools & Brushes</li>
              <li>Gift Sets</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Help</h3>
            <ul>
              <li>FAQs</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Order Tracking</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>About</h3>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Connect</h3>
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
            </div>
            <p className={styles.appDownload}>Download our app</p>
            <div className={styles.appButtons}>
              <div className={`${styles.appButton} ${styles.apple}`}></div>
              <div className={`${styles.appButton} ${styles.google}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 KosmoCare Beauty. All rights reserved.</p>
          
          <div className={styles.footerLinks}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page1;