import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { destinations } from "../data/destinations";

function Destinations() {
  return (
    <>
      <section className="destinations-hero">
        <div className="destinations-hero-pattern"></div>

        <div className="container destinations-hero-container">
          <div className="destinations-hero-content">
            <span className="section-label">EXPLORE THE WORLD</span>

            <h1>
              Your next chapter
              <span>starts here.</span>
            </h1>

            <p>
              Explore destinations where education, career growth, travel
              and new possibilities come together.
            </p>

            <Link to="/contact" className="btn destinations-hero-btn">
              Plan Your Journey
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="destinations-hero-side">
            <span>DESTINATIONS</span>
            <strong>07</strong>
            <p>
              Explore pathways to selected international destinations.
            </p>
          </div>
        </div>
      </section>

      <section className="destinations-list section">
        <div className="container">
          <div className="destinations-heading">
            <div>
              <span className="section-label">WHERE CAN WE HELP?</span>
              <h2 className="section-title">
                Opportunities across the globe.
              </h2>
            </div>

            <p>
              Whether you are planning to study, work, travel or relocate,
              PAG helps you understand your options and prepare for your
              international journey.
            </p>
          </div>

          <div className="destinations-grid">
            {destinations.map((destination) => {
              const Icon = destination.icon;

              return (
                <article
                  className="destination-card"
                  key={destination.id}
                >
                  <div className="destination-image">
                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <span className="destination-number">
                      {String(destination.id).padStart(2, "0")}
                    </span>

                    <div className="destination-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="destination-content">
                    <span className="destination-category">
                      {destination.category}
                    </span>

                    <h3>{destination.name}</h3>

                    <p>{destination.description}</p>

                    <Link
                      to="/contact"
                      className="destination-link"
                    >
                      Explore Opportunity
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="destinations-cta section">
        <div className="container destinations-cta-container">
          <div>
            <span className="section-label">NOT SURE WHERE TO START?</span>

            <h2 className="section-title">
              Let’s find the right destination for your goals.
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

export default Destinations;