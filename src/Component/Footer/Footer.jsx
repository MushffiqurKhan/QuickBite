import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">QuickBite</h2>
          <p>
            Delivering fresh, hot & delicious food to your doorstep anytime.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Restaurants</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Fast Delivery</li>
            <li>Live Tracking</li>
            <li>Easy Ordering</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@quickbite.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 QuickBite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
