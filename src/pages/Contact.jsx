import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Get in touch for emergency service, free quotes, or any questions about our stuckUp borewell services
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-info-title">Get In Touch</h2>
              <p className="contact-info-description">
                We're here to help with all your borewell needs. Contact us for emergency service, 
                free consultations, or any questions about our services.
              </p>

              <div className="contact-items">
                <div className="contact-card emergency">
                  <div className="contact-item-header">
                    <div className="contact-icon-container">
                      <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h3>Emergency Hotline</h3>
                      <a href="tel:+917702486592" className="contact-number">+91 7702486592</a>
                      <p className="contact-sub-text">Available 24/7 for emergency borewell service</p>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-item-header">
                    <div className="contact-icon-container">
                      <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h3>Email Us</h3>
                      <a href="mailto:info@kvborewells.com" className="contact-email">beesettyk@gmail.com</a>
                      <p className="contact-sub-text">We'll respond within 30 minutes during business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2 className="contact-form-title">Send Us a Message</h2>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-input" type="tel" placeholder="+91 xxxxx xxxxx" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Service Required *</label>
                  <select className="form-select" required>
                    <option value="">Select a service</option>
                    <option value="drilling">StuckUp motors</option>
                    <option value="recovery">Stuck Pipe Recovery</option>
                    <option value="cleaning">hdp pile fallen in bore well</option>
                    <option value="testing">motor fallen in bore well</option>
                    <option value="emergency">others</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea className="form-textarea" placeholder="Please describe your requirements..." required />
                </div>

                <button type="submit" className="form-submit">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;