import React from "react";
import "./LandingSection.css";
import vid from "../videos/vid (1).gif";
import vid2 from "../videos/vid (3).gif";
import * as faIcons from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function LandingSection() {
  return (
    <section className="landing-section">
      <div className="container">
        <div className="landing-row">
          <div className="landing-row--text">
            <h1>data</h1>
            <h1>analyst</h1>
          </div>
          <div className="landing-row--gif">
            <div className="gif">
              <img src={vid} alt="" />
            </div>
          </div>
        </div>
        <div className="landing-row">
          <div className="gif">
            <img src={vid2} alt="" />
          </div>
          <div className="landing-row--text">
            <h1>Achyut</h1>
            <h1>Rimal</h1>
          </div>
        </div>
        <div className="landing-row social-icons">
          <a href="https://github.com/achyutrimal4">
            {" "}
            <faIcons.FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/achyutrimal004/">
            <faIcons.FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/achyutrimal4/">
            <SiLeetcode />
          </a>
        </div>
        <div className="landing-row">
          <p>[2025]</p>
          <p>[portfolio]</p>
          <p>[passionate]</p>
          <p>[rigorious]</p>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
