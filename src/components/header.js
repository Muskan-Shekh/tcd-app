import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Function to handle click and set the active link
  const handleClick = (link) => {
    setActiveLink(link);
  };

  // Update activeLink state when the route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header
      className="sticky-header bg-custom-dark rounded-bottom-5"
      style={{ padding: "20px 0" }}
    >
      <div className="container d-lg-block d-none">
        <div className="d-flex align-items-center">
          <div className="h4 fw-bold d-flex align-items-center">
            <svg
              width="91"
              height="58"
              viewBox="0 0 93 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ padding: "6px" }}
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
                fillRule="evenodd"
                clipRule="evenodd"
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
          <nav
            className="d-none d-md-flex"
            style={{ marginLeft: "auto", marginRight: "90px", gap: "50px" }}
          >
            <Link
              to="/"
              className={`text-decoration-none ${
                activeLink === "/" ? "active" : "text-white"
              }`}
              onClick={() => handleClick("/")}
              style={{
                fontWeight: "500",
                transition: "all 500ms ease 0ms",
              }}
            >
              Home
            </Link>
            <Link
              to="/our-meals"
              className={`text-decoration-none ${
                activeLink === "/our-meals" ? "active" : "text-white"
              }`}
              onClick={() => handleClick("/our-meals")}
              style={{
                fontWeight: "500",
                transition: "all 500ms ease 0ms",
              }}
            >
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
            </Link>
            <Link
              to="/"
              className={`text-decoration-none ${
                activeLink === "/about-us" ? "active" : "text-white"
              }`}
              style={{ fontWeight: "500", transition: "all 500ms ease 0ms" }}
              onClick={() => handleClick("/about-us")}
            >
              About Us
            </Link>
            <Link
              to="/"
              className={`text-decoration-none ${
                activeLink === "/blogs" ? "active" : "text-white"
              }`}
              style={{ fontWeight: "500", transition: "all 500ms ease 0ms" }}
              onClick={() => handleClick("/blogs")}
            >
              Blogs
            </Link>
            <Link
              to="/"
              className={`text-decoration-none ${
                activeLink === "/contact-us" ? "active" : "text-white"
              }`}
              style={{ fontWeight: "500", transition: "all 500ms ease 0ms" }}
              onClick={() => handleClick("/contact-us")}
            >
              Contact Us
            </Link>
          </nav>

          <button
            className="btn btn-light rounded-pill border-0 "
            style={{
              fontWeight: "600",
              padding: "18px 32px",
              transition: "all 500ms ease 0ms",
            }}
          >
            Get the App
          </button>
        </div>
      </div>
      <nav className="navbar d-lg-none d-block p-0">
        <div className="container" bis_skin_checked="1">
          <a className="navbar-brand" href="https://oah.eco-hotels.nl/oah">
            <svg
              width="91"
              height="58"
              viewBox="0 0 93 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ padding: "6px" }}
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
                fillRule="evenodd"
                clipRule="evenodd"
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
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-start text-bg-white"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
            bis_skin_checked="1"
          >
            <div
              className="offcanvas-header justify-content-end"
              bis_skin_checked="1"
            >
              <button
                type="button"
                className="btn_close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="offcanvas-body" bis_skin_checked="1">
              <ul
                id="menu-main-menu-1"
                className="navbar-nav justify-content-end flex-grow-1 pe-3"
              >
                <li>
                  <a title="Home" href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a title="Our Meals" href="#" className="nav-link">
                    Our Meals
                  </a>
                </li>
                <li>
                  <a title="A bout Us" href="#" className="nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a title="Blogs" href="#" className="nav-link">
                    Blogs
                  </a>
                </li>
                <li>
                  <a title="Contact Us" href="#" className="nav-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
