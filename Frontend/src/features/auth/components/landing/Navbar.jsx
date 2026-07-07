import React, { useState } from "react";
import { Link } from "react-router";
import {
  HiBars3,
  HiXMark,
  HiSparkles,
} from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}

        <Link
          to="/"
          className="logo"
        >
          <div className="logo-icon">
            <HiSparkles />
          </div>

          <div className="logo-text">
            <h2>InterviewAI</h2>
            <span>Prepare Smarter</span>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="desktop-nav">

          <a href="#features">Features</a>

          <a href="#workflow">How it Works</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* Desktop Buttons */}

        <div className="desktop-buttons">

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="signup-btn"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Toggle */}

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <a
          href="#features"
          onClick={closeMenu}
        >
          Features
        </a>

        <a
          href="#workflow"
          onClick={closeMenu}
        >
          How it Works
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </a>

        <Link
          to="/login"
          className="mobile-login"
          onClick={closeMenu}
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="mobile-signup"
          onClick={closeMenu}
        >
          Get Started
        </Link>

      </div>

    </header>
  );
};

export default Navbar;