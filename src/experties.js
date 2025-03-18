import React from "react";
import dishImage from "./assets/foodPlate.svg"; // Replace with actual dish image path
// import backgroundImage from "./assets/bgImage.png";
// Import icons
import preWorkoutIcon from "./assets/icon1.svg";
import diabetesIcon from "./assets/icon2.svg";
import pcosIcon from "./assets/icon5.svg";
import kidneyIcon from "./assets/icon7.svg";
import thyroidIcon from "./assets/icon2.svg";
import heartIcon from "./assets/icon4.svg";
import weightIcon from "./assets/icon6.svg";
import detoxIcon from "./assets/icon8.svg";

import rewardsImage from "./assets/partnerImage.svg";
import mealPlan from "./assets/foodImage.png";
import TCDLOGO from "./assets/tcd-custom-logo.png";

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
        className="expertise-section "
        style={{ background: "url(http://localhost:3000/bgImage.png) no-repeat", backgroundSize:"cover" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        {/* <img
          src={backgroundImage}
          alt="Healthy Lifestyle"
          className="background-img"
        /> */}

        
        <div className="container position-relative">
          {/* Circular Dish Image */}
          <div className="dish-container">
            <img src={dishImage} alt="Dish" style={{ width: "160px" }} />
          </div>
          {/* Content */}
        <div className="content-container d-flex align-items-center">
          <div className="col-5">
            <h2 className="fw-bold heading">
              Expertise in <br></br>providing{" "}
              <span className="text-custom-success">diet for</span>
            </h2>
            <p className="text-light">
              TCD is focused on providing wholesome nutritious <br></br> meals
              for a healthy lifestyle.
            </p>
            <button className="btn btn-custom-success text-white rounded-pill border-0" style={{fontWeight:"600", padding:"18px 32px", transition:"all 500ms ease 0ms", marginTop:"14px"}}>
              Get the App
            </button>
          </div>
          {/* Health Categories */}
          {/* Health Categories with PNG Icons */}
          <div  className=" col-7 d-flex justify-content-end" >
          <motion.div
            className="health-grid"           
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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
          </motion.div>
          </div>
        </div>
        </div>      

        
      </motion.div>
      {/* </div> */}

      <motion.div
        className="partner-rewards container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* <section className="partner-rewards container py-5"> */}
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-7 para1">
            <h2 className="heading">
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
            <button className="btn partner-rewards-btn btn-custom-success rounded-pill text-white" style={{fontWeight:"600", padding:"18px 32px", transition:"all 500ms ease 0ms"}}>
              Download the app & start earning today!
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-5 text-center">
            <img
              src={rewardsImage}
              alt="Rewards"
              className="img-fluid rewards-img"
            />
          </div>
        </div>
      </motion.div>
      {/* </section> */}

      <div style={{ backgroundColor: "#F8F9F8" }}>
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
            <div className="col-md-8 d-flex align-items-center" style={{gap: "56px"}}>    
              <div>
                <h2 className="heading" style={{ fontSize: "50px", fontWeight:"700" }}>
                  Why Choose TCD as a <br></br> Lifetime
                  <span className="text-custom-success"> Fitness</span> Partner?
                </h2>
                <ul className="list-unstyled para1" style={{ marginTop: "35px" }}>
                  {features.map((feature, index) => (
                    <li key={index} className="d-flex align-items-center">
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
                style={{
                  width: "203px",
                  height: "204.47px",                  
                }}
              />
            </div>

            {/* Right Image */}
            <div className="col-md-4 text-center">
              <img
                src={mealPlan}
                alt="Meal Plan"
                className="img-fluid"
                style={{ width: "100%", height: "574px", objectFit:"cover" }}
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
