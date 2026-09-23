import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/images/pag-logoW.png";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Banner CTA */}
      <div className="footer-cta">
        <div className="cta-content">
          <div className="cta-label">
            <span className="line"></span>
            YOUR JOURNEY STARTS HERE
          </div>

          <h2>Ready to take the next step?</h2>

          <p>
            Let's turn your global ambition into a clear and practical plan.
          </p>
        </div>

        <Link to="/contact" className="cta-button">
          Start Your Journey <FaArrowRight />
        </Link>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-col brand-col">
            <Link to="/" className="brand-logo">
              <img src={logo} alt="Prevail Apex Global" />

              <div className="logo-text">
                <h3>PREVAIL APEX</h3>
                <span>GLOBAL LIMITED</span>
              </div>
            </Link>

            <p className="brand-tagline">
              Your Trusted Partner for Study, Work, Travel & Global
              Opportunities.
            </p>

            <div className="social-links">
              <a
                href="#instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#x"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#youtube"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/destinations">Destinations</Link>
              </li>

              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>

            <ul>
              <li>
                <Link to="/services">Study Abroad</Link>
              </li>

              <li>
                <Link to="/services">Work Abroad</Link>
              </li>

              <li>
                <Link to="/services">Visa Guidance</Link>
              </li>

              <li>
                <Link to="/services">Relocation Support</Link>
              </li>

              <li>
                <Link to="/services">Flight & Ticket Booking</Link>
              </li>

              <li>
                <Link to="/services">Accommodation Support</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col contact-col">
            <h4>Get In Touch</h4>

            <ul>
              <li>
                <FaPhone className="contact-icon" />

                <a href="tel:+2348100000000">
                  +234 810 000 0000
                </a>
              </li>

              <li>
                <FaEnvelope className="contact-icon" />

                <a href="mailto:info@prevailapex.com">
                  info@prevailapex.com
                </a>
              </li>

              <li>
                <FaLocationDot className="contact-icon" />

                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter-col">
            <h4>Stay Updated</h4>

            <p>
              Get the latest opportunities and updates from PAG.
            </p>

            <form
              className="newsletter-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
              />

              <button type="submit" aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2026 Prevail Apex Global Limited. All rights reserved.
          </p>

          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>

            <span className="divider">|</span>

            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;