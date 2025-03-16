import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import heart from "./assets/heart.png";
import weight from "./assets/weight.png";
import kidney from "./assets/kidney.png";
import diabeties from "./assets/diabeties.png";

import mobileMockup from "./assets/mobile.png"; 
import googlePlay from "./assets/googlePlay.png"; 
import appStore from "./assets/appStore.png";
import { Button } from "react-bootstrap";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";

const blogs = [
  {
    title: "Heart Health",
    image: heart,
    description:
      "Getting regular physical activity can help prevent heart disease. Adults need at least 10...",
    doctor: "Dr. Bina Dutta",
  },
  {
    title: "Weight Management",
    image: weight,
    description:
      "Managing weight successfully involves a holistic approach combining healthy eating, regular...",
    doctor: "Dr. Vijay Bindra",
  },
  {
    title: "Kidney & Liver Health",
    image: kidney,
    description:
      "The liver and kidneys are vital organs responsible for filtering the blood, maintaining...",
    doctor: "Dr. Sanjay Kapoor",
  },
  {
    title: "Diabetes",
    image: diabeties,
    description:
      "Chronic metabolic disorder characterized by persistently high blood glucose (or blood sugar)...",
    doctor: "Dr. Kunal Sharma",
  },
];

const BlogSection = () => {
  return (<>
    <Container className="my-5">
      <div className="text-center mb-4">
        <h2>
          <strong>Our</strong> <span className="text-success">Blogs</span>
        </h2>
        <p>
          Health blogs that keep you informed about good <br></br>health practices and achieve your goals.
        </p>
      </div>
      <Row>
        {blogs.map((blog, index) => (
          <Col key={index} md={3}>
            <Card className="blog-card">
              <Card.Img variant="top" src={blog.image} className="blog-image" />
              <Card.Body>
                <span className="badge blog-badge">{blog.title}</span>
                <Card.Text className="blog-description">{blog.description}</Card.Text>
                <p className="blog-doctor">{blog.doctor}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <section className="app-download-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col lg={6} className="position-absolute">
            <h2 className="text-white fw-bold">
              Download Our Mobile App <br /> Now! and Get <span className="text-warning">25% OFF</span>
            </h2>
            <p className="text-warning">
              Prime Membership Exclusive access to premium health awareness videos and expert guidance and free consultations.
            </p>
            <div className="d-flex gap-3">
              <img src={googlePlay} alt="Google Play" className="store-badge" />
              <img src={appStore} alt="App Store" className="store-badge" />
            </div>
          </Col>

          {/* Right Side - Mobile Mockup */}
          <Col lg={6} className="text-center position-relative">
            <img src={mobileMockup} alt="Mobile App" className="mobile-mockup img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="text-center py-5 mb-6">
      <h2 className="fw-bold">
        Need <span className="text-custom-success">Help?</span>
      </h2>
      <p className="fw-semibold text-dark">Talk to our Dietitian!</p>
      <p className="text-muted mx-auto w-50">
        Don’t know where to start or have any specific health conditions? 
        Consult our experienced Dietitian and get your meals customised accordingly!
      </p>

      {/* Profile Avatars */}
      <div className="d-flex justify-content-center mt-3">
        <img src={avatar1} alt="Avatar 1" className="rounded-circle mx-2 border border-white shadow-sm" width="50" height="50" />
        <img src={avatar2} alt="Avatar 2" className="rounded-circle mx-2 border border-white shadow-sm" width="50" height="50" />
        <img src={avatar3} alt="Avatar 3" className="rounded-circle mx-2 border border-white shadow-sm" width="50" height="50" />
      </div>

      {/* Contact Button */}
      <Button  className="mt-4  rounded-pill shadow-sm btn-custom-success border p-3">
        Contact Now
      </Button>
    </section>

    <footer className="footer">
      {/* Wavy SVG Border */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,180 900,0 1200,60 L1200,120 L0,120 Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/* <div className="ocean">
  {/* <div className="wave"></div> */}
  {/* <div className="wave"></div>
</div> */} 

      {/* Footer Content */}
      <div className="footer-content py-5 px-3 text-light">
        <div className="container">
          <div className="row">
            {/* Logo & Description */}
            <div className="col-md-4">
              <h4 className="text-success">TCD</h4>
              <p>
                The Correct Diet (TCD) provides customized, freshly cooked daily meals and ready-to-eat healthy food and drinks. We deliver to nearby gyms.
              </p>
            </div>

            {/* Features */}
            <div className="col-md-2">
              <h6 className="text-light">Feature</h6>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Our Menu</li>
                <li>About Us</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3">
              <h6 className="text-light">Get in Touch</h6>
              <p>📞 +91 704547272</p>
              <p>📧 info@thecorrectdiet.com</p>
              <p>📍 The Indian Food Company, Plot No. 357, Raja Park, Jaipur</p>
            </div>

            {/* Social Media & Apps */}
            <div className="col-md-3">
              <h6 className="text-light">Follow Us</h6>
              <div className="d-flex gap-3">
                <i className="bi bi-twitter"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
              </div>
              <div className="mt-3">
                <img src={googlePlay} alt="Google Play" width="120" className="me-2" />
                <img src={appStore} alt="App Store" width="120" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom text-center py-3">
        <p className="m-0">Privacy Policy | Terms and Conditions</p>
        <p className="m-0">
          © 2025 <span className="text-success">The Correct Diet (TCD)</span> | All Rights Reserved
        </p>
      </div>
    </footer>
 </> );
};

export default BlogSection;
