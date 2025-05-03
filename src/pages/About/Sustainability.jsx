import React from "react";
import styles from "../../pages/Page1.module.css"; // Updated path

function Sustainability() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>Our Sustainability Commitment</h1>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.sustainabilityHero}>
            <img 
              src="/sustainability-hero.jpg" 
              alt="Sustainability at KosmoCare" 
              className={styles.sustainabilityImage}
            />
            <div className={styles.sustainabilityOverlay}>
              <h2>Beauty That Cares</h2>
              <p>Our commitment to the planet is as important as our commitment to your beauty.</p>
            </div>
          </div>
          
          <div className={styles.sustainabilityPillars}>
            <h2 className={styles.sectionTitle}>Our Sustainability Pillars</h2>
            
            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🌱</div>
                <h3>Responsible Sourcing</h3>
                <p>
                  We carefully select ingredients that are ethically sourced and 
                  sustainable. We work directly with suppliers who share our values 
                  and ensure fair compensation for workers.
                </p>
              </div>
              
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>♻️</div>
                <h3>Eco-Friendly Packaging</h3>
                <p>
                  We're transitioning all our packaging to recyclable, biodegradable, 
                  or reusable materials. By 2024, we aim to eliminate all single-use 
                  plastics from our product line.
                </p>
              </div>
              
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🐰</div>
                <h3>Cruelty-Free Promise</h3>
                <p>
                  We never test on animals and are proudly certified cruelty-free. 
                  We believe beauty should never come at the expense of animal welfare.
                </p>
              </div>
              
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>💧</div>
                <h3>Water Conservation</h3>
                <p>
                  Our manufacturing processes are designed to minimize water usage, 
                  and we're constantly innovating to reduce our water footprint 
                  throughout our supply chain.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.sustainabilityGoals}>
            <h2 className={styles.sectionTitle}>Our 2025 Goals</h2>
            
            <div className={styles.goalsList}>
              <div className={styles.goalItem}>
                <div className={styles.goalProgress} style={{width: '75%'}}></div>
                <div className={styles.goalContent}>
                  <h3>75% Complete</h3>
                  <p>100% recyclable or biodegradable packaging</p>
                </div>
              </div>
              
              <div className={styles.goalItem}>
                <div className={styles.goalProgress} style={{width: '60%'}}></div>
                <div className={styles.goalContent}>
                  <h3>60% Complete</h3>
                  <p>Carbon-neutral operations across all facilities</p>
                </div>
              </div>
              
              <div className={styles.goalItem}>
                <div className={styles.goalProgress} style={{width: '40%'}}></div>
                <div className={styles.goalContent}>
                  <h3>40% Complete</h3>
                  <p>Zero waste to landfill from production</p>
                </div>
              </div>
              
              <div className={styles.goalItem}>
                <div className={styles.goalProgress} style={{width: '90%'}}></div>
                <div className={styles.goalContent}>
                  <h3>90% Complete</h3>
                  <p>100% ethically sourced ingredients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.sustainabilityPartners}>
            <h2 className={styles.sectionTitle}>Our Partners</h2>
            <p>
              We collaborate with organizations that share our commitment to 
              sustainability and ethical practices. Together, we're working 
              towards a more responsible beauty industry.
            </p>
            
            <div className={styles.partnersGrid}>
              <div className={styles.partnerLogo}></div>
              <div className={styles.partnerLogo}></div>
              <div className={styles.partnerLogo}></div>
              <div className={styles.partnerLogo}></div>
            </div>
          </div>
          
          <div className={styles.sustainabilityAction}>
            <h2>Join Our Sustainability Journey</h2>
            <p>
              Learn how you can participate in our recycling program and make 
              your beauty routine more sustainable.
            </p>
            <button className={styles.btn}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sustainability;