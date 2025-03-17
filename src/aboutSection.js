import React from "react";
import bgLeaf1 from "./assets/bgLeaf1.png";
import bgLeaf2 from "./assets/bgLeaf2.png";
import missionImage from "./assets/missionImage.png";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <>
      <motion.div
        className="about-section position-relative p-5 text-white container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* <section className="about-section position-relative p-5 text-white container"> */}
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={bgLeaf1}
            alt="Leaf Background"
            className="position-absolute bg-leaf"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={bgLeaf2}
            alt="Leaf Background"
            className="position-absolute bg-leaf2"
          />
        </motion.div>
        {/* Content */}
        <div className="container d-flex flex-row p-4">
          <div>
            <h2 className="fw-bold heading">
              About <span className="text-custom-success">TCD</span>
            </h2>
            <p className="lead">
              The Correct Diet (TCD) provides customized, freshly cooked daily
              meals and <br></br> ready-to-eat healthy food and drinks. We
              deliver to nearby gyms, supporting<br></br> individuals in
              achieving their fitness goals and managing various medical{" "}
              <br></br> conditions through proper nutrition.
            </p>
            <button className="btn btn-custom-success text-white rounded-pill px-4">
              Read More
            </button>
          </div>
          {/* Rotating Circular Logo */}
          <div className="position-relative" style={{ marginLeft: "13rem" }}>
            <div className="circular-text">
              <svg viewBox="0 0 200 200">
                <path
                  id="circle"
                  d="M 100, 100
                     m -75, 0
                     a 75,75 0 1,1 150,0
                     a 75,75 0 1,1 -150,0"
                  fill="none"
                />
                <text>
                  <textPath href="#circle" fill="#2D722A">
                    T H E C O R R E C T D I E T • T H E C O R R E C T D I E T
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <svg
                width="176"
                height="142"
                viewBox="0 0 176 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M104.271 10.0774C113.89 14.1999 116.111 24.5033 115.5 30C105.881 24.5033 101.37 15.8794 99.2323 12.3677C100.606 17.4063 107.019 26.2343 111.142 28.8578C116.18 32.0642 118.013 33.4384 118.471 34.8125C118.837 35.9119 118.318 35.8813 118.013 35.7286C116.638 33.8964 115.814 33.0719 112.516 31.6061C98.7742 29.3158 97.4 18.7805 96.0259 13.7418C94.9265 9.71093 95.2624 3.51187 95.5678 1.37427C95.8732 2.59576 98.4078 6.77936 104.271 10.0774Z"
                  fill="#2D722A"
                />
                <path
                  d="M133.129 10.9934C121.177 16.1155 118.626 30.1291 120 37C131.008 29.4392 133.5 24 139.542 16.4901C137.834 22.7504 130.565 31.3457 125.443 34.6052C119.183 38.589 116.292 41.3501 115.723 43.0575C115.267 44.4234 115.912 44.3854 116.292 44.1957C117.999 41.9192 119.87 39.84 123.968 38.0188C141.041 35.1732 143.789 21.3762 145.496 15.1159C146.862 10.1077 145.876 2.65589 145.496 0C145.117 1.51765 140.413 6.89575 133.129 10.9934Z"
                  fill="#2D722A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M120.24 54.855C119.274 55.0239 118.287 55.1964 118.096 54.0509C117.638 51.3025 117.638 47.6381 120.387 44.8898C123.135 42.1414 135.502 36.1867 149.702 37.5609C163.902 38.935 173.025 50.0223 174.895 64.1282C177 80 171.231 106.728 139.625 109.476C120.387 111.766 119.012 99.8567 119.012 99.8567L119 98.5L119.441 95L121.761 68.7087C121.761 68.7087 122.219 64.5862 122.219 55.425C121.999 54.5474 121.128 54.6997 120.24 54.855ZM133.189 51.7615L130.915 73.7474L130.006 91.153C130.006 93.7486 132.462 98.5733 142.285 97.1075C154.564 95.2754 168.759 87.823 166.389 68.2509C164.115 49.4713 140.921 47.1811 133.189 51.7615Z"
                  fill="#2D722A"
                />
                <path
                  d="M103.019 88.8636C103.019 88.8636 106.684 90.6957 103.935 95.7345C101.187 100.773 93.2168 110.575 74.1616 109.476C48.0001 106.5 50.8006 75.5798 54.007 65.5025C59.0457 46.2641 73.0002 39.0598 84.2388 37.561C88.7317 36.9618 95.5376 37.1031 98.4387 37.5611C101.798 38.0192 108.241 40.9506 107.142 47.1802C106.042 53.4098 99.8129 54.967 98.4387 54.0511C97.0645 53.1351 91.5678 50.3866 86.9872 50.3866C65.0004 50.8447 61.3359 69.6251 62.252 77.8701C63.1682 86.1152 69.1229 97.1085 81.9485 96.6505C94.3843 96.2064 98.8967 89.7797 100.271 88.8636C101.37 88.1307 102.561 88.5582 103.019 88.8636Z"
                  fill="#2D722A"
                />
                <path
                  d="M0.0398714 50.5215C-0.112815 51.2849 0.406318 52.6285 3.70434 51.8956C8.46814 51.1627 16.6827 50.3688 20.1944 50.0634C21.1105 50.0634 21.5 54.635 21.5686 56.9343C21.6641 60.135 19.7364 90.3725 19.2783 94.4951C18.8203 98.6176 18.8203 99.5337 18.8203 105.03C18.8203 110.527 27.5234 110.527 31.6459 107.321C34.9439 104.756 34.2416 101.671 33.4781 100.45C33.241 100.07 32.0286 99.0196 31.769 98.7061C30.4981 97.1715 29.8137 95.0906 29.8137 90.8306C29.8137 80.5701 31.6459 51.4376 32.562 50.0634C34.8523 49.1473 46.7618 50.0634 46.7618 50.0634C48.5941 50.0634 49.785 49.2389 52.7166 44.1086C54.1824 39.3448 51.4951 38.1539 49.9682 38.1539C36.2265 37.6958 16.4383 38.3371 8.74297 39.07C1.04759 39.8029 -0.265504 47.0097 0.0398714 50.5215Z"
                  fill="#2D722A"
                />
                <path
                  d="M8.48266 128.599C8.48266 127.844 8.65132 127.169 8.98866 126.575C9.33332 125.974 9.79899 125.508 10.3857 125.178C10.9797 124.841 11.6433 124.672 12.3767 124.672C13.2347 124.672 13.9863 124.892 14.6317 125.332C15.277 125.772 15.728 126.381 15.9847 127.158H14.2137C14.0377 126.792 13.7883 126.517 13.4657 126.333C13.1503 126.15 12.7837 126.058 12.3657 126.058C11.9183 126.058 11.5187 126.165 11.1667 126.377C10.822 126.583 10.5507 126.876 10.3527 127.257C10.162 127.639 10.0667 128.086 10.0667 128.599C10.0667 129.105 10.162 129.553 10.3527 129.941C10.5507 130.323 10.822 130.62 11.1667 130.832C11.5187 131.038 11.9183 131.14 12.3657 131.14C12.7837 131.14 13.1503 131.049 13.4657 130.865C13.7883 130.675 14.0377 130.396 14.2137 130.029H15.9847C15.728 130.814 15.277 131.426 14.6317 131.866C13.9937 132.299 13.242 132.515 12.3767 132.515C11.6433 132.515 10.9797 132.35 10.3857 132.02C9.79899 131.683 9.33332 131.217 8.98866 130.623C8.65132 130.029 8.48266 129.355 8.48266 128.599ZM18.818 124.771V129.523C18.818 130.044 18.9537 130.444 19.225 130.722C19.4963 130.994 19.8777 131.129 20.369 131.129C20.8677 131.129 21.2527 130.994 21.524 130.722C21.7953 130.444 21.931 130.044 21.931 129.523V124.771H23.482V129.512C23.482 130.165 23.339 130.719 23.053 131.173C22.7743 131.621 22.3967 131.958 21.92 132.185C21.4507 132.413 20.9263 132.526 20.347 132.526C19.775 132.526 19.2543 132.413 18.785 132.185C18.323 131.958 17.9563 131.621 17.685 131.173C17.4137 130.719 17.278 130.165 17.278 129.512V124.771H18.818ZM27.6209 132.526C27.0856 132.526 26.6016 132.435 26.1689 132.251C25.7436 132.068 25.4063 131.804 25.1569 131.459C24.9076 131.115 24.7793 130.708 24.7719 130.238H26.4219C26.4439 130.554 26.5539 130.803 26.7519 130.986C26.9573 131.17 27.2359 131.261 27.5879 131.261C27.9473 131.261 28.2296 131.177 28.4349 131.008C28.6403 130.832 28.7429 130.605 28.7429 130.326C28.7429 130.099 28.6733 129.912 28.5339 129.765C28.3946 129.619 28.2186 129.505 28.0059 129.424C27.8006 129.336 27.5146 129.241 27.1479 129.138C26.6493 128.992 26.2423 128.849 25.9269 128.709C25.6189 128.563 25.3513 128.346 25.1239 128.06C24.9039 127.767 24.7939 127.378 24.7939 126.894C24.7939 126.44 24.9076 126.044 25.1349 125.706C25.3623 125.369 25.6813 125.112 26.0919 124.936C26.5026 124.753 26.9719 124.661 27.4999 124.661C28.2919 124.661 28.9336 124.856 29.4249 125.244C29.9236 125.626 30.1986 126.161 30.2499 126.85H28.5559C28.5413 126.586 28.4276 126.37 28.2149 126.201C28.0096 126.025 27.7346 125.937 27.3899 125.937C27.0893 125.937 26.8473 126.014 26.6639 126.168C26.4879 126.322 26.3999 126.546 26.3999 126.839C26.3999 127.045 26.4659 127.217 26.5979 127.356C26.7373 127.488 26.9059 127.598 27.1039 127.686C27.3093 127.767 27.5953 127.862 27.9619 127.972C28.4606 128.119 28.8676 128.266 29.1829 128.412C29.4983 128.559 29.7696 128.779 29.9969 129.072C30.2243 129.366 30.3379 129.751 30.3379 130.227C30.3379 130.638 30.2316 131.019 30.0189 131.371C29.8063 131.723 29.4946 132.006 29.0839 132.218C28.6733 132.424 28.1856 132.526 27.6209 132.526ZM36.8981 124.771V126.014H34.8521V132.449H33.3121V126.014H31.2661V124.771H36.8981ZM41.5857 132.526C40.867 132.526 40.207 132.358 39.6057 132.02C39.0044 131.683 38.5277 131.217 38.1757 130.623C37.8237 130.022 37.6477 129.344 37.6477 128.588C37.6477 127.84 37.8237 127.169 38.1757 126.575C38.5277 125.974 39.0044 125.505 39.6057 125.167C40.207 124.83 40.867 124.661 41.5857 124.661C42.3117 124.661 42.9717 124.83 43.5657 125.167C44.167 125.505 44.64 125.974 44.9847 126.575C45.3367 127.169 45.5127 127.84 45.5127 128.588C45.5127 129.344 45.3367 130.022 44.9847 130.623C44.64 131.217 44.167 131.683 43.5657 132.02C42.9644 132.358 42.3044 132.526 41.5857 132.526ZM41.5857 131.151C42.0477 131.151 42.4547 131.049 42.8067 130.843C43.1587 130.631 43.4337 130.33 43.6317 129.941C43.8297 129.553 43.9287 129.102 43.9287 128.588C43.9287 128.075 43.8297 127.628 43.6317 127.246C43.4337 126.858 43.1587 126.561 42.8067 126.355C42.4547 126.15 42.0477 126.047 41.5857 126.047C41.1237 126.047 40.713 126.15 40.3537 126.355C40.0017 126.561 39.7267 126.858 39.5287 127.246C39.3307 127.628 39.2317 128.075 39.2317 128.588C39.2317 129.102 39.3307 129.553 39.5287 129.941C39.7267 130.33 40.0017 130.631 40.3537 130.843C40.713 131.049 41.1237 131.151 41.5857 131.151ZM55.0294 124.771V132.449H53.4894V127.455L51.4324 132.449H50.2664L48.1984 127.455V132.449H46.6584V124.771H48.4074L50.8494 130.48L53.2914 124.771H55.0294ZM58.092 124.771V132.449H56.552V124.771H58.092ZM61.1865 131.151H64.6405V132.449H59.4045V131.261L62.8365 126.069H59.4045V124.771H64.6405V125.959L61.1865 131.151ZM67.4914 126.014V127.939H70.0764V129.16H67.4914V131.195H70.4064V132.449H65.9514V124.76H70.4064V126.014H67.4914ZM76.143 133.78H74.592V123.561H76.143V133.78ZM80.0686 128.599C80.0686 127.844 80.2373 127.169 80.5746 126.575C80.9193 125.974 81.3849 125.508 81.9716 125.178C82.5656 124.841 83.2293 124.672 83.9626 124.672C84.8206 124.672 85.5723 124.892 86.2176 125.332C86.8629 125.772 87.3139 126.381 87.5706 127.158H85.7996C85.6236 126.792 85.3743 126.517 85.0516 126.333C84.7363 126.15 84.3696 126.058 83.9516 126.058C83.5043 126.058 83.1046 126.165 82.7526 126.377C82.4079 126.583 82.1366 126.876 81.9386 127.257C81.7479 127.639 81.6526 128.086 81.6526 128.599C81.6526 129.105 81.7479 129.553 81.9386 129.941C82.1366 130.323 82.4079 130.62 82.7526 130.832C83.1046 131.038 83.5043 131.14 83.9516 131.14C84.3696 131.14 84.7363 131.049 85.0516 130.865C85.3743 130.675 85.6236 130.396 85.7996 130.029H87.5706C87.3139 130.814 86.8629 131.426 86.2176 131.866C85.5796 132.299 84.8279 132.515 83.9626 132.515C83.2293 132.515 82.5656 132.35 81.9716 132.02C81.3849 131.683 80.9193 131.217 80.5746 130.623C80.2373 130.029 80.0686 129.355 80.0686 128.599ZM92.45 132.526C91.7313 132.526 91.0713 132.358 90.47 132.02C89.8686 131.683 89.392 131.217 89.04 130.623C88.688 130.022 88.512 129.344 88.512 128.588C88.512 127.84 88.688 127.169 89.04 126.575C89.392 125.974 89.8686 125.505 90.47 125.167C91.0713 124.83 91.7313 124.661 92.45 124.661C93.176 124.661 93.836 124.83 94.43 125.167C95.0313 125.505 95.5043 125.974 95.849 126.575C96.201 127.169 96.377 127.84 96.377 128.588C96.377 129.344 96.201 130.022 95.849 130.623C95.5043 131.217 95.0313 131.683 94.43 132.02C93.8286 132.358 93.1686 132.526 92.45 132.526ZM92.45 131.151C92.912 131.151 93.319 131.049 93.671 130.843C94.023 130.631 94.298 130.33 94.496 129.941C94.694 129.553 94.793 129.102 94.793 128.588C94.793 128.075 94.694 127.628 94.496 127.246C94.298 126.858 94.023 126.561 93.671 126.355C93.319 126.15 92.912 126.047 92.45 126.047C91.988 126.047 91.5773 126.15 91.218 126.355C90.866 126.561 90.591 126.858 90.393 127.246C90.195 127.628 90.096 128.075 90.096 128.588C90.096 129.102 90.195 129.553 90.393 129.941C90.591 130.33 90.866 130.631 91.218 130.843C91.5773 131.049 91.988 131.151 92.45 131.151ZM101.087 132.526C100.368 132.526 99.708 132.358 99.1067 132.02C98.5053 131.683 98.0287 131.217 97.6767 130.623C97.3247 130.022 97.1487 129.344 97.1487 128.588C97.1487 127.84 97.3247 127.169 97.6767 126.575C98.0287 125.974 98.5053 125.505 99.1067 125.167C99.708 124.83 100.368 124.661 101.087 124.661C101.813 124.661 102.473 124.83 103.067 125.167C103.668 125.505 104.141 125.974 104.486 126.575C104.838 127.169 105.014 127.84 105.014 128.588C105.014 129.344 104.838 130.022 104.486 130.623C104.141 131.217 103.668 131.683 103.067 132.02C102.465 132.358 101.805 132.526 101.087 132.526ZM101.087 131.151C101.549 131.151 101.956 131.049 102.308 130.843C102.66 130.631 102.935 130.33 103.133 129.941C103.331 129.553 103.43 129.102 103.43 128.588C103.43 128.075 103.331 127.628 103.133 127.246C102.935 126.858 102.66 126.561 102.308 126.355C101.956 126.15 101.549 126.047 101.087 126.047C100.625 126.047 100.214 126.15 99.8547 126.355C99.5027 126.561 99.2277 126.858 99.0297 127.246C98.8317 127.628 98.7327 128.075 98.7327 128.588C98.7327 129.102 98.8317 129.553 99.0297 129.941C99.2277 130.33 99.5027 130.631 99.8547 130.843C100.214 131.049 100.625 131.151 101.087 131.151ZM110.493 132.449L107.699 129.028V132.449H106.159V124.771H107.699V128.214L110.493 124.771H112.352L109.184 128.577L112.44 132.449H110.493ZM117.79 133.78H116.239V123.561H117.79V133.78ZM124.774 124.771C125.581 124.771 126.288 124.929 126.897 125.244C127.513 125.56 127.986 126.011 128.316 126.597C128.653 127.177 128.822 127.851 128.822 128.621C128.822 129.391 128.653 130.066 128.316 130.645C127.986 131.217 127.513 131.661 126.897 131.976C126.288 132.292 125.581 132.449 124.774 132.449H122.09V124.771H124.774ZM124.719 131.14C125.526 131.14 126.149 130.92 126.589 130.48C127.029 130.04 127.249 129.421 127.249 128.621C127.249 127.822 127.029 127.199 126.589 126.751C126.149 126.297 125.526 126.069 124.719 126.069H123.63V131.14H124.719ZM131.515 126.014V127.939H134.1V129.16H131.515V131.195H134.43V132.449H129.975V124.76H134.43V126.014H131.515ZM137.369 131.228H139.899V132.449H135.829V124.771H137.369V131.228ZM142.418 124.771V132.449H140.878V124.771H142.418ZM150.837 124.771L148.021 132.449H146.151L143.335 124.771H144.985L147.097 130.876L149.198 124.771H150.837ZM153.3 126.014V127.939H155.885V129.16H153.3V131.195H156.215V132.449H151.76V124.76H156.215V126.014H153.3ZM161.574 132.449L159.88 129.457H159.154V132.449H157.614V124.771H160.496C161.09 124.771 161.596 124.878 162.014 125.09C162.432 125.296 162.744 125.578 162.949 125.937C163.162 126.289 163.268 126.685 163.268 127.125C163.268 127.631 163.122 128.09 162.828 128.5C162.535 128.904 162.099 129.182 161.519 129.336L163.356 132.449H161.574ZM159.154 128.302H160.441C160.859 128.302 161.171 128.203 161.376 128.005C161.582 127.8 161.684 127.518 161.684 127.158C161.684 126.806 161.582 126.535 161.376 126.344C161.171 126.146 160.859 126.047 160.441 126.047H159.154V128.302Z"
                  fill="#2D722A"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      {/* </section> */}

      <motion.div
        className="container my-9"
        style={{marginTop:"4.5rem",marginBottom:"4.5rem"}}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* <div className="container my-5"> */}
        <div className="row align-items-center">
          {/* Left Side Text */}
          <div className="col-md-6">
            <h2 className="fw-bold heading">
              Our <span className="text-custom-success">Mission</span>
            </h2>
            <p className="text-muted para1">
              To promote a preventive and sustainable approach to <br></br>{" "}
              nutrition and wellness, ensuring a healthier and longer life{" "}
              <br></br> for all individuals.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center">
            <img
              src={missionImage}
              alt="Mission"
              className="img-fluid"
              style={{ width: "400px"}}
            />
          </div>
        </div>
      </motion.div>
      {/* </div> */}
    </>
  );
};

export default AboutSection;
