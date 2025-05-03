import React from "react";
import styles from "../../pages/Page1.module.css"; // Updated path

function Press() {
  const pressReleases = [
    {
      title: "KosmoCare Launches New Sustainable Packaging Initiative",
      date: "June 15, 2023",
      excerpt: "KosmoCare announces a complete transition to recyclable and biodegradable packaging across all product lines by 2024."
    },
    {
      title: "KosmoCare Expands to International Markets",
      date: "March 8, 2023",
      excerpt: "Following tremendous success in India, KosmoCare beauty products will now be available in 12 countries across Asia and Europe."
    },
    {
      title: "KosmoCare Partners with Leading Dermatologists for New Skincare Line",
      date: "November 22, 2022",
      excerpt: "The new medically-backed skincare collection addresses specific skin concerns with clinically-proven ingredients."
    },
    {
      title: "KosmoCare Receives Award for Ethical Business Practices",
      date: "September 5, 2022",
      excerpt: "The company was recognized for its commitment to cruelty-free testing, fair trade sourcing, and employee welfare."
    }
  ];

  const mediaFeatures = [
    {
      publication: "Vogue India",
      title: "The Rising Stars of Indian Beauty Brands",
      date: "May 2023"
    },
    {
      publication: "Economic Times",
      title: "How KosmoCare is Disrupting the Beauty Industry",
      date: "April 2023"
    },
    {
      publication: "Cosmopolitan",
      title: "10 Indian Beauty Brands That Are Changing the Game",
      date: "February 2023"
    },
    {
      publication: "Forbes India",
      title: "Entrepreneur Spotlight: The Founder of KosmoCare",
      date: "December 2022"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>Press & Media</h1>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.pressContact}>
            <h2>Media Inquiries</h2>
            <p>For press inquiries, please contact our media relations team:</p>
            <p><strong>Email:</strong> press@kosmocare.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
          
          <div className={styles.pressReleases}>
            <h2 className={styles.sectionTitle}>Press Releases</h2>
            <div className={styles.pressGrid}>
              {pressReleases.map((release, index) => (
                <div key={index} className={styles.pressCard}>
                  <span className={styles.pressDate}>{release.date}</span>
                  <h3>{release.title}</h3>
                  <p>{release.excerpt}</p>
                  <a href="#" className={styles.pressLink}>Read Full Release</a>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.mediaFeatures}>
            <h2 className={styles.sectionTitle}>Media Features</h2>
            <div className={styles.mediaGrid}>
              {mediaFeatures.map((feature, index) => (
                <div key={index} className={styles.mediaCard}>
                  <h3>{feature.title}</h3>
                  <p className={styles.mediaPublication}>{feature.publication}</p>
                  <p className={styles.mediaDate}>{feature.date}</p>
                  <a href="#" className={styles.mediaLink}>Read Article</a>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.brandAssets}>
            <h2 className={styles.sectionTitle}>Brand Assets</h2>
            <p>Download official KosmoCare logos, product images, and brand guidelines for media use.</p>
            <div className={styles.assetButtons}>
              <button className={styles.btn}>Download Logo Pack</button>
              <button className={styles.btn}>Download Product Images</button>
              <button className={styles.btn}>Brand Guidelines</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Press;