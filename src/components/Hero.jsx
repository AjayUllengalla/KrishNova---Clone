import React from "react";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <Container>
          <div className="row ">
            {/* left-side  */}
            <div className="col-md-5">
              <div className="d-flex gap-4">
                <div className="fw-semibold">
                  <span className="brand-tag">Academy ·</span>
                  <span className="brand-tag"> Labs ·</span>
                  <span className="brand-tag"> Consulting</span>
                </div>
                <div>
                  <p className="text-dim-color">
                    Trusted by Enterprises & Universities
                  </p>
                  <div>
                    <h1>Krishnova</h1>
                    <h5>Innovate · Impact · Inspire</h5>
                  </div>
                </div>
              </div>
              {/* about  */}
              <div className="mt-4">
                <p className="text-dim-color">
                  Parent company of HTA World. We are developers as well as
                  trainers — building industry-ready training, capstone
                  projects, and production-grade solutions in AI, Cloud, IoT,
                  Blockchain and Full Stack development — led by{" "}
                  <strong>Krishna Koppula.</strong>
                </p>
              </div>
              <div className=" d-flex flex-wrap gap-4 mt-5">
                <a className="inline-flex items-center gap-3 px-5 py-3 rounded-xl cta text-white font-semibold shadow-lg btn btn-success">
                  Explore Brands
                </a>
                <a className="inline-flex items-center gap-3 px-5 py-3 rounded-xl cta text-white font-semibold shadow-lg btn btn-outline-light">
                  KrishX Labs
                </a>
              </div>

              {/* company  */}
              <div className="d-flex flex-wrap gap-4 mt-4">
                <div className="glass-card p-3 px-4 rounded-3">
                  <h6 className="text-dim mb-1">CEO</h6>
                  <h5 className="mb-0 text-white">Krishna Koppula</h5>
                </div>

                <div className="glass-card p-3 px-5 rounded-3">
                  <h6 className="text-dim mb-1">Brand</h6>
                  <h5 className="mb-0 text-white">HTA World</h5>
                </div>
              </div>
              <div className="d-flex gap-3 mt-4">
                <h6 className="semi-bold text-dim">• 20,000+ learners</h6>
                <h6 className="text-dim"> • 60+ techs </h6>
                <h6 className="text-dim">• Global reach</h6>
              </div>
            </div>
            {/* right-side  */}
            <div className="col-md-7">
              <div className="glass-card p-5 rounded-4">
                {/* Video */}
                <video
                  src="https://youtu.be/VmxMVthU8ic?si=9dHqv9Xp6Un1oLWy"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-100 rounded-4 mb-4"
                />

                {/* Title Section */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200"
                    className="rounded-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                    alt="lab"
                  />

                  <div>
                    <h5 className="text-white mb-1">KrishNova — Product Lab</h5>
                    <p className="text-dim mb-0 small">
                      Hands-on labs, course content & cloud-native projects
                    </p>
                  </div>
                </div>

                {/* Featured */}
                <div className="mb-3">
                  <p className="text-dim small mb-1">Featured</p>
                  <h6 className="text-white mb-0">AI + IoT Capstone</h6>
                </div>

                {/* Channel + Watch */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="text-dim small mb-1">Channel</p>
                    <h6 className="text-white mb-0">KrishX Labs</h6>
                  </div>

                  <button className="btn btn-outline-light">Watch</button>
                </div>

                {/* Action Buttons */}
                <div className="d-flex gap-3">
                  <button className="btn btn-light btn-primary-custom">Let’s Talk</button>

                  <button className="btn btn-outline-light">Visit HTA</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hero;
