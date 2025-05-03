import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      if (!email || !password) {
        setError('Please enter both email and password');
        return;
      }
      
      // For demo purposes, we'll use a simple check
      if (email === 'user@example.com' && password === 'password') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Sign up logic
      if (!name || !email || !password || !confirmPassword) {
        setError('Please fill in all fields');
        return;
      }
      
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      
      // In a real app, you would send this data to your backend
      // For demo purposes, we'll just simulate a successful registration
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ name, email }));
      navigate('/');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h1>KosmoCare</h1>
          <p>{isLogin ? 'Sign in to your account' : 'Create a new account'}</p>
        </div>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className={styles.inputField}
              />
            </div>
          )}
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.inputField}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={styles.inputField}
            />
          </div>
          
          {!isLogin && (
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className={styles.inputField}
              />
            </div>
          )}
          
          <button type="submit" className={styles.loginButton}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className={styles.loginFooter}>
          {isLogin ? (
            <p>Don't have an account? <span className={styles.signupLink} onClick={toggleForm}>Sign up</span></p>
          ) : (
            <p>Already have an account? <span className={styles.signupLink} onClick={toggleForm}>Sign in</span></p>
          )}
          
          {isLogin && <p className={styles.forgotPassword}>Forgot password?</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
