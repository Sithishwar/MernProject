import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../connector/navbar"; // Change to lowercase
import styles from "./AccountSettings.module.css";

function AccountSettings() {
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // If no user data exists, create a default one for demo
      const defaultUser = { name: 'Demo User', email: 'user@example.com' };
      setUser(defaultUser);
      localStorage.setItem('user', JSON.stringify(defaultUser));
    }
  }, []);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage('Please fill in all password fields');
      setIsError(true);
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match');
      setIsError(true);
      return;
    }
    
    // For demo purposes, we'll just check if current password is 'password'
    if (currentPassword !== 'password') {
      setMessage('Current password is incorrect');
      setIsError(true);
      return;
    }
    
    // In a real app, you would send this to your backend
    // For demo, we'll just show success message
    setMessage('Password updated successfully');
    setIsError(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLogout = () => {
    // Clear all authentication data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    
    // Redirect to login page
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.accountContainer}>
        <div className={styles.accountCard}>
          <h1 className={styles.accountTitle}>Account Settings</h1>
          
          <div className={styles.profileSection}>
            <div className={styles.profileHeader}>
              <div className={styles.avatarContainer}>
                <div className={styles.avatar}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className={styles.profileInfo}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
          
          <div className={styles.settingsSection}>
            <h3>Change Password</h3>
            
            {message && (
              <div className={`${styles.message} ${isError ? styles.errorMessage : styles.successMessage}`}>
                {message}
              </div>
            )}
            
            <form onSubmit={handlePasswordChange} className={styles.passwordForm}>
              <div className={styles.formGroup}>
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              
              <button type="submit" className={styles.updateButton}>
                Update Password
              </button>
            </form>
          </div>
          
          <div className={styles.logoutSection}>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;