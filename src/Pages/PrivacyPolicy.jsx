import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <main className="privacy-page">

      {/* HERO */}
      <section className="privacy-hero">
        <div className="container">
          <span className="section-label">YOUR PRIVACY MATTERS</span>

          <h1>Privacy Policy</h1>

          <p>
            We respect your privacy and are committed to protecting the
            personal information you share with Prevail Apex Global Limited.
          </p>

          <span className="privacy-updated">
            Last Updated: September 2026
          </span>
        </div>
      </section>

      {/* CONTENT */}
      <section className="privacy-content section">
        <div className="container privacy-layout">

          {/* SIDEBAR */}
          <aside className="privacy-sidebar">
            <div className="privacy-sidebar-card">
              <ShieldCheck size={28} />

              <h3>Your Privacy</h3>

              <p>
                We collect only information that is reasonably necessary
                to respond to your enquiries and provide our services.
              </p>
            </div>
          </aside>

          {/* POLICY */}
          <article className="privacy-document">

            <section>
              <h2>1. Introduction</h2>

              <p>
                Prevail Apex Global Limited ("PAG", "we", "our", or "us")
                respects your privacy and is committed to protecting your
                personal information.
              </p>

              <p>
                This Privacy Policy explains how we collect, use, store
                and protect personal information when you visit our website,
                submit an enquiry, or communicate with us about our services.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>

              <p>
                Depending on how you interact with our website, we may
                collect information such as:
              </p>

              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Telephone or WhatsApp number</li>
                <li>Service you are interested in</li>
                <li>Preferred destination</li>
                <li>Information contained in your enquiry or message</li>
                <li>Technical information required for website operation</li>
              </ul>

              <p>
                We ask that you do not submit sensitive personal information
                through the general contact form unless it is specifically
                requested and appropriate for the service you are seeking.
              </p>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>

              <p>
                We may use the information you provide to:
              </p>

              <ul>
                <li>Respond to your enquiries and requests.</li>
                <li>Understand the services and destinations you are interested in.</li>
                <li>Provide information about our services.</li>
                <li>Communicate with you regarding an enquiry or consultation.</li>
                <li>Improve our website and customer experience.</li>
                <li>Meet applicable legal or regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2>4. Lawful Basis for Processing</h2>

              <p>
                Where applicable, we process personal information on a lawful
                basis permitted by applicable data-protection law. Depending
                on the circumstances, this may include your consent, taking
                steps at your request, performing a contract, complying with
                a legal obligation, or another lawful basis recognised by
                applicable law.
              </p>
            </section>

            <section>
              <h2>5. Contact Forms and Third-Party Services</h2>

              <p>
                Our website uses Formspree to process submissions made
                through our online contact form. Information submitted
                through the form may therefore be transmitted to and
                processed by Formspree in accordance with its own privacy
                practices.
              </p>

              <p>
                We may also use other service providers where necessary for
                website hosting, communication, analytics, security or
                business operations. Where third parties process personal
                information on our behalf, we expect appropriate safeguards
                to be applied.
              </p>
            </section>

            <section>
              <h2>6. Data Sharing</h2>

              <p>
                We do not sell your personal information.
              </p>

              <p>
                We may disclose information where reasonably necessary to
                provide a requested service, operate our business, comply
                with applicable law, protect our rights, or work with
                relevant service providers and professional advisers.
              </p>
            </section>

            <section>
              <h2>7. International Transfers</h2>

              <p>
                Some of the service providers we use may process information
                outside Nigeria. Where personal information is transferred
                across borders, we will take reasonable steps to ensure that
                applicable data-protection requirements and appropriate
                safeguards are considered.
              </p>
            </section>

            <section>
              <h2>8. Data Security</h2>

              <p>
                We take reasonable technical and organisational measures to
                protect personal information against unauthorised access,
                alteration, disclosure, loss or destruction.
              </p>

              <p>
                However, no internet transmission or electronic storage
                system can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2>9. Data Retention</h2>

              <p>
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected, to
                provide requested services, resolve enquiries, maintain
                appropriate business records, or comply with legal and
                regulatory obligations.
              </p>
            </section>

            <section>
              <h2>10. Your Privacy Rights</h2>

              <p>
                Subject to applicable law and any relevant limitations, you
                may have rights concerning your personal information,
                including rights to:
              </p>

              <ul>
                <li>Be informed about how your information is processed.</li>
                <li>Request access to personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Object to certain processing.</li>
                <li>Request erasure where applicable.</li>
                <li>Request restriction of certain processing.</li>
                <li>Request portability of your information where applicable.</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>Lodge a complaint with the relevant data-protection authority.</li>
              </ul>

              <p>
                These rights are subject to applicable legal conditions and
                exemptions.
              </p>
            </section>

            <section>
              <h2>11. Cookies and Technical Information</h2>

              <p>
                Our website may use cookies or similar technologies where
                necessary for website functionality, security, analytics or
                other legitimate purposes.
              </p>

              <p>
                Where consent is required for non-essential cookies, we will
                provide an appropriate mechanism for managing that consent.
              </p>
            </section>

            <section>
              <h2>12. Children's Privacy</h2>

              <p>
                Our website is not intended to knowingly collect personal
                information from children without appropriate involvement,
                consent or authorisation where required by applicable law.
              </p>
            </section>

            <section>
              <h2>13. Changes to This Policy</h2>

              <p>
                We may update this Privacy Policy from time to time to
                reflect changes to our services, technology, legal
                requirements or privacy practices.
              </p>

              <p>
                The updated version will be published on this page with a
                revised "Last Updated" date.
              </p>
            </section>

            <section>
              <h2>14. Contact Us</h2>

              <p>
                If you have questions about this Privacy Policy or would
                like to make a privacy-related request, please contact us:
              </p>

              <div className="privacy-contact">
                <strong>Prevail Apex Global Limited</strong>

                <span>Lagos, Nigeria</span>

                <a href="mailto:info@prevailapex.com">
                  info@prevailapex.com
                </a>

                <a href="tel:+2348100000000">
                  +234 810 000 0000
                </a>
              </div>

              <p className="privacy-note">
                If PAG designates a Data Protection Officer or privacy
                contact, the company's official details should be added
                here before publication.
              </p>
            </section>

            <div className="privacy-back">
              <Link to="/">
                <ArrowLeft size={17} />
                Back to Home
              </Link>
            </div>

          </article>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;