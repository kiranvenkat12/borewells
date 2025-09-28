import heroImage from "../assets/hero-bg.jpg";
import "../styles/Banner.css";

export const Banner = () => {
  return (
    <section className="banner">
      {/* Background Image */}
      <div 
        className="banner-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="banner-overlay" />

      {/* Content */}
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">
            Professional Stuckup motor Borewell Services
            <span className="banner-accent">30 years of Experience</span>
          </h1>
          
          <p className="banner-subtitle">
With over 30 years of experience, we specialize in safely retrieving submersible motors that have fallen into borewells — whether it's 4.5-inch or 6.5-inch motors, our expert team and advanced equipment ensure efficient          </p>
{/* Phone Number Highlight */}
<div className="phone-highlight">
  <svg className="phone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
  <a href="tel:+917702486592" className="phone-number">
    7702486592
  </a>
</div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
           <a 
  href="https://wa.me/917702486592" 
  className="btn-primary"
  target="_blank" 
  rel="noopener noreferrer"
>
  Get Quote
</a>
            <a href="/services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
};