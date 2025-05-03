import React from "react";
import styles from "./About.module.css";

function OurStory() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>Our Story</h1>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>The KosmoCare Journey</h2>
          
          <img 
            src="/founder-image.jpg" 
            alt="KosmoCare Founder" 
            className={styles.featureImage}
          />
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Beginnings</h3>
            <p className={styles.cardContent}>
              KosmoCare was founded in 2025 by Sithishwar, a passionate college student with a vision for better beauty products. 
              After struggling to find cosmetics that were both effective and ethically produced, 
              Sithishwar decided to create his own line of products that prioritized quality ingredients, 
              sustainability, and inclusivity.
            </p>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardContent}>
              At KosmoCare, our mission is to empower individuals to feel confident in their own skin. 
              We believe beauty should be accessible to everyone, which is why we create products for 
              all skin types, tones, and concerns.
            </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Quality</h3>
              <p className={styles.cardContent}>
                We use only the finest ingredients in our formulations to ensure effective and safe products.
              </p>
            </div>
            
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Sustainability</h3>
              <p className={styles.cardContent}>
                We're committed to reducing our environmental impact through eco-friendly practices.
              </p>
            </div>
            
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Inclusivity</h3>
              <p className={styles.cardContent}>
                We create products for everyone, regardless of age, gender, or skin tone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;