import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

function Contact() {
  const [state, handleSubmit] = useForm("meaoqklp");

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-pattern"></div>

        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <span className="section-label">LET’S CONNECT</span>

            <h1>
              Your next step
              <span>starts with a conversation.</span>
            </h1>

            <p>
              Tell us about your goals and let’s explore the right pathway
              for your study, work, travel or relocation plans.
            </p>
          </div>

          <div className="contact-hero-side">
            <span>START YOUR JOURNEY</span>
            <strong>01</strong>

            <p>
              Share your plans. We’ll help you understand your next steps.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section section">
        <div className="container contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="contact-information">
            <span className="section-label">GET IN TOUCH</span>

            <h2 className="section-title">
              Let’s discuss your global ambition.
            </h2>

            <p className="contact-intro">
              Whether you are planning to study abroad, explore work
              opportunities, travel or relocate, our team is ready to help
              you begin with clarity and confidence.
            </p>

            <div className="contact-details">

              {/* PHONE */}
              <a
                href="tel:+2348100000000"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Phone size={21} />
                </span>

                <span>
                  <small>CALL US</small>
                  <strong>+234 810 000 0000</strong>
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@prevailapex.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Mail size={21} />
                </span>

                <span>
                  <small>EMAIL US</small>
                  <strong>info@prevailapex.com</strong>
                </span>
              </a>

              {/* LOCATION */}
              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin size={21} />
                </span>

                <span>
                  <small>OUR LOCATION</small>
                  <strong>Lagos, Nigeria</strong>
                </span>
              </div>

              {/* WORKING HOURS */}
              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <Clock size={21} />
                </span>

                <span>
                  <small>WORKING HOURS</small>
                  <strong>Monday – Friday</strong>
                  <em>9:00 AM – 5:00 PM</em>
                </span>
              </div>

            </div>

            {/* WHATSAPP */}
            <div className="contact-whatsapp">
              <div>
                <MessageCircle size={24} />
              </div>

              <div>
                <strong>Prefer WhatsApp?</strong>

                <p>Start a quick conversation with our team.</p>

                <a
                  href="https://wa.me/2348100000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat With Us
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">

            <div className="contact-form-heading">
              <span className="section-label">
                CONSULTATION REQUEST
              </span>

              <h2>Tell us how we can help.</h2>

              <p>
                Complete the form below and our team can review your inquiry.
              </p>
            </div>

            {state.succeeded ? (
              /* SUCCESS MESSAGE */
              <div className="contact-success">
                <CheckCircle size={48} />

                <h3>Thank you for reaching out!</h3>

                <p>
                  Your inquiry has been received successfully. Our team
                  will review your message and get back to you as soon
                  as possible.
                </p>

                <Link
                  to="/"
                  className="btn btn-primary"
                >
                  Back To Home
                </Link>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME + EMAIL */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                </div>

                {/* PHONE + SERVICE */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      Service Needed
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="Study Abroad">
                        Study Abroad
                      </option>

                      <option value="Work Abroad">
                        Work Abroad
                      </option>

                      <option value="Visa Guidance">
                        Visa Guidance
                      </option>

                      <option value="Relocation Support">
                        Relocation Support
                      </option>

                      <option value="Flight & Ticket Booking">
                        Flight & Ticket Booking
                      </option>

                      <option value="Accommodation Support">
                        Accommodation Support
                      </option>

                      <option value="Pre-Departure Support">
                        Pre-Departure Support
                      </option>

                      <option value="Arrival & Travel Support">
                        Arrival & Travel Support
                      </option>
                    </select>
                  </div>

                </div>

                {/* DESTINATION */}
                <div className="form-group">
                  <label htmlFor="destination">
                    Preferred Destination
                  </label>

                  <select
                    id="destination"
                    name="destination"
                  >
                    <option value="">
                      Select a destination
                    </option>

                    <option value="United Kingdom">
                      United Kingdom
                    </option>

                    <option value="Canada">
                      Canada
                    </option>

                    <option value="Australia">
                      Australia
                    </option>

                    <option value="United States">
                      United States
                    </option>

                    <option value="Germany">
                      Germany
                    </option>

                    <option value="Ireland">
                      Ireland
                    </option>

                    <option value="Dubai, UAE">
                      Dubai, UAE
                    </option>

                    <option value="Not sure yet">
                      I am not sure yet
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label htmlFor="message">
                    Tell Us About Your Plans
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Briefly describe your goals or questions..."
                    required
                  ></textarea>
                </div>

                {/* ERROR */}
                {state.errors && (
                  <div className="form-error">
                    Something went wrong while sending your inquiry.
                    Please try again or contact us directly.
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={state.submitting}
                >
                  {state.submitting
                    ? "Sending..."
                    : "Send Inquiry"}

                  <ArrowRight size={18} />
                </button>

                <p className="form-note">
                  By submitting this form, you agree to be contacted about
                  your inquiry. Visa approvals and employment outcomes are
                  subject to the relevant authorities and employers.
                </p>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta section">
        <div className="container contact-bottom-cta-container">

          <div>
            <span className="section-label">
              YOUR AMBITION. YOUR WORLD.
            </span>

            <h2 className="section-title">
              Every global journey begins with one step.
            </h2>
          </div>

          <Link
            to="/services"
            className="btn btn-outline"
          >
            Explore Our Services
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>
    </>
  );
}

export default Contact;