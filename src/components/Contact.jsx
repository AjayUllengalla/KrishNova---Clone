import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="contact-title text-white mb-4">Contact Us</h1>
              <p className="contact-desc">
                We’d love to hear from you. Reach out for collaborations,
                enterprise training, product labs, or consulting inquiries.
              </p>
              <div className="contact-info mt-5">

  <p className="text-dim mb-3">
    For enterprise inquiries.
  </p>

  <div className="info-item mb-2">
    <span className="me-2">📧</span>
    <a href="mailto:contact@htaworld.com" className="info-link">
      contact@htaworld.com
    </a>
  </div>

  <div className="info-item mb-2">
    <span className="me-2">📞</span>
    <a href="tel:+917207776150" className="info-link">
      +91 720 777 6150
    </a>
  </div>

  <div className="info-item mb-4">
    <span className="me-2">🌐</span>
    <a
      href="https://htaworld.com"
      target="_blank"
      rel="noreferrer"
      className="info-link"
    >
      htaworld.com
    </a>
  </div>

  {/* Social Links */}
  <div className="d-flex gap-4 social-links">
    <a href="#" className="social-link">LinkedIn</a>
    <a href="#" className="social-link">X</a>
    <a href="#" className="social-link">YouTube</a>
    <a href="#" className="social-link">Instagram</a>
  </div>

</div>
            </div>

            {/* Right Side Form */}
            <div className="col-lg-6">
              <form className="contact-card p-4 rounded-4">
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    rows="4"
                    className="form-control custom-input"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
              Send Message
            </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
