import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if there's any cart data in localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartItems.length);

    // Listen for storage events to update cart count
    const handleStorageChange = () => {
      const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartCount(updatedCartItems.length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src="/logo-1.svg" className={styles.logoImage} alt="KosmoCare Logo" />
          <h1 className={styles.logoText}>KosmoCare</h1>
        </Link>
        
        <div className={styles.mobileMenuToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`${styles.navbarContent} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.navbarLinks}>
            <Link to="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
            <Link to="/About" className={`${styles.navLink} ${isActive('/About') ? styles.active : ''}`}>About</Link>
            <Link to="/Offer" className={`${styles.navLink} ${isActive('/Offer') ? styles.active : ''}`}>Offers</Link>
            <Link to="/Faq" className={`${styles.navLink} ${isActive('/Faq') ? styles.active : ''}`}>FAQ</Link>
            <Link to="/TAC" className={`${styles.navLink} ${isActive('/TAC') ? styles.active : ''}`}>Terms</Link>
          </div>
          
          <div className={styles.navbarActions}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
            
            <Link to="/cart" className={styles.cartIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;