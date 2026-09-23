import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/Services";

function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero-pattern"></div>

        <div className="container services-hero-container">
          <div className="services-hero-content">
            <span className="section-label">WHAT WE DO</span>

            <h1>
              Solutions for your
              <span>global journey.</span>
            </h1>

            <p>
              From education and employment to visas, travel and relocation,
              Prevail Apex Global provides practical support at every stage
              of your international journey.
            </p>

            <Link to="/contact" className="btn services-hero-btn">
              Start Your Journey
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="services-hero-side">
            <span>OUR SERVICES</span>
            <strong>08</strong>
            <p>Ways we help you move beyond borders.</p>
          </div>
        </div>
      </section>

      <section className="services-list-section section">
        <div className="container">
          <div className="services-page-heading">
            <div>
              <span className="section-label">OUR EXPERTISE</span>
              <h2 className="section-title">
                Support designed around your goals.
              </h2>
            </div>

            <p>
              Every journey is different. Our services are designed to help
              you understand your options, prepare responsibly and take
              confident steps toward your next opportunity.
            </p>
          </div>

          <div className="services-page-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                detailed
              />
            ))}
          </div>
        </div>
      </section>

      <section className="services-bottom-cta section">
        <div className="container services-bottom-cta-container">
          <div>
            <span className="section-label">READY TO BEGIN?</span>
            <h2 className="section-title">
              Let’s plan your next step together.
            </h2>
          </div>

          <Link to="/contact" className="btn btn-primary">
            Speak With PAG
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;