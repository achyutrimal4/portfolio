import React from "react";
import "./about.css";
function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <p className="title">[about me]</p>
        <div className="about-text">
          <p></p>
          <p>
            I am an IT professional with a Master's degree in Data Analytics
            from the University of the West of Scotland.
          </p>
          <p>
            I can design data analytics projects to give business insights to
            generate unique data-driven solutions.
          </p>
          <p>
            I am passionate about continous learning along with professional
            growth.
          </p>
          <p>
            I work at Waitrose and Partners as a Supermarket/Customer Assistant.
          </p>
          <p>
            I am looking to get into Data Analytics, which more aligns with my
            academic qualifications and interests
          </p>
          <p>So please hire me.</p>
          <p>Thank you</p>

          <div className="education-section">
            <h1>Education</h1>
            <div className="edu-history">
              <div className="course">
                <span>
                  <h1>MSc. IT, Data Analytics</h1>
                  <p>2024-2025</p>
                </span>
                <p className="italic">
                  University of the West of Scotland, London
                </p>
                <p>
                  Graduated with grade "A" in MSc. IT with Data Analytics from
                  the University of the West of Scotland, specializing in
                  Machine Learning, Data Analysis, AI, Data Visualization, and
                  Database Management.
                </p>
              </div>
            </div>

            <div className="edu-history">
              <div className="course">
                <span>
                  <h1>BSc. IT, Computer Systems Engineering</h1>
                  <p>2018-2022</p>
                </span>

                <p className="italic">
                  International School of Management and Technology, Kathmandu,
                  Nepal
                </p>
                <p>aff. University of Sunderland</p>
                <p>
                  Graduated with First Class Honors with specialization in Web
                  Development, Software Development, Object-oriented
                  Programming, Data Analysis and Machine Learning
                </p>
              </div>
            </div>
          </div>
          <div className="primary-btn">
            <a
              href={`${process.env.PUBLIC_URL}/files/Achyut_Rimal_CV.pdf`}
              download="Achyut_Rimal_CV.pdf"
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="skills-section">
            <h1>Skills</h1>
            <div className="edu-history">
              <div className="course">
                <span>
                  <h1>MSc. IT, Data Analytics</h1>
                  <p>2024-2025</p>
                </span>
                <p className="italic">
                  University of the West of Scotland, London
                </p>
                <p>
                  Graduated with grade "A" in MSc. IT with Data Analytics from
                  the University of the West of Scotland, specializing in
                  Machine Learning, Data Analysis, AI, Data Visualization, and
                  Database Management.
                </p>
              </div>
            </div>

            <div className="edu-history">
              <div className="course">
                <span>
                  <h1>BSc. IT, Computer Systems Engineering</h1>
                  <p>2018-2022</p>
                </span>

                <p className="italic">
                  International School of Management and Technology, Kathmandu,
                  Nepal
                </p>
                <p>aff. University of Sunderland</p>
                <p>
                  Graduated with First Class Honors with specialization in Web
                  Development, Software Development, Object-oriented
                  Programming, Data Analysis and Machine Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
