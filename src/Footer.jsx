import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h1>Global IT</h1>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li>
              <a href="#">Service</a>
              <ul className="sub-links">
                <li><a href="#">Software Service</a></li>
                <li><a href="#">Data Service</a></li>
                <li><a href="#">Digital Platform</a></li>
                <li><a href="#">Cloud Service</a></li>
                <li><a href="#">UI & UX Design</a></li>
                <li><a href="#">Software testing</a></li>
                <li><a href="#">Embbeded System</a></li>
                <li><a href="#">Maintance & Support</a></li>
                <li><a href="#">IOT (Internet Of Thing)</a></li>
              </ul>
            </li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 globalit@.com</p>
          <p>📱 +91 9003537984</p>
          <Link to="/Contact"> <a href="#" className="quote-btn">Get a Quote →</a></Link>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>ramanujam it city</p>
          <p>thiruvanmaiyur chennai</p>
          <h4>Follow Us</h4>
          
          <div className="social-icons">
      <a href="#" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" aria-label="Twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="#" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="#" aria-label="YouTube">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 suprases. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy and Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
