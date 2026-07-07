import React from "react";
import {
  HiSparkles,
  HiArrowRight,
  HiPlay,
  HiDocumentText,
  HiBriefcase,
  HiAcademicCap,
} from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">

          <HiSparkles />

          <span>AI Powered Interview Preparation</span>

        </div>

        <h1>

          Crack Your

          <span> Dream Job </span>

          Interview

          <br />

          With AI

        </h1>

        <p>

          Upload your resume, paste the job description and let AI create
          a personalized interview roadmap, mock interview questions,
          resume insights and preparation strategy in seconds.

        </p>

        <div className="hero-buttons">

          <button className="primary-btn">

            Get Started

            <HiArrowRight />

          </button>

          <button className="secondary-btn">

            <HiPlay />

            Watch Demo

          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-card">

            <h2>500+</h2>

            <p>Interview Questions</p>

          </div>

          <div className="stat-card">

            <h2>100+</h2>

            <p>Companies Covered</p>

          </div>

          <div className="stat-card">

            <h2>AI</h2>

            <p>Personalized Strategy</p>

          </div>

        </div>

      </div>

      {/* Dashboard Preview */}

      <div className="hero-right">

        <div className="dashboard-card">

          <div className="dashboard-header">

            <div className="dots">

              <span></span>

              <span></span>

              <span></span>

            </div>

            <h4>Interview Dashboard</h4>

          </div>

          <div className="dashboard-body">

            <div className="dashboard-item">

              <HiDocumentText />

              <div>

                <h5>Resume Uploaded</h5>

                <p>ATS Score : 92%</p>

              </div>

            </div>

            <div className="dashboard-item">

              <HiBriefcase />

              <div>

                <h5>Frontend Developer</h5>

                <p>React • Node • MongoDB</p>

              </div>

            </div>

            <div className="dashboard-item">

              <HiAcademicCap />

              <div>

                <h5>Interview Ready</h5>

                <p>128 Questions Generated</p>

              </div>

            </div>

            <div className="progress">

              <div className="progress-fill"></div>

            </div>

            <button className="dashboard-btn">

              Generate Interview Plan

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;    