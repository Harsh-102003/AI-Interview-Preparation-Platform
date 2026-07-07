import React from "react";
import { Link } from "react-router";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { HiSparkles } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Left */}

        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-circle">
              <HiSparkles />
            </div>

            <div>
              <h2>InterviewAI</h2>
              <span>Prepare Smarter</span>
            </div>
          </div>

          <p>
            AI-powered interview preparation platform that helps students and
            professionals prepare smarter, build confidence, and land their
            dream jobs.
          </p>

          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/login">Login</Link>

          <Link to="/signup">Register</Link>
        </div>

        {/* Product */}

        <div className="footer-links">
          <h3>Product</h3>

          <a href="#features">Features</a>

          <a href="#workflow">How It Works</a>

          <a href="#">Pricing</a>
        </div>

        {/* Support */}

        <div className="footer-links">
          <h3>Support</h3>

          <a href="#">Help Center</a>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InterviewAI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
