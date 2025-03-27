import React from "react";
import "./NewFooter.css";
import * as faIcons from "react-icons/fa6";

function NewFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  return (
    <>
      <section className="footer-section">
        <div className="footer_container--left">
          <a
            href="https://github.com/achyutrimal4"
            rel="noreferrer"
            target="_blank"
          >
            <faIcons.FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/achyutrimal004"
            rel="noreferrer"
            target="_blank"
          >
            <faIcons.FaLinkedinIn />
          </a>
        </div>

        <div className="footer_container--right">
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              scrollToTop(); // Call the scroll function
            }}
          >
            back to top
          </a>
        </div>
      </section>
      <section className="bottom-footer">
        <p>&copy; 2025 achyut rimal</p>
      </section>
    </>
  );
}

export default NewFooter;
