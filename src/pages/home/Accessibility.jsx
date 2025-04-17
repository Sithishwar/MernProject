import React from 'react';
import './Accessibility.css';

function Accessibility() {
  return (
    <div className="info-page-container">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <h1>Beauty For Everyone: Our Accessibility Promise</h1>
      
      <div id="main-content">
        <p>At KosmoCare, we believe beauty should be accessible to everyone. We are committed to creating an inclusive digital experience that allows all users, including those with disabilities, to explore and enjoy our products with ease.</p>

        <h3>Our Beauty-For-All Commitment</h3>
        <p>Just as our products are formulated to celebrate diversity, our website is designed with accessibility in mind. We follow Web Content Accessibility Guidelines (WCAG) to ensure that everyone can experience the transformative power of KosmoCare.</p>

        <h3>Accessibility Features</h3>
        <ul>
          <li><strong>Keyboard navigation:</strong> Our site can be fully navigated without a mouse, using keyboard commands</li>
          <li><strong>Screen reader compatibility:</strong> We use appropriate alt text and ARIA labels throughout our site</li>
          <li><strong>Color contrast:</strong> Our designs maintain readable contrast between text and backgrounds</li>
          <li><strong>Clear typography:</strong> We use legible fonts and adjustable text sizing</li>
          <li><strong>Alternative product views:</strong> Detailed text descriptions of all cosmetics and their effects</li>
          <li><strong>Simplified navigation:</strong> Clear menus and consistent layouts throughout the site</li>
        </ul>

        <h3>Product Accessibility Information</h3>
        <p>We also provide accessibility information for our physical products, including:</p>
        <ul>
          <li>Packaging designed for easy opening</li>
          <li>Braille labeling on select products</li>
          <li>Easy-grip applicators for users with limited dexterity</li>
          <li>Fragrance-free options for those with sensitivities</li>
        </ul>

        <h3>Continuous Improvement</h3>
        <p>Like our commitment to innovation in skincare and cosmetics, we continuously work to enhance our digital accessibility. We regularly audit our site, test with assistive technologies, and welcome your feedback.</p>

        <div className="contact-info">
          <p>If you encounter any accessibility barriers on our website or have suggestions for improvement, please contact our dedicated team at <a href="mailto:accessibility@kosmocare.com">accessibility@kosmocare.com</a></p>
          <p>We're here to ensure everyone can discover their glow, regardless of ability.</p>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;