import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Healthcare Limited, All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About Us</Link> | 
          <Link to="/contact"> Contact</Link> | 
          <Link to="/privacy">Privacy Policy</Link> | 
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
