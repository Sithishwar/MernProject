import React, { useState } from 'react';
import Navbar from './connector/Navbar';
import styles from './Shop.module.css';

function Skincare() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    { id: 4, name: 'Skincare Cream', price: 499, category: 'moisturizers', img: '/SkincareCream.jpeg' },
    { id: 12, name: 'Moisturizer', price: 699, category: 'moisturizers', img: '/Moisturizer.jpeg' },
    { id: 16, name: 'Facial Cleanser', price: 399, category: 'cleansers', img: '/SkincareCream.jpeg' },
    { id: 17, name: 'Toner', price: 349, category: 'toners', img: '/SkincareCream.jpeg' },
    { id: 18, name: 'Face Serum', price: 899, category: 'serums', img: '/SkincareCream.jpeg' },
    { id: 19, name: 'Face Mask', price: 299, category: 'masks', img: '/SkincareCream.jpeg' },
    { id: 20, name: 'Eye Cream', price: 599, category: 'eye-care', img: '/SkincareCream.jpeg' },
    { id: 21, name: 'Sunscreen', price: 449, category: 'sun-protection', img: '/SkincareCream.jpeg' },
  ];

  const categories = [
    { id: 'all', name: 'All Skincare' },
    { id: 'cleansers', name: 'Cleansers' },
    { id: 'toners', name: 'Toners' },
    { id: 'serums', name: 'Serums' },
    { id: 'moisturizers', name: 'Moisturizers' },
    { id: 'masks', name: 'Masks' },
    { id: 'eye-care', name: 'Eye Care' },
    { id: 'sun-protection', name: 'Sun Protection' },
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
          <h1>Skincare Collection</h1>
          <p>Nourish your skin with our premium skincare products</p>
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

export default Skincare;