import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div className="header-wrapper">
      <div className="top-bar">
        <div className="logo">
          <img src={logo} className="logo1"/>
         <p>KV Borewells</p> 
          </div>
        <div className="contact-number">📞 7702486592 , 9346194416</div>
      </div>
      <header className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Contact Us</a>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;