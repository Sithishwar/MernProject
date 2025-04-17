import React from 'react';
import styles from './Privacy.module.css';

function Privacy() {
  return (
    <div className={styles['info-page-container']}>
      <div className={styles['header-section']}>
        <h1>Privacy Policy</h1>
        <img 
          src="/api/placeholder/800/200" 
          alt="Cosmetic products arrangement" 
          className={styles['header-image']}
        />
      </div>
      
      <section className={styles['policy-section']}>
        <div className={styles['section-icon']}>
          <img 
            src="/api/placeholder/64/64" 
            alt="Information icon" 
            className={styles['icon']}
          />
        </div>
        <div className={styles['section-content']}>
          <h3>1. Information We Collect</h3>
          <p>We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support.</p>
        </div>
      </section>

      <section className={styles['policy-section']}>
        <div className={styles['section-icon']}>
          <img 
            src="/api/placeholder/64/64" 
            alt="Data usage icon" 
            className={styles['icon']}
          />
        </div>
        <div className={styles['section-content']}>
          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect to process your orders, personalize your shopping experience, and communicate with you about our products and services.</p>
        </div>
      </section>

      <div className={styles['divider-image']}>
        <img 
          src="/api/placeholder/700/150" 
          alt="Beauty products showcase" 
          className={styles['divider']}
        />
      </div>

      <section className={styles['policy-section']}>
        <div className={styles['section-icon']}>
          <img 
            src="/api/placeholder/64/64" 
            alt="Sharing icon" 
            className={styles['icon']}
          />
        </div>
        <div className={styles['section-content']}>
          <h3>3. Information Sharing</h3>
          <p>We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website.</p>
        </div>
      </section>

      <section className={styles['policy-section']}>
        <div className={styles['section-icon']}>
          <img 
            src="/api/placeholder/64/64" 
            alt="Security lock icon" 
            className={styles['icon']}
          />
        </div>
        <div className={styles['section-content']}>
          <h3>4. Security</h3>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
        </div>
      </section>

      <section className={styles['policy-section']}>
        <div className={styles['section-icon']}>
          <img 
            src="/api/placeholder/64/64" 
            alt="Contact icon" 
            className={styles['icon']}
          />
        </div>
        <div className={styles['section-content']}>
          <h3>5. Contact Us</h3>
          <p>If you have any questions about our Privacy Policy, please contact us at privacy@kosmocare.com</p>
        </div>
      </section>

      <div className={styles['footer-image']}>
        <img 
          src="/api/placeholder/800/200" 
          alt="Natural ingredients for cosmetics" 
          className={styles['footer-image']}
        />
      </div>
    </div>
  );
}

export default Privacy;