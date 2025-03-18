import React from "react";
import "./index.css"; // Ensure this is correctly linked
import fitnessImage from "./assets/fitness.png";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import dishImage from "./assets/foodPlate.svg";
import calorieGraph from "./assets/calorieGraph.png";
import AboutSection from "./aboutSection.js";
import Expertise from "./experties.js";
import BlogSection from "./blogSection.js";
import { motion } from "framer-motion";
import arrow from "./assets/arrow.svg";
import bag from "./assets/bag.svg";
import fitnessBg from "./assets/fitnessBg.svg";

const Header = () => {
  return (
    <header className="sticky-header bg-custom-dark rounded-bottom-5" style={{padding:"20px 0"}}>
    <div className="container">
      <div className="d-flex align-items-center">
      <div
        className="h4 fw-bold d-flex align-items-center"
        
      >
        <svg
          width="91"
          height="58"
          viewBox="0 0 93 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{padding:"6px"}}
        >
          <path
            d="M54.9722 5.37769C60.1053 7.57762 61.2904 13.0759 60.9645 16.0091C55.8313 13.0759 53.4241 8.47389 52.2834 6.59988C53.0167 9.28868 56.4388 13.9996 58.6387 15.3996C61.3275 17.1107 62.3053 17.844 62.5497 18.5773C62.7453 19.1639 62.4682 19.1476 62.3053 19.0661C61.572 18.0884 61.132 17.6484 59.372 16.8662C52.0389 15.644 51.3056 10.022 50.5723 7.33319C49.9857 5.18214 50.1649 1.8741 50.3279 0.733398C50.4908 1.38523 51.8434 3.61775 54.9722 5.37769Z"
            fill="#6EC207"
          />
          <path
            d="M70.3716 5.86648C63.9939 8.5998 62.6325 16.078 63.3659 19.7445C69.2398 15.7098 70.5699 12.8073 73.7937 8.79972C72.8826 12.1404 69.0036 16.7272 66.2703 18.4666C62.9295 20.5925 61.3868 22.0659 61.083 22.977C60.8401 23.7059 61.1843 23.6857 61.3867 23.5844C62.2979 22.3696 63.2963 21.2601 65.4829 20.2882C74.594 18.7697 76.0603 11.4071 76.9714 8.06641C77.7003 5.39383 77.1739 1.41728 76.9714 0C76.7689 0.809873 74.259 3.67982 70.3716 5.86648Z"
            fill="#6EC207"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.9601 29.2726C62.4444 29.3628 61.9179 29.4548 61.816 28.8435C61.5716 27.3769 61.5716 25.4215 63.0382 23.9548C64.5048 22.4882 71.1046 19.3105 78.6821 20.0438C86.2597 20.7772 91.1281 26.6937 92.1261 34.2211C93.2491 42.6909 90.1707 56.9537 73.3045 58.4204C63.0382 59.6425 62.3049 53.2872 62.3049 53.2872L63.7715 36.6655C63.7715 36.6655 64.0159 34.4656 64.0159 29.5768C63.8988 29.1085 63.4341 29.1898 62.9601 29.2726ZM69.8702 27.6218L68.6567 39.3543L68.1713 48.6426C68.1713 50.0277 69.4819 52.6023 74.724 51.8201C81.2767 50.8424 88.8514 46.8656 87.5867 36.4212C86.3732 26.3997 73.9959 25.1775 69.8702 27.6218Z"
            fill="#6EC207"
          />
          <path
            d="M56.4385 47.4209C56.4385 47.4209 58.394 48.3986 56.9274 51.0875C55.4607 53.7764 51.2075 59.0072 41.039 58.4205C27.0783 56.8324 28.5727 40.3322 30.2838 34.9546C32.9726 24.6883 40.4193 20.8438 46.4166 20.044C48.8142 19.7243 52.446 19.7996 53.9941 20.0441C55.7867 20.2885 59.2251 21.8528 58.6384 25.1772C58.0518 28.5015 54.7274 29.3325 53.9941 28.8437C53.2608 28.3549 50.3276 26.8882 47.8832 26.8882C36.1502 27.1327 34.1948 37.1546 34.6836 41.5544C35.1725 45.9543 38.3502 51.8208 45.1944 51.5763C51.8306 51.3393 54.2386 47.9098 54.9719 47.4209C55.5585 47.0298 56.194 47.258 56.4385 47.4209Z"
            fill="#6EC207"
          />
          <path
            d="M0.951453 26.888C0.869974 27.2954 1.147 28.0124 2.90695 27.6213C5.44909 27.2302 9.83265 26.8065 11.7067 26.6435C12.1955 26.6435 12.4034 29.0831 12.44 30.3101C12.4909 32.0181 11.4622 48.1539 11.2178 50.3539C10.9734 52.5538 10.9734 53.0427 10.9734 55.9759V55.9759C10.9734 58.9092 15.6176 58.9092 17.8176 57.1981C19.5775 55.8293 19.2027 54.1834 18.7953 53.5316C18.1435 52.9612 16.8398 51.1361 16.8398 48.3984C16.8398 42.923 17.8176 27.3768 18.3064 26.6435C19.5286 26.1546 25.884 26.6435 25.884 26.6435C26.8617 26.6435 27.4973 26.2035 29.0617 23.4658C29.8439 20.9237 28.4098 20.2882 27.595 20.2882C20.2619 20.0437 9.70228 20.3859 5.59574 20.777C1.48921 21.1681 0.788493 25.0139 0.951453 26.888Z"
            fill="#6EC207"
          />
        </svg>
      </div>
      <nav className="d-none d-md-flex" style={{marginLeft:"auto", marginRight:"90px", gap:"50px"}}
        >
        <a href="/" className="active text-decoration-none" style={{fontWeight:"500", transition:"all 500ms ease 0ms"}}>
          Home
        </a>
        <a href="/" className="text-white text-decoration-none" style={{fontWeight:"500", transition:"all 500ms ease 0ms"}}>
          Our Meals{" "}
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L7.24266 6.75734C7.10864 6.89136 6.89136 6.89136 6.75734 6.75734L1 0.999999"
              stroke="#78E209"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </a>
        <a href="/" className="text-white text-decoration-none" style={{fontWeight:"500", transition:"all 500ms ease 0ms"}}>
          About Us
        </a>
        <a href="/" className="text-white text-decoration-none" style={{fontWeight:"500", transition:"all 500ms ease 0ms"}}>
          Blogs
        </a>
        <a href="/" className="text-white text-decoration-none" style={{fontWeight:"500", transition:"all 500ms ease 0ms"}}>
          Contact Us
        </a>        
      </nav>
      <button
        className="btn btn-light rounded-pill border-0 " style={{fontWeight:"600", padding:"18px 32px", transition:"all 500ms ease 0ms"}}       
      >
        Get the App
      </button>
      </div>      
    </div>      
    </header>
  );
};

const HeroSection = () => {
  return (
    <>
      <motion.div
        className="bg-white container d-flex flex-column flex-md-row align-items-center justify-content-between py-5"
        style={{ marginTop: "150px" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* <section className="bg-white container d-flex flex-column flex-md-row align-items-center justify-content-between py-5" style={{width:"1518px", height:"659px", marginTop:"4rem"}}> */}
        <div className="col-md-5">
          <h1 className="display-4 fw-bold heading">
            Customizable <br></br>{" "}
            <span className="text-custom-success">Healthy</span> Meals Delivered
            to <span className="text-custom-success">You!</span>
          </h1>
          <p className="text-custom-muted mt-3">
            No packed food with preservatives is better <br></br> than a daily
            freshly cooked meal by TCD.
          </p>
        </div>
        <div className="position-relative col-md-5 text-center">
          {/* Background Image */}
          {/* <svg
            width="510"
            height="564"
            viewBox="0 0 510 564"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="img-fluid position-absolute top-50 start-50 translate-middle"
          >
            <circle cx="255" cy="255.513" r="255" fill="#EEFAE1" />
            <circle
              cx="255"
              cy="255.513"
              r="222.5"
              stroke="#D4E9BE"
              strokeWidth="5"
              strokeMiterlimit="1.80775"
              strokeDasharray="32 32"
            />
          </svg> */}
          {/* <img
            src={fitnessBg}
            alt="Fitness models"
            className="position-absolute top-50 translate-middle"
            style={{ left: "147px", width: "774px", height: "458px" }}
          /> */}
          {/* Fitness Models Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
          <img
            src={fitnessImage}
            alt="Fitness models"
            className="img-fluid position-relative fitness-img"
            style={{ height: "600px", zIndex: "1", objectFit:"cover" }}
          />
          </motion.div>
          

          {/* Calorie Information Box */}
          <div
            className="position-absolute p-3"
            style={{ zIndex: "3", right:"48px", bottom:"-16px", borderRadius:"28px",  background:"rgba(255, 255, 255, 0.97)" }}
          >
            <p className="text-muted mb-0">Daily Calories</p>
            <p className="fw-bold mb-0">1400-3500 Cal</p>
            <img
              src={calorieGraph}
              alt="Calorie Graph"
              className="img-fluid mt-2"
              style={{ width: "80px" }}
            />
          </div>
        </div>

        <NearbyDelivery></NearbyDelivery>
      </motion.div>
      {/* </section> */}

      <AboutSection></AboutSection>
      <Expertise></Expertise>
      <BlogSection></BlogSection>
    </>
  );
};

const NearbyDelivery = () => {
  return (
    <motion.div
      className="col-md-2 d-flex flex-column align-items-start "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* <div className="col-md-2 d-flex flex-column align-items-start bg-white p-3 rounded shadow-sm"> */}
      <div className="d-flex">
        <img src={bag} alt="bag" style={{ width: "70px", height: "70px" }} />

        <div>
          <h6 className="fw-bold mb-0">Near by Delivery</h6>
          <p className="text-muted small mb-0">
            Get your Meals from nearest GYM
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={logo1}
            alt="Gym 1"
            className="rounded-circle border border-white"
            style={{ width: "62px", height: "62px", marginLeft: "64px" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={logo2}
            alt="Gym 2"
            className="rounded-circle border border-white"
            style={{ width: "62px", height: "62px", marginLeft: "-26px" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={logo3}
            alt="Gym 3"
            className="rounded-circle border border-white"
            style={{ width: "62px", height: "62px", marginLeft: "-26px" }}
          />
        </motion.div>
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: "-26px" }}
        >
          <circle
            cx="36"
            cy="36"
            r="34"
            fill="white"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         <a href="#"><img src={arrow} alt="Gym 3" style={{ marginLeft: "-46px" }} /></a> 
        </motion.div>
      </div>
    </motion.div>
    // {/* </div> */}
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;
