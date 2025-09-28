import { useState } from "react";
import { SlideMenu } from "./SlideMenu";
import logo1 from "../assets/logo1.png";
import "../styles/Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo-section">
            <img 
              src={logo1} 
              alt="KV Borewells Logo" 
              className="logo-image"
            />
            <span className="logo-text">KV Borewells</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/services" className="nav-link">
              Services
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
            <a 
              href="https://wa.me/917702486592" 
              className="cta-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Slide Menu */}
      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
