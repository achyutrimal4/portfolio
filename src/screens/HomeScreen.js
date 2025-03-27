// HomeScreen.js
import React, { useRef } from "react";
import About from "../components/About/About.js";
import ProjectLanding from "../components/Projects/ProjectLanding.js";
import LandingSection from "../components/HomeComponents/LandingSection";
import Contact from "../components/contact/contact.js";
import Header from "../components/Header/Header.js";

function HomeScreen() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <LandingSection />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <ProjectLanding />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default HomeScreen;
