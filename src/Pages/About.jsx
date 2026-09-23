import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutpic from "../assets/images/about-travel.jpg";


function About() {
  return (
    <>
      {/* ABOUT HERO */}
<section className="about-hero">
  <div className="about-hero-pattern"></div>

  <div className="container about-hero-container">

    <div className="about-hero-content">
      <span className="section-label">ABOUT PREVAIL APEX GLOBAL</span>

      <h1>
        Helping you move
        <span>beyond borders.</span>
      </h1>

      <p>
        We provide professional guidance and practical support for
        studying, working, travelling and building your future
        beyond borders.
      </p>

      <div className="about-hero-line">
        <span></span>
        <small>YOUR AMBITION. YOUR WORLD.</small>
      </div>
    </div>

    <div className="about-hero-visual">

      <div className="about-image-frame">
        <img
          src={aboutpic}
          alt="International travel and global opportunities"
        />
      </div>

      <div className="about-image-accent accent-gold"></div>
      <div className="about-image-accent accent-purple"></div>

      <div className="about-floating-card">
        <strong>GLOBAL</strong>
        <span>OPPORTUNITIES</span>
      </div>

      <div className="about-hero-number">
        <strong>01</strong>
        <span>WHO<br />WE ARE</span>
      </div>

    </div>

  </div>
</section>

      {/* WHO WE ARE */}
      <section className="about-intro section">
        <div className="container about-intro-container">

          <div className="about-intro-label">
            <span>01</span>
            <span>WHO WE ARE</span>
          </div>

          <div className="about-intro-content">
            <h2 className="section-title">
              Your trusted partner for study, work, travel and global
              opportunities.
            </h2>

            <p>
              Prevail Apex Global Ltd (PAG) is an international education,
              migration-support and travel consultancy focused on helping
              individuals pursue opportunities beyond borders.
            </p>

            <p>
              We provide personalised guidance and practical support across
              the international journey — from exploring opportunities and
              planning your pathway to applications, travel preparation and
              arrival support.
            </p>

            <p>
              Our approach is built around professionalism, transparency
              and client-centred service. We aim to give our clients the
              clarity they need to make informed decisions about their
              international goals.
            </p>

            <Link to="/services" className="about-link">
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision section">
        <div className="container">

          <div className="mission-vision-grid">

            <div className="mission-card">
              <span className="mv-number">02</span>
              <span className="section-label">OUR MISSION</span>

              <h2>
                Making international mobility clearer and more achievable.
              </h2>

              <p>
                Our mission is to provide professional, transparent and
                personalised international mobility services that help
                individuals make informed decisions and confidently pursue
                opportunities beyond borders.
              </p>
            </div>

            <div className="vision-card">
              <span className="mv-number">03</span>
              <span className="section-label">OUR VISION</span>

              <h2>
                A trusted African brand for global opportunities.
              </h2>

              <p>
                We envision becoming a trusted and recognised African brand
                for international education, global mobility, work
                opportunities, travel solutions and destination support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="values-section section section-light">
        <div className="container">

          <div className="values-heading">
            <span className="section-label">WHAT WE STAND FOR</span>

            <h2 className="section-title">
              Built on values that put you first.
            </h2>

            <p>
              Our approach is guided by principles that shape how we
              communicate, advise and support every client.
            </p>
          </div>

          <div className="values-grid">

            <div className="value-item">
              <span>01</span>
              <h3>Integrity</h3>
              <p>
                We act honestly and responsibly in every interaction.
              </p>
            </div>

            <div className="value-item">
              <span>02</span>
              <h3>Professionalism</h3>
              <p>
                We maintain a high standard of service and communication.
              </p>
            </div>

            <div className="value-item">
              <span>03</span>
              <h3>Personalisation</h3>
              <p>
                We recognise that every client has unique goals and needs.
              </p>
            </div>

            <div className="value-item">
              <span>04</span>
              <h3>Transparency</h3>
              <p>
                We provide clear information and realistic expectations.
              </p>
            </div>

            <div className="value-item">
              <span>05</span>
              <h3>Excellence</h3>
              <p>
                We continuously strive to improve the quality of our service.
              </p>
            </div>

            <div className="value-item">
              <span>06</span>
              <h3>Client-Centred Service</h3>
              <p>
                Your goals remain at the centre of the support we provide.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="about-promise section">
        <div className="container about-promise-container">

          <div>
            <span className="section-label">OUR PROMISE</span>

            <h2 className="section-title">
              Clarity. Integrity. Support.
            </h2>
          </div>

          <div className="promise-content">
            <p>
              At Prevail Apex Global, we believe international opportunities
              should be approached with clarity, preparation and responsibility.
            </p>

            <p>
              We do not promise guaranteed jobs or guaranteed visa approvals.
              Instead, we provide responsible guidance and practical support
              while helping our clients understand their options and
              responsibilities.
            </p>

            <p>
              Final visa decisions remain with the relevant government and
              immigration authorities.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;