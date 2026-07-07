import React from "react";

import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

import "../style/landing.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">

      <div className="gradient one"></div>
      <div className="gradient two"></div>
      <div className="gradient three"></div>

      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <CTA />

      <Footer />

    </div>
  );
};

export default LandingPage;