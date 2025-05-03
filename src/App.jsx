// Rename this file to App.jsx (capital A)
// OR
// Update all imports in other files to use lowercase "app.jsx"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./connector/Navbar";  // Fixed import path
// Removed Offer import
import Page1 from "./pages/Page1";
import Aboutus from "./pages/Aboutus";
import Faq from "./pages/Faq";
import TAC from "./pages/TAC";
import Cart from "./pages/Cart";
import PrivacyPolicy from './pages/home/Privacy';
import Accessibility from './pages/home/Accessibility';
import OurStory from "./pages/About/OurStory";
import Careers from "./pages/About/Careers";
import Press from "./pages/About/Press";
import Blog from "./pages/About/Blog";
import Sustainability from "./pages/About/Sustainability";
import Login from "./pages/Login";
import AccountSettings from "./pages/AccountSettings";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderTracking from "./pages/OrderTracking";
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Page1 />
            </>
          </ProtectedRoute>
        } />
        
        {/* Account settings route */}
        <Route path="/account" element={
          <ProtectedRoute>
            <AccountSettings />
          </ProtectedRoute>
        } />
        
        <Route path="/about" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Aboutus />
            </>
          </ProtectedRoute>
        } />
        
        {/* Removed Offer route */}
        
        <Route path="/faq" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Faq />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/TAC" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <TAC />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/privacy-policy" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <PrivacyPolicy />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/cart" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Cart />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/accessibility" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Accessibility />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/our-story" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <OurStory />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/careers" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Careers />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/press" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Press />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/blog" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Blog />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/sustainability" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Sustainability />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/order-tracking" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <OrderTracking />
            </>
          </ProtectedRoute>
        } />
      </Routes>
    </CartProvider>
  );
}

export default App;
