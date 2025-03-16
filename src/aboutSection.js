import React from "react";
import tcdLogo from "./assets/tcdLogo.png";
import bgLeaf1 from "./assets/bgLeaf1.png";
import bgLeaf2 from "./assets/bgLeaf2.png";
import missionImage from "./assets/missionImage.png";


const AboutSection = () => {
  return (
    <>
      <section className="about-section position-relative p-5 text-white container">
        {/* Background Elements */}
        <img
          src={bgLeaf1}
          alt="Leaf Background"
          className="position-absolute bg-leaf"
        />
        <img
          src={bgLeaf2}
          alt="Leaf Background"
          className="position-absolute bg-leaf2"
        />

        {/* Content */}
        <div className="container d-flex flex-row p-4">
          <div>
            <h2 className="fw-bold">
              About <span className="text-custom-success">TCD</span>
            </h2>
            <p className="lead">
              The Correct Diet (TCD) provides customized, freshly cooked daily
              meals and ready-to-eat healthy food and drinks. We deliver to 
              nearby gyms, supporting individuals in achieving their fitness
              goals and managing various medical conditions through proper
              nutrition.
            </p>
            <button className="btn btn-custom-success text-white rounded-pill px-4 py-2">
              Read More
            </button>
          </div>
          {/* Rotating Circular Logo */}
          <div className="position-relative">
            <div className="circular-text">
              <svg viewBox="0 0 200 200">
                <path
                  id="circle"
                  d="M 100, 100
                     m -75, 0
                     a 75,75 0 1,1 150,0
                     a 75,75 0 1,1 -150,0"
                />
                <text>
                  <textPath href="#circle" style={{ color: "#2D722A" }}>
                    T H E C O R R E C T D I E T • T H E C O R R E C T D I E T
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <img
                src={tcdLogo}
                alt="TCD Logo"
                style={{ marginLeft: "3rem" }}
              />
              <p className="text-center" style={{ color: "#2D722A" }}>
                CUSTOMIZE|COOK|DELIVER
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Side Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">
              Our <span className="text-custom-success">Mission</span>
            </h2>
            <p className="text-muted">
              To promote a preventive and sustainable approach to nutrition and
              wellness, ensuring a healthier and longer life for all
              individuals.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center">
            <img
              src={missionImage}
              alt="Mission"
              className="img-fluid"
              style={{ width: "548.92px", height: "439.21px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
