import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import * as biIcons from "react-icons/bi";

function Header({ scrollToSection }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="header-section">
        <div className="container">
          <div className="left-container">
            <div className="header-link">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >
                <p id="header__logo">achyut .</p>
              </Link>
            </div>
          </div>

          <div className="right-container">
            <div className="header-link">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                <p>about</p>
              </a>
            </div>
            <div className="header-link">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                <p>projects</p>
              </a>
            </div>
            <div className="header-link__contact-btn">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <p>contact</p>
              </a>
            </div>
          </div>

          <div className="right-container-mobile">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              <biIcons.BiUser />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              <biIcons.BiNote />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              <biIcons.BiPhone />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
