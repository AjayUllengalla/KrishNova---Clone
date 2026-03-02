import React from "react";

function About() {
  return (
    <>
      <section className="about-section mb-4">
        <div className="container">
          <div className="row">
            {/* left-side part  */}
            <div className="col-md-6">
              <h2 className="text-white">About KrishNova LLP</h2>
              <p className="text-dim-color">
                Founded in 2024, KrishNova LLP is a hub for technology, learning
                and product incubation. We design industry-aligned courses and
                deliver hands-on capstone projects to help learners and teams
                ship.
              </p>
              <p className="text-dim-color semi-bold">• AI/ML & Data Science</p>
              <p className="fs-6 text-dim-color">• Cloud & DevOps</p>
              <p className="fs-6 text-dim-color">
                • Cybersecurity & Blockchain
              </p>
              <p className="fs-6 text-dim-color">• Full-Stack & IoT</p>
              <div className="mt-4 d-flex gap-3">
                <h6 className="btn btn-light p-2 ">Our Brands</h6>
                <h6 className="btn btn-outline-light p-2"> Get in Touch</h6>
              </div>
            </div>

            {/* rights-side  */}
            <div className="col-md-6 align-item-center">
                <div className="glass-card rounded-4 p-3 mt-5">
                    <h6 className="text-dim">Impact</h6>
                    <p className="text-white">20,000+ students trained · 60+ technologies</p>
                    <p className="text-dim">Global deployments, industry collaborations, and academic programs across APAC, Middle East, Europe and North America.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
         <div className="container py-5">
  <h2 className="text-white fw-bold mb-4">
    Our Brands & Channels
  </h2>

  <div className="row g-4">

    <div className="col-md-4">
      <div className="glass-card rounded-4 p-4 h-100">
        <h6 className="text-white fw-semibold mb-3">
          Horizon Tech Alliance (HTA)
        </h6>
        <p className="text-dim mb-0">
          Training, corporate skilling and tech community.
          Visit htaworld.com.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="glass-card rounded-4 p-4 h-100">
        <h6 className="text-white fw-semibold mb-3">
          KrishX Labs
        </h6>
        <p className="text-dim mb-0">
          YouTube channel and lab demos for practical coding,
          IoT, cloud and full-stack projects. Watch here.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="glass-card rounded-4 p-4 h-100">
        <h6 className="text-white fw-semibold mb-3">
          KrishNova
        </h6>
        <p className="text-dim mb-0">
          Parent company, brand strategy, and product incubation.
        </p>
      </div>
    </div>

  </div>
</div>
        </div>
      </section>
    </>
  );
}
export default About;
