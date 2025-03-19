import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AboutSection from "./components/aboutSection.js";
import Expertise from "./components/experties.js";
import BlogSection from "./components/blogSection.js";
import Layout from "./components/layout.js";
import HeroSection from "./components/heroSection.js";
import OurMeals from "./pages/OurMeals.js";

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
      </Routes>
    </Router>
  );
};

export default App;
