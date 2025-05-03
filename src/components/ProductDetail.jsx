import React from 'react';
import styles from './ProductDetail.module.css';

function ProductDetail({ product, onClose, addToCart }) {
  if (!product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalContent}>
          <div className={styles.productImage}>
            <img src={product.img} alt={product.name} />
          </div>
          <div className={styles.productDetails}>
            <h2>{product.name}</h2>
            <p className={styles.price}>₹{product.price}</p>
            <div className={styles.description}>
              <h3>Product Description</h3>
              <p>{product.description || 'Experience the luxury of premium beauty with this high-quality cosmetic product.'}</p>
            </div>
            <button 
              className={styles.addToCartButton}
              onClick={() => {
                addToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;