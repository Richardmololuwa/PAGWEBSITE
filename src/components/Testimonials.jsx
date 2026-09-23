import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Client Testimonial",
    destination: "Study Abroad",
    text:
      "Prevail Apex Global made the process easier to understand and gave us clear guidance throughout our journey. Their support helped us approach every step with greater confidence.",
  },
  {
    id: 2,
    name: "Client Testimonial",
    destination: "Work Abroad",
    text:
      "The team provided helpful information and practical guidance from the beginning. Having someone to explain the process clearly made the entire experience easier to navigate.",
  },
  {
    id: 3,
    name: "Client Testimonial",
    destination: "Travel & Relocation",
    text:
      "From planning to preparation, the guidance we received helped us feel more prepared for our international journey. The experience was professional and straightforward.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="testimonials section">
      <div className="container">

        {/* Heading */}
        <div className="testimonials-heading">
          <span className="section-label">
            CLIENT EXPERIENCES
          </span>

          <h2 className="section-title">
            Helping people move towards their next chapter.
          </h2>
        </div>

        {/* Slider */}
        <div className="testimonial-slider">

          <div className="testimonial-card">

            <Quote
              className="testimonial-quote-icon"
              size={34}
              strokeWidth={1.4}
            />

            <p className="testimonial-text">
              "{testimonial.text}"
            </p>

            <div className="testimonial-author">

              <div className="testimonial-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.destination}</span>
              </div>

            </div>

          </div>

          {/* Controls */}
          <div className="testimonial-controls">

            <div className="testimonial-dots">

              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  className={`testimonial-dot ${
                    current === index ? "active" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}

            </div>

            <div className="testimonial-arrows">

              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight size={17} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;