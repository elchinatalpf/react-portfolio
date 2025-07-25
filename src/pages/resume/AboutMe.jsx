import React, { useState } from 'react';
import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiTableau,
  SiSnowflake,
  SiPostgresql,
} from 'react-icons/si';
import './aboutme.css';
import Button from 'react-bootstrap/Button';

export default function AboutMe() {
  const [showFullResume, setShowFullResume] = useState(false);

  const handleToggleResume = () => {
    setShowFullResume(!showFullResume);
  };

  const technologies = [
    { name: 'Git', icon: <FaGitAlt className="tech-icon" /> },
    { name: 'GitHub', icon: <FaGithub className="tech-icon" /> },
    { name: 'MongoDB', icon: <SiMongodb className="tech-icon" /> },
    { name: 'Node JS', icon: <FaNodeJs className="tech-icon" /> },
    { name: 'React JS', icon: <FaReact className="tech-icon" /> },
    { name: 'MySQL', icon: <SiMysql className="tech-icon" /> },
    { name: 'Tableau', icon: <SiTableau className="tech-icon" /> },
    { name: 'Snowflake', icon: <SiSnowflake className="tech-icon" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="tech-icon" /> },
  ];

  return (
    <div className="container mt-5">
      <h1>About Me</h1>
      <p>
        I am Javier Morales, a software developer with a passion of learning and
        self-improvement as my core strengths.
        <br />
        Former classical ballet dancer from Cuba
      </p>
      <h3>Technologies I Work With</h3>

      <div className="tech-icons">
        <ul>
          {technologies.map((tech) => (
            <li key={tech.name} className="tech-item">
              {React.cloneElement(tech.icon, { className: 'tech-icon' })}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="resume-container">
        <Button variant="outline-success" onClick={handleToggleResume}>
          {showFullResume ? 'Show Less' : 'Show More'}
        </Button>

        {showFullResume && (
          <div>
            <h2>My Journey</h2>
            <p>
              Before stepping into the tech world, I spent 20 years as a
              professional ballet dancer, traveling the globe and performing in
              some of the greatest theaters in the world. These experiences have
              shaped my approach to learning and working in software
              development.
              <br />I am passionate about learning and improving in every aspect
              of my life. I embrace challenges with the same dedication I had
              every day in the studios when I was learning new ballet
              choreography. This mindset helps me not only perform but also
              discover new ways to improve my skills.
            </p>

            <a
              href="./Javier_Morales_Resume_2024.pdf"
              download="Javier_Morales_Resume_2024.pdf"
              className="download-button"
            >
              Download My Resume Here (PDF)
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
