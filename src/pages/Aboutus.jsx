import React from "react";
import { Link } from "react-router-dom";
import styles from './Aboutus.module.css'; // Import CSS module
function Aboutus() {
    return (
        <div className={styles.aboutUsContainer}>
            <h1 className={styles.title}>About Kosmocare</h1>
            <p className={styles.description}>
                Welcome to <strong>Kosmocare</strong>, where beauty meets science. We provide premium skincare 
                and cosmetic products designed to enhance your natural beauty. Our formulations are dermatologically 
                tested, cruelty-free, and made with high-quality ingredients.
            </p>

            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.sectionText}>
                At Kosmocare, we believe skincare should be more than a routine—it should be a ritual. 
                Our mission is to empower individuals with products that are safe, effective, and suitable for all skin types.
            </p>

            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
            <ul className={styles.list}>
                <li>🌿 <strong>Natural & Safe Ingredients</strong></li>
                <li>🐰 <strong>Cruelty-Free & Vegan</strong></li>
                <li>🔬 <strong>Dermatologist Approved</strong></li>
                <li>💖 <strong>Tailored for Every Skin Type</strong></li>
            </ul>

            <p className={styles.callToAction}>
                Discover the magic of <strong>Kosmocare</strong> and redefine your beauty routine today.
            </p>
            <h6 ><Link to='/TAC' className={styles.terms}>Terms And Condition</Link></h6>
        </div>
    );
}

export default Aboutus;
