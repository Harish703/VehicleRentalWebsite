import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <div>
              <p>3, 10/2,  Rent 'N Roll Private LTD, Cross cut Road,</p>
              <p>Gandhipuram, Coimbatore, Tamil Nadu, 641109</p>
            </div>
          </div>
          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <p>Email: rent'nroll@gmail.com</p>
          </div>
          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <p>Phone: +91 9361391464</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <a href="#"><FaFacebookF className="footer-icon" /></a>
            <a href="#"><FaTwitter className="footer-icon" /></a>
            <a href="#"><FaInstagram className="footer-icon" /></a>
            <a href="#"><FaLinkedinIn className="footer-icon" /></a>
          </div>
        </div>
        <div className="footer-download">
          <h3>Download Our App</h3>
          <div className="footer-icons">
            <a href="#"><SiGoogleplay className="footer-icon" /></a>
            <a href="#"><SiAppstore className="footer-icon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Vehicle Rental. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
