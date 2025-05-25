import React from "react";
import "./home.css";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";
import service5 from "../assets/images/service5.png";
import ServiceCard from "../componends/serviceCard";
import BackgroundVideo from "../componends/special.jsx";

function Home() {
  const services = [
  {
    image: service1,
      alt:"Borewell drilling service in action",
      title: "New Borewell Drilling in Hyderabad",
    description: "We help you drill and install new borewells using advanced machines.",
    teluguDescription: "మేము ఆధునిక యంత్రాలతో కొత్త బోరు తవ్వక సేవలను అందిస్తాము."
  },
  {
    image: service2,
      alt:"Borewell drilling service in action",

      title: "Motor Fitting in Hyderabad",
    description: "We provide motor fitting and replacement services for your borewell.",
    teluguDescription: "మీ బోరుకు మోటార్ అమర్చడం మరియు మార్చడం సేవలు అందిస్తున్నాము."
  },
  {
    image: service3,
      alt:"Borewell drilling service in action",

      title: "Stuck Motor Removal in Hyderabad",
    description: "We specialize in removing motors that are stuck inside borewells.",
    teluguDescription: "బోర్‌వెల్‌లో చిక్కుకున్న మోటార్లను తీసే సేవలను అందిస్తున్నాము."
  },
  {
    image: service4,
      alt:"Borewell drilling service in action",

      title: "Borewell Maintenance in Hyderabad",
    description: "Regular cleaning and checking of your bore to ensure water flow.",
    teluguDescription: "నీటి ప్రవాహం సజావుగా ఉండేలా బోరు పరిశుభ్రత మరియు నిర్వహణ సేవలు."
  },
  {
    image: service5,
      alt:"Borewell drilling service in action",

      title: "Service Within 100 KM in Hyderabad",
    description: "Our services are available within 100 km around Hyderabad.",
    teluguDescription: "హైదరాబాద్ చుట్టూ 100 కిమీ పరిధిలో మా సేవలు అందుబాటులో ఉన్నాయి."
  }
];

  return (
    
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          {/* <img src={logo}/> */}
          <h1>Reliable Borewell Services in Hyderabad</h1>
          <p>
            We have been working in borewell services for the past 30 years. We provide many helpful services for your water needs.

We help you drill and install new borewells.

We fix and fit new motors for your borewell.

If your motor gets stuck inside the bore, we can remove it safely.

Our services are available within a 100 km area around Hyderabad. We always aim to give you the best service at the best price in all of Hyderabad.
          </p>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Bore well Services in hyderabad</h2>
        
<div className="cards-container">
  {services.map((service, index) => (
    <ServiceCard
      key={index}
      image={service.image}
      title={service.title}
      description={service.description}
      teluguDescription={service.teluguDescription}
    />
  ))}
</div>
      </section>

      <BackgroundVideo />

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
         We are a trusted name in borewell services, proudly serving customers for over 30 years. With deep knowledge and hands-on experience, we offer complete solutions for all your borewell needs – from new bore drilling to motor installation, repairs, and maintenance.

Our mission is to provide reliable, fast, and affordable services using modern equipment and skilled technicians. Whether you're a homeowner, farmer, or business owner, we are here to ensure you have access to clean and steady water.

We currently serve customers within a 100 km radius of Hyderabad, and we’re known for our honest work, quick response, and customer-first approach.

At the heart of our service is quality, safety, and long-term support. When you choose us, you choose peace of mind.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Phone: 7702486592 , 9346194416</p>
        <p>Email: kvborewells@gmail.com</p>
        <p>Location: Hyderabad, Telangana, India</p>
        <textarea placeholder="Your feedback..."></textarea>
        <button>Submit</button>
      </section>
    </div>
  );
}

export default Home;