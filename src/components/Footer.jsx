import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content glass">
          <div className="footer-info">
            <h2 className="footer-title">Let's Create Together.</h2>
            <p className="footer-text">Open for freelance opportunities, collaborations, and full-time roles in media and communications.</p>
            <a href="mailto:hello@elenamontgomery.com" className="footer-email">hello@elenamontgomery.com</a>
          </div>
          
          <div className="footer-social">
            <h3 className="social-title">Follow Me</h3>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Medium</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elena Montgomery. All rights reserved.</p>
          <p>Designed with minimal elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
