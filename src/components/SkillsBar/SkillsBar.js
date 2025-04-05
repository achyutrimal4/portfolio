// src/components/SkillsBar.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./SkillsBar.css";

const skills = [
  { name: "Python", level: 80 },
  { name: "SQL", level: 90 },
  { name: "Git Version Control", level: 75 },
  { name: "Data Analysis", level: 80 },
  { name: "Tableau", level: 70 },
  { name: "Statistics", level: 70 },
];

const SkillsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="skills-container" ref={ref}>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
          <div className="skill-bar-bg">
            <motion.div
              className="skill-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${skill.level}%` : 0 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBar;
