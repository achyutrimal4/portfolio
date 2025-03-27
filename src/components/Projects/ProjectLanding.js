import React from "react";
import "./ProjectLanding.css";
import * as faIcons from "react-icons/fa6";
import { VscLinkExternal } from "react-icons/vsc";
import projects from "../../Projects";
import { useState } from "react";

const categories = ["All", "Python", "SQL", "Tableau", "Excel", "Cheatsheet"];

function ProjectLanding() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };
  return (
    <section className="projectlanding-section">
      <div className="title">
        <p>[ work ]</p>
      </div>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={activeCategory === category ? "active-button" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projectlanding-container">
        <div className="analysis-projects">
          <div className="analysis-projects--grid">
            {filteredProjects.map((project) => (
              <div className="an-project-card" key={project.id}>
                <p id="an-project-tag">{project.type}</p>
                <img src={project.image} alt={project.name} />
                <div className="an-project-description">
                  <div className="an-project-title">
                    <a
                      href={project.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <div className="an-card-bottom">
                    <div className="project-date">
                      <p>
                        <faIcons.FaCalendar />
                      </p>
                      <p>{project.date}</p>
                      <p>|</p>
                      <p>{project.icon}</p>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <div className="an-card-footer">
                    <a
                      href={project.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>
                        <VscLinkExternal />
                      </p>
                    </a>
                    <a
                      href={project.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>
                        <faIcons.FaGithub />
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectLanding;
