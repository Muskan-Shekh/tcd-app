import React from "react";
import "./index.css";
import AboutSection from "./components/aboutSection.js";
import Expertise from "./components/experties.js";
import BlogSection from "./components/blogSection.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import HeroSection from "./components/heroSection.js";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <Expertise />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default App;
