import React from "react";
import dishImage from "./assets/dishImage.png"; // Replace with actual dish image path
import backgroundImage from "./assets/bgImage.png";
// Import icons
import preWorkoutIcon from "./assets/icon8.png";
import diabetesIcon from "./assets/icon7.png";
import pcosIcon from "./assets/icon6.png";
import kidneyIcon from "./assets/icon5.png";
import thyroidIcon from "./assets/icon4.png";
import heartIcon from "./assets/icon3.png";
import weightIcon from "./assets/icon2.png";
import detoxIcon from "./assets/icon1.png";

import rewardsImage from "./assets/partnerImage.png";
import mealPlan from "./assets/foodImage.png";
import TCDLOGO from "./assets/tcd-custom-logo.png";
import { Parallax } from "react-parallax";

import { motion } from "framer-motion";
// Health list data with icons
const healthItems = [
  { text: "Pre workout and Post workout meals", icon: preWorkoutIcon },
  { text: "Thyroid Disorders", icon: thyroidIcon },
  { text: "Diabetes", icon: diabetesIcon },
  { text: "Heart Health", icon: heartIcon },
  { text: "PCOS/PCOD", icon: pcosIcon },
  { text: "Weight Management", icon: weightIcon },
  { text: "Kidney & Liver Health", icon: kidneyIcon },
  { text: "Detoxifying and Fluid Balance", icon: detoxIcon },
];

const features = [
  "Researched meal plans tailored for health and fitness",
  "Daily freshly cooked meals without preservatives",
  "Free dietitian consultations with meal subscriptions",
  "Preventive health content for better awareness",
  "Earn rewards through interactive engagement",
];
const Expertise = () => {
  return (
    <>
      {/* <div className="expertise-section position-relative"> */}
      <motion.div
        className="expertise-section position-relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Healthy Lifestyle"
          className="background-img"
        />

        {/* Circular Dish Image */}
        <div className="dish-container">
          <img src={dishImage} alt="Dish" className="dish-img2" />
        </div>

        {/* Content */}
        <div className="content-container d-flex flex-row">
          <div className="" style={{ paddingTop: "8rem" }}>
            <h2 className="fw-bold heading">
              Expertise in <br></br>providing{" "}
              <span className="text-custom-success">diet for</span>
            </h2>
            <p className="text-light">
              TCD is focused on providing wholesome nutritious <br></br> meals for a
              healthy lifestyle.
            </p>
            <button className="btn btn-custom-success text-white rounded-pill p-3">
              Get the App
            </button>
          </div>
          {/* Health Categories */}
          {/* Health Categories with PNG Icons */}
          <div className="health-grid" style={{padding:"4rem"}}>
            {healthItems.map((item, index) => (
              <div className="health-item" key={index}>
                <div className="icon-circle">
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="health-icon fitness-img"
                  />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* </div> */}

      <motion.div
        className="partner-rewards container py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* <section className="partner-rewards container py-5"> */}
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold" style={{fontFamily:"PT Serif", fontSize:"35px"}}>
              Become a Partner &{" "}
              <span className="text-custom-success">Earn</span> Rewards
            </h2>
            <p className="fw-semibold fst-italic">Join & Earn Big!</p>
            <p>
              Get hefty cash rewards & free meals—
              <span className="text-custom-success fw-bold">
                No investment, Just referrals!
              </span>
              <br />
              <span className="text-custom-success fw-bold">
                Earn passive income
              </span>{" "}
              on every meal package referral. The more you refer, the more you
              earn!
              <br />
              Don’t miss this easy money-making opportunity!
            </p>
            <button className="btn btn-custom-success rounded-pill p-3 text-white">
              Download the app & start earning today!
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src={rewardsImage}
              alt="Rewards"
              className="img-fluid rewards-img"
            />
          </div>
        </div>
      </motion.div>
      {/* </section> */}

       <div style={{backgroundColor:"#F8F9F8"}}>
      <motion.div
        className="why-choose-tcd container py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* <section className="why-choose-tcd container py-5"> */}
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-7 d-flex flex-row">
            <div>
              <h2 className="fw-bold heading">
                Why Choose TCD as a <br></br>Lifetime 
                <span className="text-custom-success"> Fitness</span> Partner?
              </h2>
              <ul className="list-unstyled mt-4">
                {features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-center mb-3">
                    <svg
                      className="checkmark-circle me-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke=""
                        strokeWidth="3"
                        fill=""
                      />
                      <path
                        d="M7 12.5L10 16L17 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ms-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={TCDLOGO}
              alt="tcd logo"
              style={{ width: "203px", height: "204.47px" }}
            />
          </div>

          {/* Right Image */}
          <div className="col-md-5 text-center">
            <img
              src={mealPlan}
              alt="Meal Plan"
              className="img-fluid"
              style={{ width: "491px", height: "593px" }}
            />
          </div>
        </div>
      </motion.div>
      {/* </section> */}
      </div>
    </>
  );
};

export default Expertise;
