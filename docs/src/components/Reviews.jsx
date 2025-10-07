import "../styles/Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Raju",
    location: "hyderabad",
    rating: 5,
    review: "sucessfully they took the stuckup motor 😊 from the borewell",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "ravi kumar",
    location: "Lb nagar, hyderabad",
    rating: 5,
    review: "Had a stuck pipe issue and they resolved it quickly. Available 24/7 and very responsive. Great customer service!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Suresh Babu",
    location: "gachibowli,hyderabad",
    rating: 5,
    review: "they removed the fallen pipes in the borewells and fixed it. thank you so much",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Anitha Reddy",
    location: "BN reddy, hyderabad",
    rating: 5,
    review: "this kv borewells team is very professional and they did a great job ",
    date: "1 week ago",
  },
];

export const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <h2 className="reviews-title">
            What Our Customers Say
          </h2>
          <p className="reviews-description">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <svg className="quote-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <div>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="review-text">
                    "{review.review}"
                  </p>
                </div>
              </div>
              
              <div className="review-footer">
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <p>{review.location}</p>
                </div>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">
              Ready to Get Started?
            </h3>
            <p className="cta-description">
              Join hundreds of satisfied customers. Get your free quote today!
            </p>
           <div className="cta-buttons">
  <a 
    href="tel:+917702486592"
    className="cta-phone"
    rel="noopener noreferrer"
  >
    Call Now: +91 7702486592
  </a>
  <a 
    href="/contact"
    className="cta-quote"
  >
    Get Free Quote
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};