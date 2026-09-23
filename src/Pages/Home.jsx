// import { ArrowRight, Globe2 } from "lucide-react";
// import { Link } from "react-router-dom";


// function Home() {
//   return (
//     <div className="home">

//       {/* HERO */}
//       <section className="hero">
//         <div className="container hero-container">

//           <div className="hero-content">

//             <span className="hero-label">
//               Your Destination. Your Ambition. Our Expertise.
//             </span>

//             <h1>
//               Turning Global
//               <span> Ambitions </span>
//               Into Real Opportunities.
//             </h1>

//             <p>
//               Professional guidance and practical support for
//               studying, working, travelling, relocating and
//               exploring opportunities around the world.
//             </p>

//             <div className="hero-buttons">

// <Link to="/contact" className="btn btn-primary">                Start Your Journey
//                 <ArrowRight size={18} />
//               </Link>

//               <Link to="/services" className="btn btn-outline">
//                 Explore Services
//               </Link>

//             </div>

//           </div>

//           <div className="hero-visual">

//             <div className="hero-circle">
//               <Globe2 size={180} strokeWidth={1} />
//             </div>

//             <div className="hero-badge">
//               <strong>Global</strong>
//               <span>Opportunities</span>
//             </div>

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// export default Home;


import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Plane } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/Services";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-grid"></div>

        <div className="container hero-container">

          {/* HERO CONTENT */}
          <div className="hero-content">

            <div className="hero-eyebrow">
              <span></span>
              GLOBAL MOBILITY & CONSULTANCY
            </div>

            <h1>
              Your Ambition.
              <br />
              <span>Your World.</span>
            </h1>

            <h2>
              Turning global ambitions into real opportunities.
            </h2>

            <p>
              Professional guidance for studying, working, travelling,
              relocating and building your future beyond borders.
            </p>

            <div className="hero-buttons">

              <Link to="/contact" className="btn hero-primary-btn">
                Start Your Journey
                <ArrowRight size={18} />
              </Link>

              <Link to="/services" className="hero-secondary-btn">
                Explore Our Services
              </Link>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                <strong>01</strong>
                <span>Personalised<br />Guidance</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>02</strong>
                <span>End-to-End<br />Support</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>03</strong>
                <span>Global<br />Perspective</span>
              </div>

            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>

            <div className="hero-globe">
              <Globe2 size={210} strokeWidth={0.7} />
            </div>

            <div className="hero-plane">
              <Plane size={42} strokeWidth={1.5} />
            </div>

            <div className="hero-floating-card">
              <span>GLOBAL</span>
              <strong>OPPORTUNITIES</strong>
              <small>Start your journey</small>
            </div>

            <div className="hero-number">
              <span>01</span>
              <small>GLOBAL<br />JOURNEY</small>
            </div>

          </div>

        </div>

        <div className="hero-bottom">
          <span>STUDY</span>
          <span>WORK</span>
          <span>TRAVEL</span>
          <span>RELOCATE</span>
          <span>EXPLORE</span>
        </div>

      </section>

      {/* WELCOME SECTION */}
      <section className="welcome section">
        <div className="container welcome-container">

          <div className="welcome-accent">
            <span>PAG</span>
            <div className="accent-line"></div>
          </div>

          {/* <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="Prevail Apex Global" />
          </Link> */}



          <div className="welcome-content">
            <span className="section-label">
              WHO WE ARE
            </span>

            <h2 className="section-title">
              Your trusted partner for opportunities beyond borders.
            </h2>

            <p>
              Prevail Apex Global helps individuals navigate the journey to
              study, work, travel and relocate abroad with personalised
              guidance and practical support.
            </p>

            <Link to="/about" className="welcome-link">
              Discover PAG
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    {/* SERVICES SECTION */}
      <section className="services-preview section">

        <div className="container">

          <div className="services-heading">

            <div>
              <span className="section-label">
                HOW WE CAN HELP
              </span>

              <h2 className="section-title">
                Opportunities beyond borders.
              </h2>
            </div>

            <p>
              From education and employment to visas and relocation,
              we provide practical support throughout your journey.
            </p>

          </div>

          <div className="services-grid">

           {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}
      <Testimonials />

      <section className="why-pag section">
        <div className="container why-pag-container">

          <div className="why-pag-heading">
            <span className="section-label">WHY PREVAIL APEX GLOBAL</span>

            <h2 className="section-title">
              Guidance you can trust. Support you can count on.
            </h2>

            <p>
              We combine professional guidance with personalised support to
              help you make informed decisions about your international journey.
            </p>
          </div>

          <div className="why-pag-grid">

            <div className="why-item">
              <span>01</span>
              <h3>Personalised Guidance</h3>
              <p>
                Every client has different goals. We take time to understand
                your situation and recommend suitable pathways.
              </p>
            </div>

            <div className="why-item">
              <span>02</span>
              <h3>Transparent Process</h3>
              <p>
                We believe in clear communication, realistic expectations and
                responsible guidance throughout your journey.
              </p>
            </div>

            <div className="why-item">
              <span>03</span>
              <h3>End-to-End Support</h3>
              <p>
                From planning and applications to travel and arrival, we remain
                available to support you at every important stage.
              </p>
            </div>

            <div className="why-item">
              <span>04</span>
              <h3>Global Perspective</h3>
              <p>
                We help you explore international opportunities with a broader
                understanding of destinations, requirements and possibilities.
              </p>
            </div>

          </div>

        </div>
      </section>


          </div>

    
  );
}

export default Home;