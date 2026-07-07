import React from "react";
import { Link } from "react-router";
import {
  HiSparkles,
  HiArrowRight,
} from "react-icons/hi2";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="cta-container">

        <div className="cta-content">

          <span className="cta-badge">
            <HiSparkles />
            AI Powered Career Growth
          </span>

          <h2>
            Ready to Crack
            <span> Your Dream Job?</span>
          </h2>

          <p>
            Join thousands of students and professionals preparing
            smarter with AI. Generate personalized interview plans,
            resume feedback, ATS analysis, and mock interviews —
            all in one place.
          </p>

          <div className="cta-buttons">

            <Link
              to="/signup"
              className="primary-btn"
            >
              Get Started Free

              <HiArrowRight />

            </Link>

            <Link
              to="/login"
              className="secondary-btn"
            >
              Login
            </Link>

          </div>

        </div>

        <div className="cta-right">

          <div className="floating-card">

            <h4>✨ Premium Features</h4>

            <ul>

              <li>AI Resume Analysis</li>

              <li>ATS Resume Checker</li>

              <li>Interview Roadmap</li>

              <li>Company Specific Questions</li>

              <li>Mock Interview</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;