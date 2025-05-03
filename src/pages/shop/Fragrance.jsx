import React, { useState } from 'react';
import Navbar from 'connector/Navbar';
import styles from '../Shop.module.css';

function Fragrance() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    { id: 5, name: 'Perfume', price: 1599, category: 'women', img: '/Perfume.jpeg' },
    { id: 22, name: 'Eau de Toilette', price: 1299, category: 'women', img: '/Perfume.jpeg' },
    { id: 23, name: 'Body Mist', price: 699, category: 'women', img: '/Perfume.jpeg' },
    { id: 24, name: 'Men\'s Cologne', price: 1499, category: 'men', img: '/Perfume.jpeg' },
    { id: 25, name: 'Unisex Fragrance', price: 1799, category: 'unisex', img: '/Perfume.jpeg' },
    { id: 26, name: 'Travel Size Perfume', price: 899, category: 'travel', img: '/Perfume.jpeg' },
  ];

  const categories = [
    { id: 'all', name: 'All Fragrances' },
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
    { id: 'unisex', name: 'Unisex' },
    { id: 'travel', name: 'Travel Size' },
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
          <h1>Fragrance Collection</h1>
          <p>Discover scents that leave a lasting impression</p>
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

export default Fragrance;