import React, { useState } from 'react';
import Navbar from './connector/Navbar';
import styles from './Shop.module.css';

function Makeup() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    { id: 1, name: 'Lipstick', price: 599, category: 'lips', img: '/lipstick.jpeg' },
    { id: 7, name: 'Mascara', price: 699, category: 'eyes', img: '/Mascara.jpeg' },
    { id: 8, name: 'Blush', price: 599, category: 'face', img: '/Blush.jpeg' },
    { id: 9, name: 'Concealer', price: 799, category: 'face', img: '/Concealer.jpeg' },
    { id: 10, name: 'Highlighter', price: 899, category: 'face', img: '/Highlighter.jpeg' },
    { id: 11, name: 'Eyeliner', price: 499, category: 'eyes', img: '/Eyeliner.jpeg' },
    { id: 13, name: 'Lip Gloss', price: 499, category: 'lips', img: '/lipstick.jpeg' },
    { id: 14, name: 'Eyebrow Pencil', price: 399, category: 'eyes', img: '/Eyeliner.jpeg' },
    { id: 15, name: 'Setting Powder', price: 799, category: 'face', img: '/Foundation.jpeg' },
  ];

  const categories = [
    { id: 'all', name: 'All Makeup' },
    { id: 'face', name: 'Face' },
    { id: 'eyes', name: 'Eyes' },
    { id: 'lips', name: 'Lips' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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

  return (
    <>
      <Navbar />
      <div className={styles.shopContainer}>
        <div className={styles.shopHeader}>
          <h1>Makeup Collection</h1>
          <p>Discover our premium makeup products for a flawless look</p>
        </div>
        
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className={styles.productGrid}>
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
        </div>
      </div>
    </>
  );
}

export default Makeup;