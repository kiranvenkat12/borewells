import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">KV Borewells</div>
      
      <div className="footer-nav">
        <a href="#">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Our Services</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="footer-areas">
        <strong>We Serve in:</strong>
        <p>
          Ameerpet, Kukatpally, Madhapur, Gachibowli, Hitech City, Uppal, LB Nagar, 
          Mehdipatnam, Banjara Hills, Jubilee Hills, Secunderabad, Tarnaka, 
          Dilsukhnagar, Miyapur, Begumpet, and surrounding areas.
        </p>
      </div>

      <div className="footer-copy">
        © 2025 KV Borewells. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
