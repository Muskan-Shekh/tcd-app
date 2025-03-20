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
        path="Blog"
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
        path="BlogDetails"
        element={
          <>
          <Layout>
            <BlogDetails/>
          </Layout>
          </>
        }
        />
      </Routes>
    </Router>
  );
};

export default App;
