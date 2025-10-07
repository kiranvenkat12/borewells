import serviceDrilling from "../assets/service-drilling.jpg";
import serviceRecovery from "../assets/service-recovery.jpg";
import serviceCleaning from "../assets/service-cleaning.jpg";
import serviceTesting from "../assets/service-testing.jpg";
import serviceEmergency from "../assets/service-emergency.jpg";
import "../styles/MainContent.css";

const services = [
  {
    id: 1,
    title: "Fallen hdp pipe removal from borewell",
    description: "we have Professional workes for removing fallen hdp pipe from borewell and we give 100%  guarantee.",
    image: serviceDrilling,
  },
  {
    id: 2,
    title: "Motor Stuck in Borewell Recovery",
    description: "Expert recovery of stuck motor in borewell and equipment using specialized tools and techniques.",
    image: serviceRecovery,
  },
  {
    id: 3,
    title: "Stuck Motor recovery guarantee",
    description: "we give 99% guarantee for stuck motor recovery in borewell with experienced professionals.",
    image: serviceCleaning,
  },
  {
    id: 4,
    title: "Bore vehicle",
    description: "Eventhough for 100 feets of stucked motor we will keep our vechicle free of cost. you just pay for the work.",
    image: serviceTesting,
  },
  {
    id: 5,
    title: "24/7 Emergency Service",
    description: "Round-the-clock emergency support for urgent motor stucked in the bore well.",
    image: serviceEmergency,
  },
];

export const MainContent = () => {
  return (
    <section className="main-content">
      <div className="container">
        {/* Services Section */}
        <div className="section-header">
          <h2 className="section-title">
            Our Services
          </h2>
          <p className="section-description">
            Comprehensive borewell solutions with cutting-edge technology and years of expertise
          </p>
        </div>

        {/* Services Carousel */}
        <div className="services-carousel">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-image-overlay" />
                <div className="service-icon-container">
                  <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-description">
                  {service.description}
                </p>
                <button className="service-button">
                  Learn More
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-section">
          <div className="why-choose-header">
            <h2 className="why-choose-title">
              Why Choose KV Borewells?
            </h2>
            <p className="why-choose-description">
              Trusted by thousands of customers across Hyderabad
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-container">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="feature-title">Fast Service</h3>
              <p className="feature-description">Quick response times and efficient project completion</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Quality Assured</h3>
              <p className="feature-description">Premium equipment and certified professionals</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">Round-the-clock emergency assistance</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Guaranteed</h3>
              <p className="feature-description">99% satisfaction guarantee on stuck up motors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};