import React, { useState } from 'react';
import Navbar from '../../connector/Navbar';
import styles from './Shop.module.css';

function Tools() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    { id: 27, name: 'Foundation Brush', price: 399, category: 'brushes', img: '/NailPolish.jpeg' },
    { id: 28, name: 'Eyeshadow Brush Set', price: 799, category: 'brushes', img: '/NailPolish.jpeg' },
    { id: 29, name: 'Beauty Blender', price: 299, category: 'sponges', img: '/NailPolish.jpeg' },
    { id: 30, name: 'Eyelash Curler', price: 349, category: 'tools', img: '/NailPolish.jpeg' },
    { id: 31, name: 'Makeup Bag', price: 599, category: 'accessories', img: '/NailPolish.jpeg' },
    { id: 32, name: 'Facial Roller', price: 699, category: 'tools', img: '/NailPolish.jpeg' },
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'brushes', name: 'Brushes' },
    { id: 'sponges', name: 'Sponges' },
    { id: 'tools', name: 'Tools' },
    { id: 'accessories', name: 'Accessories' },
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
          <h1>Tools & Brushes</h1>
          <p>Professional tools for flawless application</p>
        </div>
        
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelecte