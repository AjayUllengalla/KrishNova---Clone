import React from "react";

function Cta() {
    return(
        <>
      <section className="cta-section py-5">
  <div className="container">
    <div className="cta-box d-flex flex-column flex-md-row justify-content-between align-items-center">

      {/* Left Text */}
      <div>
        <p className="cta-small mb-2">
          Ready to build something impactful?
        </p>
        <h3 className="cta-main mb-0">
          Partner with KrishNova for developments, products, and trainings.
        </h3>
      </div>

      {/* Right Button */}
      <div className="mt-4 mt-md-0">
        <a href="#contact" className="btn cta-btn">
          Let's collaborate
        </a>
      </div>

    </div>
  </div>
</section>
        </>
    )
}

export default Cta;