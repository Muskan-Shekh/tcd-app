import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AboutSection from "./components/aboutSection.js";
import Expertise from "./components/experties.js";
import BlogSection from "./components/blogSection.js";
import Layout from "./components/layout.js";
import HeroSection from "./components/heroSection.js";
import OurMeals from "./pages/OurMeals.js";
import AboutUs from "./pages/AboutUs.js";
import TermsAndCondition from "./pages/TermsAndCondition.js";
import Blog from "./pages/Blog.js";
import BlogDetails from "./pages/BlogDetails.js";
import ContactUs from "./pages/ContactUs.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage Route - Shows Header, HeroSection, AboutSection, etc. */}
        <Route
          path="/"
          element={
            <>
              <Layout>
                <HeroSection />
                <AboutSection />
                <Expertise />
                <BlogSection />
              </Layout>
            </>
          }
        />

        {/* Our Meals Route - Shows only Header and OurMeals */}
        <Route
          path="/our-meals"
          element={
            <>
              <Layout>
                <OurMeals />
              </Layout>
            </>
          }
        />

        {/* about-us */}
        <Route
        path="/about-us"
        element={
          <>
          <Layout>
            <AboutUs />
          </Layout>
          </>
        }
        />
        {/* terms and conditions */}
           {/* about-us */}
           <Route
        path="terms-and-conditions"
        element={
          <>
          <Layout>
            <TermsAndCondition />
          </Layout>
          </>
        }
        />
        {/* Blog */}
        <Route
        path="Blogs"
        element={
          <>
          <Layout>
            <Blog />
          </Layout>
          </>
        }
        />
         {/* BlogDetails */}
         <Route
        path="blog-details"
        element={
          <>
          <Layout>
            <BlogDetails/>
          </Layout>
          </>
        }
        />
         {/* ContactUs */}
         <Route
        path="contact-us"
        element={
          <>
          <Layout>
         <ContactUs/>
          </Layout>
          </>
        }
        />
         {/* Privacy Policy */}
         <Route
        path="privacy-policy"
        element={
          <>
          <Layout>
         <PrivacyPolicy/>
          </Layout>
          </>
        }
        />
      </Routes>
    </Router>
  );
};

export default App;
