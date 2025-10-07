import { useEffect } from "react";
import logo from "../assets/logo1.png";
import "../styles/SlideMenu.css";

export const SlideMenu = ({ isOpen, onClose }) => {
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="menu-overlay"
          onClick={onClose}
        />
      )}

      {/* Slide Menu */}
      <div className={`slide-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          {/* Header */}
          <div className="menu-header">
            <div className="menu-logo">
              <img 
                src={logo} 
                alt="KV Borewells Logo" 
                className="menu-logo-image"
              />
              <span className="menu-logo-text">KV Borewells</span>
            </div>
            <button
              onClick={onClose}
              className="close-button"
            >
              <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="menu-nav">
            <a 
              href="/" 
              className="menu-nav-link"
              onClick={onClose}
            >
              Home
            </a>
            <a 
              href="/services" 
              className="menu-nav-link"
              onClick={onClose}
            >
              Our Services
            </a>
            <a 
              href="/contact" 
              className="menu-nav-link"
              onClick={onClose}
            >
              Contact Us
            </a>
          </nav>

          {/* Contact Info */}
          <div className="contact-section">
            <h3 className="contact-title">Get in Touch</h3>
            
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 7702486592</span>
            </div>
            
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>beesettyk@gmail.com</span>
            </div>
            
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hyderabed, Telangana</span>
            </div>
<a 
  href="https://wa.me/917702486592" 
  className="menu-cta-button"
  target="_blank" 
  rel="noopener noreferrer"
>
  Get Quote
</a>
          </div>
        </div>
      </div>
    </>
  );
};