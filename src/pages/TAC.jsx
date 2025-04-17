import React, { useState } from 'react';
import styles from './TAC.module.css';
import { ChevronDown, ChevronUp, Shield, Truck, RotateCcw, CreditCard, Check, User, Copyright, AlertTriangle, Scale } from 'lucide-react';

function TAC() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    { title: "General", icon: <Shield size={20} />, content: [
        "These Terms and Conditions govern your use of the KosmoCare website and the products we offer.",
        "We reserve the right to update or modify these terms at any time without prior notice.",
      ] 
    },
    { title: "Products and Orders", icon: <Check size={20} />, content: [
        "All products listed on our website are subject to availability.",
        "We strive to provide accurate product descriptions, images, and prices, but errors may occasionally occur.",
        "Prices are subject to change without notice.",
      ] 
    },
    { title: "Shipping and Delivery", icon: <Truck size={20} />, content: [
        "Free shipping is available on orders above ₹299.",
        "We aim to deliver products within the estimated time, but delivery dates are not guaranteed.",
        "We are not responsible for delays caused by unforeseen circumstances or third-party logistics partners.",
      ] 
    },
    { title: "Returns and Refunds", icon: <RotateCcw size={20} />, content: [
        "Our 15-day return policy allows you to return unused and unopened products within 15 days of delivery.",
        "To initiate a return, please contact our customer support with your order details.",
        "Refunds will be processed after the returned product passes quality inspection.",
      ] 
    },
    { title: "Payments", icon: <CreditCard size={20} />, content: [
        "We accept payments via secure payment gateways.",
        "All transactions are processed in INR (Indian Rupees).",
        "Kosmocare is not responsible for any bank charges or additional fees applied by your payment provider.",
      ] 
    },
    { title: "Authenticity Guarantee", icon: <Check size={20} />, content: [
        "All our products are 100% authentic and sourced directly from trusted brands and suppliers.",
      ] 
    },
    { title: "User Responsibilities", icon: <User size={20} />, content: [
        "You agree not to misuse the website, upload malicious content, or attempt unauthorized access to our systems.",
        "We reserve the right to suspend or terminate access if any misuse is detected.",
      ] 
    },
    { title: "Intellectual Property", icon: <Copyright size={20} />, content: [
        "All content on the site, including text, images, logos, and graphics, is the property of KosmoCare and protected by copyright laws.",
        "Any unauthorized use of our content is strictly prohibited.",
      ] 
    },
    { title: "Limitation of Liability", icon: <AlertTriangle size={20} />, content: [
        "KosmoCare is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.",
      ] 
    },
    { title: "Governing Law", icon: <Scale size={20} />, content: [
        "These terms shall be governed and construed in accordance with the laws of India.",
        "Any disputes shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.",
      ] 
    },
  ];

  return (
    <div className={styles.tacContainer}>
      <div className={styles.banner}>
        <img src="/api/placeholder/800/250" alt="Banner" className={styles.bannerImage} />
        <div className={styles.bannerText}>
          <h1>Terms and Conditions</h1>
          <p>KosmoCare — The World of Cosmetics</p>
        </div>
      </div>

      <div className={styles.intro}>
        <p>
          Welcome to KosmoCare. By accessing and using our website, you agree to comply with the following terms and conditions.
          Please read them carefully before making any purchase.
        </p>
      </div>

      <div className={styles.sections}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <button className={styles.sectionHeader} onClick={() => toggleSection(index)}>
              <div className={styles.sectionTitle}>
                {section.icon}
                <h3>{index + 1}. {section.title}</h3>
              </div>
              {expandedSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSection === index && (
              <ul className={styles.sectionContent}>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>© 2025 KosmoCare. All rights reserved.</p>
        <p>For customer support: support@kosmocare.com</p>
      </footer>
    </div>
  );
}

export default TAC;
