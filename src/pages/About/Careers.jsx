import React from "react";
import styles from "../../pages/Page1.module.css"; // Updated path

function Careers() {
  const openPositions = [
    {
      title: "Product Development Specialist",
      department: "Research & Development",
      location: "Mumbai, India",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Bangalore, India",
      type: "Full-time"
    },
    {
      title: "Customer Experience Associate",
      department: "Customer Support",
      location: "Remote, India",
      type: "Full-time"
    },
    {
      title: "Supply Chain Coordinator",
      department: "Operations",
      location: "Delhi, India",
      type: "Full-time"
    },
    {
      title: "Social Media Content Creator",
      department: "Marketing",
      location: "Remote, India",
      type: "Part-time"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>Careers at KosmoCare</h1>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Join Our Team</h2>
          
          <div className={styles.careerIntro}>
            <p>
              At KosmoCare, we're building a team of passionate individuals who are dedicated to 
              transforming the beauty industry. We offer competitive compensation, comprehensive 
              benefits, and a supportive work environment where creativity and innovation thrive.
            </p>
          </div>
          
          <div className={styles.whyJoinUs}>
            <h3>Why Work With Us?</h3>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h4>Growth Opportunities</h4>
                <p>Continuous learning and career advancement paths</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Inclusive Culture</h4>
                <p>A diverse and supportive work environment</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Work-Life Balance</h4>
                <p>Flexible schedules and remote work options</p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Employee Discounts</h4>
                <p>Generous discounts on all KosmoCare products</p>
              </div>
            </div>
          </div>
          
          <div className={styles.openPositions}>
            <h3>Current Openings</h3>
            <div className={styles.positionsGrid}>
              {openPositions.map((position, index) => (
                <div key={index} className={styles.positionCard}>
                  <h4>{position.title}</h4>
                  <p><strong>Department:</strong> {position.department}</p>
                  <p><strong>Location:</strong> {position.location}</p>
                  <p><strong>Type:</strong> {position.type}</p>
                  <button className={styles.btn}>Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;