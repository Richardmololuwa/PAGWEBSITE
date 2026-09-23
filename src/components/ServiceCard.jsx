import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service, detailed = false }) {
  const Icon = service.icon;

  return (
    <article className={`service-card ${detailed ? "service-card-detailed" : ""}`}>
      {detailed && service.image && (
        <div className="service-card-image">
          <img src={service.image} alt={service.title} />
        </div>
      )}

      <div className="service-card-content">
        <div className="service-card-top">
          <div className="service-icon">
            <Icon size={28} strokeWidth={1.6} />
          </div>

          <span className="service-number">
            {String(service.id).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>

        <Link to="/contact" className="service-link">
          Get Started
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;