import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <span>About Us</span>
        <span>Careers</span>
        <span>Blog</span>
        <span>Events</span>
        <span>Solutions</span>
        <span>Academics</span>
        <span>Contact Us</span>
        <span>Facebook</span>
        <span>Twitter</span>
        <span>LinkedIn</span>
       
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
