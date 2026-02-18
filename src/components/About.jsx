import React from "react";

function About () {
    return(
        <>
        <section className="about-section">
            <div className="container">
                <div className="row">
                    {/* left-side part  */}
                    <div className="col-md-6">
                        <h2 className="text-white">About KrishNova LLP</h2>
                        <p className="text-dim-color">Founded in 2024, KrishNova LLP is a hub for technology, learning and product incubation. We design industry-aligned courses and deliver hands-on capstone projects to help learners and teams ship.</p>
                        <p className="text-dim-color semi-bold">• AI/ML & Data Science</p>
                        <p className="fs-6 text-dim-color">•  Cloud & DevOps</p>
                        <p className="fs-6 text-dim-color">• Cybersecurity & Blockchain</p>
                        <p className="fs-6 text-dim-color">•  Full-Stack & IoT</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default About;