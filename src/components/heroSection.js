import fitnessImage from "../assets/fitness.png";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";
import bag from "../assets/bag.svg";

const HeroSection = () => {
    return (
        <>
            <motion.div
                className="bg-white container d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-between py-5"
                style={{ marginTop: "150px" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* <section className="bg-white container d-flex flex-column flex-md-row align-items-center justify-content-between py-5" style={{width:"1518px", height:"659px", marginTop:"4rem"}}> */}
                <div className="col-lg-5 col-md-6">
                    <h1 className="display-4 fw-bold heading">
                        Customizable <br></br>{" "}
                        <span className="text-custom-success">Healthy</span> Meals <br></br>Delivered
                        to <span className="text-custom-success">You!</span>
                    </h1>
                    <p className="text-custom-muted mt-3">
                        No packed food with preservatives is better <br></br> than a daily
                        freshly cooked meal by TCD.
                    </p>
                </div>
                <div className="position-relative col-lg-5 col-md-6 text-center">
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
                            style={{ zIndex: "1", objectFit: "contain" }}
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="col-lg-2 col-12 d-flex flex-lg-column flex-row align-items-start justify-content-md-end mt-lg-0 mt-3 "
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
                                className="rounded-circle border border-white near-gym-logo"
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
            </motion.div>
        </>
    );
};
export default HeroSection;