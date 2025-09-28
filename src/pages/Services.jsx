import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import serviceDrilling from "../assets/service-drilling.jpg";
import serviceRecovery from "../assets/service-recovery.jpg";
import serviceCleaning from "../assets/service-cleaning.jpg";
import serviceTesting from "../assets/service-testing.jpg";
import serviceEmergency from "../assets/service-emergency.jpg";
import "../styles/Services.css";

const services = [
  {
    id: 1,
    title: "Fallen hdp pipe removal from borewell",
    description: "we have Professional workes for removing fallen hdp pipe from borewell and we give 100%  guarantee.",
    features: ["Advanced Bits to remove pipe", "Any type of Hdp pipes", "Guaranteed removel of pipe", "Professional workes", "Quality services"],
    image: serviceDrilling,
    price: "call for pricing 7702486592",

  },
  {
    id: 2,
    title: "Motor Stuck in Borewell Recovery", 
    description: "Expert recovery of stuck motor in borewell and equipment using specialized tools and techniques.",
    features: ["Specialized recovery tools", "All types of Hdp pipes", "We can remove upto 3000 feets", "best response from our team", "Cost-effective solutions"],
    image: serviceRecovery,
    price: "call for pricing 7702486592",

  },
  {
    id: 3,
    title: "Stuck Motor recovery guarantee",
    description: "we give 99% guarantee for stuck motor recovery in borewell with experienced professionals.",
    features: ["we can give 99% guarantee", "free of cost bore vechile for only stucked motors", "30 years of experience",  "Customer satisfaction focus"],
    image: serviceCleaning,
    price: "call for pricing 7702486592",

  },
  {
    id: 4,
    title: "Bore vehicle",
    description: "eventhough for 100 feets of stucked motor we will keep our vechicle free of cost. you just pay for the work.",
    features: ["bore vechile ", "10 feets to 3000 feets we can remove the stucked motors", "Detailed reports", "Safety recommendations", "Regular monitoring plans"],
    image: serviceTesting,
    price: "call for pricing 7702486592",
  },
  {
    id: 5,
    title: "24/7 Emergency Service",
    description: "Round-the-clock emergency support for urgent motor stucked in the bore well.",
    features: ["24/7 availability", "Rapid response time", "Emergency repair kits", "Experienced technicians", "No extra charges for nights/holidays"],
    image: serviceEmergency,
    price: "call for pricing 7702486592",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <Header />
      
      <section className="services-hero">
        <div className="services-hero-container">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-description">
            We only provide the services for the StuckUp Motors, Hdp pile fallen in bore well, we remove the StuckUp motor upto 3000 feet depth, cable or motor fallen in bore well, we give 99% guarantee for the stuck motor recovery, we provide free of cost bore vechile for only stucked motors, you just pay for the work, we have professional workes for removing fallen hdp pipe from borewell and we give 100%  guarantee.
          </p>
<a 
  href="https://wa.me/917702486592" 
  className="services-hero-cta"
  target="_blank" 
  rel="noopener noreferrer"
>
  Get a free Quote
</a>        </div>
      </section>

      <section className="services-list">
        <div className="services-container">
          <div className="services-items">
            {services.map((service, index) => (
              <div key={service.id} className={`service-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="service-image-section">
                  <img src={service.image} alt={service.title} className="service-item-image" />
                  <div className="service-image-overlay" />
                  <svg className="service-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="service-content-section">
                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-description">{service.description}</p>
                  
                  <h4 className="service-features-title">Key Features:</h4>
                  <ul className="service-features-list">
                    {service.features.map((feature, i) => (
                      <li key={i} className="service-feature-item">
                        <svg className="feature-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-bottom">
                    <div className="service-price-section">
                      <p className="price-label">Starting from</p>
                      <p className="service-price">{service.price}</p>
                    </div>
<a 
  href="https://wa.me/917702486592" 
  className="service-quote-btn"
  target="_blank" 
  rel="noopener noreferrer"
>
  Get Quote
</a>                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;