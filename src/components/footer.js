import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import { motion } from "framer-motion";
import slice from "../assets/Slice 1.svg";
const Footer = () => {
    return (
        <footer className="footer">
            {/* Wavy SVG Border */}
            <div className="footer-wave">
                {/* <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path
      d="M0,60 C300,180 900,0 1200,60 L1200,120 L0,120 Z"
      className="shape-fill"
    ></path>
    
  </svg> */}
                <img src={slice} alt="Avatar 2" className="w-full" style={{ width: "100%" }} />
            </div>

            {/* Footer Content */}
            <motion.div
                className="footer-content text-light"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="row">
                        {/* Logo & Description */}
                        <div className="col-md-3">
                            <svg
                                width="93"
                                height="59"
                                viewBox="0 0 93 59"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4"
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
                            <p>
                                The Correct Diet (TCD) provides customized, freshly cooked
                                daily meals and ready-to-eat healthy food and drinks. We
                                deliver to nearby gyms.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="col-md-3 d-flex justify-content-center">
                            <div className="footer-menu">
                                <h6 className="text-light" style={{ fontSize: "18px", fontWeight: "600" }}>Feature</h6>
                                <ul className="list-unstyled" style={{ marginTop: "20px" }}>
                                    <li><a href="#" className="no-style-link">Home</a></li>
                                    <li style={{ paddingTop: "26px" }}><a href="#" className="no-style-link">Our Menu</a></li>
                                    <li style={{ paddingTop: "26px" }}><a href="#" className="no-style-link">About Us</a></li>
                                    <li style={{ paddingTop: "26px" }}><a href="#" className="no-style-link">Blogs</a></li>
                                    <li style={{ paddingTop: "26px" }}><a href="#" className="no-style-link">Contact Us</a></li>
                                </ul>
                            </div>

                        </div>

                        {/* Contact */}
                        <div className="col-md-3">
                            <h6 className="text-light" style={{ fontSize: "18px", fontWeight: "600" }}>Get in Touch</h6>
                            <p style={{ paddingTop: "20px" }}>
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginRight: "0.6rem" }}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4.08451 3.04533C4.14951 4.0095 4.31201 4.952 4.57201 5.85116L3.27201 7.15116C2.82785 5.85116 2.54618 4.47533 2.44868 3.04533H4.08451V3.04533ZM14.7662 16.067C15.687 16.327 16.6295 16.4895 17.5828 16.5545V18.1687C16.1528 18.0712 14.777 17.7895 13.4662 17.3562L14.7662 16.067V16.067ZM5.12451 0.878662H1.33285C0.737012 0.878662 0.249512 1.36616 0.249512 1.962C0.249512 12.1345 8.49368 20.3787 18.6662 20.3787C19.262 20.3787 19.7495 19.8912 19.7495 19.2953V15.5145C19.7495 14.9187 19.262 14.4312 18.6662 14.4312C17.3228 14.4312 16.012 14.2145 14.7987 13.8137C14.6903 13.7703 14.5712 13.7595 14.4628 13.7595C14.1812 13.7595 13.9103 13.8678 13.6937 14.0737L11.3103 16.457C8.24451 14.8862 5.73118 12.3837 4.17118 9.31783L6.55451 6.9345C6.85785 6.63116 6.94451 6.20866 6.82535 5.8295C6.42451 4.61616 6.20785 3.31616 6.20785 1.962C6.20785 1.36616 5.72035 0.878662 5.12451 0.878662Z"
                                        fill="#69CD01"
                                    />
                                </svg>
                                <a href="tel:+91704547272" className="no-style-link" >{"  +91 704547272"}</a>
                            </p>

                            <p style={{ paddingTop: "26px" }}>
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginRight: "0.6rem" }}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M23.8327 7.12858C23.8327 5.93691 22.8577 4.96191 21.666 4.96191H4.33268C3.14102 4.96191 2.16602 5.93691 2.16602 7.12858V20.1286C2.16602 21.3202 3.14102 22.2952 4.33268 22.2952H21.666C22.8577 22.2952 23.8327 21.3202 23.8327 20.1286V7.12858ZM21.666 7.12858L12.9993 12.5452L4.33268 7.12858H21.666ZM21.666 20.1286H4.33268V9.29525L12.9993 14.7119L21.666 9.29525V20.1286Z"
                                        fill="#69CD01"
                                    />
                                </svg>
                                <a href="mailto:info@thecorrectdiet.com" className="no-style-link" >{"  info@thecorrectdiet.com"}</a>
                            </p>

                            <address style={{ paddingTop: "26px", cursor: "pointer" }} className="no-style-link">
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginRight: "0.6rem", }}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.9993 2.79541C17.1918 2.79541 20.5827 6.18624 20.5827 10.3787C20.5827 16.0662 12.9993 24.4621 12.9993 24.4621C12.9993 24.4621 5.41602 16.0662 5.41602 10.3787C5.41602 6.18624 8.80685 2.79541 12.9993 2.79541ZM7.58268 10.3787C7.58268 13.4662 10.746 18.1896 12.9993 21.0821C15.296 18.1679 18.416 13.4987 18.416 10.3787C18.416 7.38874 15.9893 4.96208 12.9993 4.96208C10.0093 4.96208 7.58268 7.38874 7.58268 10.3787ZM12.9993 13.0871C11.5036 13.0871 10.291 11.8745 10.291 10.3787C10.291 8.88297 11.5036 7.67041 12.9993 7.67041C14.4951 7.67041 15.7077 8.88297 15.7077 10.3787C15.7077 11.8745 14.4951 13.0871 12.9993 13.0871Z"
                                        fill="#69CD01"
                                    />
                                </svg>
                                {" The Indian Food Company, Plot"} <br></br>{" "}
                                <span style={{ marginLeft: "2rem" }}>
                                    No. 357, Raja Park, Jaipur
                                </span>
                            </address>
                        </div>

                        {/* Social Media & Apps */}
                        <div className="col-md-3">
                            <h6 className="text-light" style={{ fontSize: "18px", fontWeight: "600" }}>Follow Us on Social Media</h6>
                            <div className="d-flex gap-3" style={{ marginTop: "20px" }}>
                                <a href="https://x.com/" className="no-style-link" >
                                    <i
                                        className="bi bi-twitter"
                                        style={{ fontSize: "30px", marginRight: "0.6rem" }}
                                    ></i>
                                </a>
                                <a href="https://linked.com/" className="no-style-link" >
                                    <i
                                        className="bi bi-linkedin"
                                        style={{ fontSize: "30px", marginRight: "0.6rem" }}
                                    ></i>
                                </a>
                                <a href="https://www.instagram.com/" className="no-style-link" >
                                    <i
                                        className="bi bi-instagram"
                                        style={{ fontSize: "30px", marginRight: "0.6rem" }}
                                    ></i>
                                </a>
                                <a href="https://www.youtube.com/" className="no-style-link" >
                                    <i className="bi bi-youtube" style={{ fontSize: "30px" }}></i>
                                </a>
                            </div>
                            <div style={{ paddingTop: "26px" }}>
                                <a href="https://play.google.com/" className="no-style-link" >
                                    <img
                                        src={googlePlay}
                                        alt="Google Play"
                                        width="203"
                                        className="me-2"
                                        style={{ display: "block", height: "59px" }}
                                    />
                                </a>
                                <a href="https://www.apple.com/in/app-store/" className="no-style-link" >
                                    <img src={appStore} alt="App Store" width="203" style={{ display: "block", height: "59px", marginTop: "23px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <hr></hr>
            {/* Copyright Section */}
            <div className="footer-bottom d-flex flex-row py-3 container">

                <p className="" style={{ color: "#9D9D9D" }}>
                    <span> <a href="/" className="no-style-link" >Privacy Policy</a> </span> |
                    <span> <a href="/" className="no-style-link" >Terms and Conditions</a></span>
                </p>
                <p className="" style={{ marginLeft: "14rem" }}>
                    © 2025{" "}
                    <span className="text-custom-success">The Correct Diet (TCD)</span>{" "}
                    | All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;