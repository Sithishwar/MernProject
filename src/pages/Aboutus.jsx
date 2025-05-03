import React, { useState } from 'react';
import styles from './Aboutus.module.css';
import { ChevronDown, ChevronUp, Heart, Award, Users, Clock, Leaf, Sparkles, Globe, Truck, Shield } from 'lucide-react';

function Aboutus() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    { title: "Our Story", icon: <Heart size={20} />, content: [
        "KosmoCare was founded in 2018 with a simple mission: to provide high-quality beauty and skincare products that are effective, affordable, and kind to both people and the planet.",
        "What started as a small passion project has now grown into a beloved brand trusted by thousands of customers across India.",
        "Our journey is driven by the belief that everyone deserves to feel confident in their own skin."
      ] 
    },
    { title: "Our Values", icon: <Award size={20} />, content: [
        "Quality: We never compromise on the quality of our ingredients or products.",
        "Transparency: We believe in being honest about what goes into our products and how they're made.",
        "Inclusivity: Beauty comes in all forms, and our products are designed for everyone.",
        "Sustainability: We're committed to reducing our environmental footprint at every step."
      ] 
    },
    { title: "Our Team", icon: <Users size={20} />, content: [
        "Behind KosmoCare is a diverse team of beauty enthusiasts, skincare experts, and industry professionals who are passionate about what they do.",
        "Our team works tirelessly to research, develop, and test products that meet our high standards and your expectations.",
        "We're united by our love for beauty and our commitment to customer satisfaction."
      ] 
    },
    { title: "Our Commitment", icon: <Clock size={20} />, content: [
        "We're committed to continuous improvement and innovation in everything we do.",
        "Customer feedback drives our product development, and we're always listening to what you have to say.",
        "We stand behind every product we sell with our satisfaction guarantee."
      ] 
    },
    { title: "Sustainability", icon: <Leaf size={20} />, content: [
        "We use eco-friendly packaging wherever possible and are working towards being 100% sustainable by 2025.",
        "Our ingredients are ethically sourced, and we never test on animals.",
        "We partner with environmental organizations to offset our carbon footprint."
      ] 
    },
    { title: "Product Quality", icon: <Sparkles size={20} />, content: [
        "All our products undergo rigorous testing to ensure they meet the highest standards of quality and safety.",
        "We work with certified laboratories and follow strict manufacturing protocols.",
        "Our formulations are developed by experienced cosmetic chemists who understand what works."
      ] 
    },
    { title: "Global Reach", icon: <Globe size={20} />, content: [
        "While we're proudly Indian, our products are loved by customers around the world.",
        "We ship to over 20 countries and are constantly expanding our reach.",
        "Our formulations are designed to work for diverse skin types and concerns across different climates."
      ] 
    },
    { title: "Shipping & Returns", icon: <Truck size={20} />, content: [
        "We offer free shipping on orders above ₹299 within India.",
        "International shipping is available at competitive rates.",
        "Our hassle-free return policy allows you to shop with confidence."
      ] 
    },
    { title: "Customer Promise", icon: <Shield size={20} />, content: [
        "Your satisfaction is our top priority, and we're here to help with any questions or concerns.",
        "Our customer service team is available 7 days a week to assist you.",
        "We value your feedback and use it to improve our products and services."
      ] 
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.banner}>
        <img src="data:image/jpeg;base64,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" alt="About KosmoCare" />
        <div className={styles.bannerText}>
          <h1>About KosmoCare</h1>
          <p>Beauty with purpose, made for you</p>
        </div>
      </div>

      <div className={styles.sectionsContainer}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <div 
              className={styles.sectionHeader} 
              onClick={() => toggleSection(index)}
            >
              <div className={styles.headerContent}>
                <span className={styles.icon}>{section.icon}</span>
                <h2>{section.title}</h2>
              </div>
              <span className={styles.toggleIcon}>
                {expandedSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </div>
            {expandedSection === index && (
              <div className={styles.sectionContent}>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutus;
