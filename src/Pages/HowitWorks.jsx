import { Link } from "react-router-dom";
import {
  Search,
  ClipboardCheck,
  Map,
  FileText,
  Luggage,
  Plane,
  MapPin,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Start by sharing your international goals with us. Whether you want to study, work, travel or relocate, we help you understand the opportunities available to you.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "We review your goals, background, preferences and destination interests to help identify pathways that may be suitable for your plans.",
  },
  {
    number: "03",
    icon: Map,
    title: "Plan",
    description:
      "Together, we develop a clear pathway covering your preferred destination, service requirements, documentation and important next steps.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Apply",
    description:
      "We provide practical guidance through relevant application processes and help you understand the documentation and requirements involved.",
  },
  {
    number: "05",
    icon: Luggage,
    title: "Prepare",
    description:
      "Once your plans are progressing, we help you prepare for the journey with pre-departure information, travel planning and practical guidance.",
  },
  {
    number: "06",
    icon: Plane,
    title: "Travel",
    description:
      "From flight and ticket planning to important travel arrangements, we help you move from preparation to your international journey.",
  },
  {
    number: "07",
    icon: MapPin,
    title: "Arrive",
    description:
      "Our support continues beyond departure with practical arrival, accommodation and destination guidance to help you settle into your new environment.",
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Progress",
    description:
      "Your journey does not end at arrival. We encourage informed decisions and continued progress as you build your international academic, professional or personal goals.",
  },
];

const expectations = [
  "Personalised guidance based on your goals",
  "Clear information about available pathways",
  "Practical support throughout your journey",
  "Transparent communication at every stage",
  "Professional assistance with relevant processes",
  "Support before departure and after arrival",
];

function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="how-hero">
        <div className="how-hero-pattern"></div>

        <div className="container how-hero-container">
          <div className="how-hero-content">
            <span className="section-label">HOW IT WORKS</span>

            <h1>
              From ambition
              <span>to your next destination.</span>
            </h1>

            <p>
              Your international journey can feel complex. We break it down
              into clear, practical steps so you can move forward with greater
              clarity and confidence.
            </p>
          </div>

          <div className="how-hero-side">
            <span>YOUR JOURNEY</span>
            <strong>08</strong>
            <p>
              Clear guidance from your first conversation to your next chapter
              abroad.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="how-intro section">
        <div className="container how-intro-grid">
          <div>
            <span className="section-label">THE PAG APPROACH</span>

            <h2 className="section-title">
              One journey.
              <br />
              Clearer steps.
            </h2>
          </div>

          <div>
            <p className="section-description">
              At Prevail Apex Global, we believe international mobility should
              be approached with clarity, preparation and responsible guidance.
              Our process is designed to help you understand where you are,
              where you want to go and what steps may be required to move
              forward.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY STEPS */}
      <section className="journey-section section section-light">
        <div className="container">
          <div className="journey-heading">
            <span className="section-label">THE JOURNEY</span>

            <h2 className="section-title">
              Discover. Plan. Prepare. Progress.
            </h2>

            <p className="section-description">
              A structured approach designed to give you support at every
              important stage of your international journey.
            </p>
          </div>

          <div className="journey-timeline">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="journey-step" key={step.number}>
                  <div className="journey-step-number">{step.number}</div>

                  <div className="journey-step-icon">
                    <Icon size={28} strokeWidth={1.6} />
                  </div>

                  <div className="journey-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section className="expect-section section">
        <div className="container expect-grid">
          <div className="expect-content">
            <span className="section-label">WHAT YOU CAN EXPECT</span>

            <h2 className="section-title">
              Support built around your journey.
            </h2>

            <p className="section-description">
              Every client has different goals, circumstances and destination
              preferences. Our approach is designed to provide practical
              support while keeping you informed throughout the process.
            </p>

            <Link to="/contact" className="btn btn-primary">
              Start Your Journey <ArrowRight size={18} />
            </Link>
          </div>

          <div className="expect-list">
            {expectations.map((item) => (
              <div className="expect-item" key={item}>
                <CheckCircle size={21} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GUIDANCE */}
      <section className="responsible-section section section-light">
        <div className="container responsible-container">
          <div className="responsible-badge">
            <CheckCircle size={24} />
          </div>

          <div>
            <span className="section-label">RESPONSIBLE GUIDANCE</span>

            <h2 className="section-title">
              Clear information. Responsible decisions.
            </h2>

            <p className="section-description">
              International applications involve government authorities,
              educational institutions, employers and other third parties.
              We provide guidance and support, but final visa decisions remain
              with the relevant authorities and employment outcomes depend on
              employers and applicable requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="how-cta section">
        <div className="container how-cta-container">
          <div>
            <span className="section-label">READY TO BEGIN?</span>

            <h2 className="section-title">
              Your next chapter could start with one conversation.
            </h2>

            <p>
              Tell us what you are working towards and let us help you
              understand your next steps.
            </p>
          </div>

          <Link to="/contact" className="btn btn-primary">
            Talk To PAG <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;