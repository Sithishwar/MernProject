import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./connector/Navbar";
import Offer from "./pages/Offer";
import Page1 from "./pages/Page1";
import Aboutus from "./pages/Aboutus";
import Faq from "./pages/Faq";
import TAC from "./pages/TAC";
import Cart from "./pages/Cart";
import PrivacyPolicy from './pages/home/Privacy';
import Accessibility from './pages/home/Accessibility';  // Add this import

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<TAC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/accessibility" element={<Accessibility />} />  {/* Add this route */}
      </Routes>
    </>
  );
}

export default App;
