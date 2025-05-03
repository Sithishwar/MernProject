import React from 'react';
import styles from './ProductDetail.module.css';

function ProductDetail({ product, onClose }) {
  // Product descriptions based on product name
  const getProductDescription = (name) => {
    const descriptions = {
      'Lipstick': 'Our signature lipstick offers vibrant, long-lasting color with a creamy texture that glides on smoothly. Enriched with vitamin E and shea butter for hydration, this lipstick provides comfortable wear throughout the day. Available in a range of stunning shades to complement every skin tone.',
      'Foundation': 'This lightweight, buildable foundation provides medium to full coverage with a natural finish. Formulated with skin-loving ingredients, it helps even out skin tone while letting your natural beauty shine through. Oil-free and non-comedogenic, suitable for all skin types.',
      'Eyeshadow': 'Our eyeshadow palette features highly pigmented, blendable shades that create stunning eye looks from subtle to dramatic. The velvety formula applies smoothly and stays put without creasing or fading. Mix and match to create endless possibilities.',
      'Skincare Cream': 'This nourishing cream deeply hydrates and rejuvenates your skin. Formulated with hyaluronic acid and natural botanicals, it helps improve skin elasticity and reduce the appearance of fine lines. Wake up to softer, more radiant skin every morning.',
      'Perfume': 'A captivating fragrance that opens with fresh citrus notes, blends into a heart of delicate florals, and settles into a warm base of amber and musk. Long-lasting and sophisticated, this scent transitions beautifully from day to evening wear.',
      'Nail Polish': 'Our chip-resistant nail polish delivers high-shine, long-lasting color in just two coats. The quick-dry formula features a wide brush for easy, streak-free application. Free from harmful chemicals like formaldehyde, toluene, and DBP.',
      'Mascara': 'This volumizing mascara dramatically lifts and separates lashes without clumping. The innovative brush design reaches every lash, even the smallest ones, for a full, fanned-out effect. Smudge-proof and long-wearing.',
      'Blush': 'Our silky blush adds a natural flush of color to your cheeks. The buildable formula blends seamlessly into the skin for a radiant finish. Infused with antioxidants to nourish your skin while you wear it.',
      'Concealer': 'This creamy concealer effectively covers dark circles, blemishes, and imperfections while looking natural on the skin. The lightweight formula won't crease or settle into fine lines. Available in a wide range of shades for perfect matching.',
      'Highlighter': 'Create a luminous glow with our finely-milled highlighter. The silky powder applies smoothly and can be built up from subtle radiance to intense brilliance. Perfect for accentuating your best features.',
      'Eyeliner': 'Our precision eyeliner delivers intense color payoff with exceptional control. The waterproof formula stays put all day without smudging or fading. Create anything from subtle definition to dramatic wings with ease.',
      'Moisturizer': 'This daily moisturizer provides 24-hour hydration without feeling heavy or greasy. Formulated with ceramides and hyaluronic acid, it strengthens your skin barrier while locking in moisture. Suitable for sensitive skin.'
    };
    
    return descriptions[name] || 'A premium quality beauty product from KosmoCare, designed to enhance your natural beauty.';
  };

  // Additional product features
  const getProductFeatures = (name) => {
    const features = {
      'Lipstick': ['Long-lasting color', 'Hydrating formula', 'Cruelty-free', 'Paraben-free'],
      'Foundation': ['Buildable coverage', 'Natural finish', 'Oil-free formula', '24-hour wear'],
      'Eyeshadow': ['Highly pigmented', 'Blendable formula', 'No fallout', 'Crease-resistant'],
      'Skincare Cream': ['Deep hydration', 'Anti-aging benefits', 'Suitable for all skin types', 'Fragrance-free'],
      'Perfume': ['Long-lasting scent', 'Unique fragrance notes', 'Elegant bottle design', 'Travel-friendly size'],
      'Nail Polish': ['Quick-dry formula', 'Chip-resistant', '7-free formula', 'High-shine finish'],
      'Mascara': ['Volumizing and lengthening', 'Smudge-proof', 'Easy to remove', 'Ophthalmologist tested'],
      'Blush': ['Buildable color', 'Natural finish', 'Long-wearing', 'Suitable for all skin types'],
      'Concealer': ['Full coverage', 'Crease-resistant', 'Hydrating formula', 'Blends seamlessly'],
      'Highlighter': ['Subtle shimmer', 'Buildable glow', 'Finely milled powder', 'Long-lasting wear'],
      'Eyeliner': ['Waterproof formula', 'Intense color payoff', 'Smudge-proof', 'Easy application'],
      'Moisturizer': ['24-hour hydration', 'Non-comedogenic', 'Fragrance-free', 'Strengthens skin barrier']
    };
    
    return features[name] || ['Premium quality', 'Cruelty-free', 'Dermatologist tested', 'Made with care'];
  };

  return (
    <div className={styles.productDetailContainer}>
      <button className={styles.backButton} onClick={onClose}>
        &larr; Back to Products
      </button>
      
      <div className={styles.productDetailContent}>
        <div className={styles.productImageSection}>
          <img 
            src={product.img} 
            alt={product.name} 
            className={styles.productDetailImage} 
          />
        </div>
        
        <div className={styles.productInfoSection}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productPrice}>₹{product.price}</p>
          
          <div className={styles.productDescription}>
            <h3>Product Description</h3>
            <p>{getProductDescription(product.name)}</p>
          </div>
          
          <div className={styles.productFeatures}>
            <h3>Key Features</h3>
            <ul>
              {getProductFeatures(product.name).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.productActions}>
            <button 
              className={styles.addToCartBtn}
              onClick={() => {
                // You can reuse your existing addToCart function here
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
                
                if (existingItemIndex >= 0) {
                  cartItems[existingItemIndex].quantity += 1;
                } else {
                  cartItems.push({
                    ...product,
                    quantity: 1
                  });
                }
                
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                window.dispatchEvent(new Event('storage'));
                
                alert(`${product.name} added to cart!`);
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