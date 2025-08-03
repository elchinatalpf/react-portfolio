import React, { useState } from 'react';
import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiTableau,
  SiSnowflake,
  SiPostgresql,
  SiCsharp,
  SiDotnet
} from 'react-icons/si';
// import './aboutme.css';
import Button from 'react-bootstrap/Button';

export default function AboutMe() {
  const [showFullResume, setShowFullResume] = useState(false);

  const handleToggleResume = () => {
    setShowFullResume(!showFullResume);
  };

  const technologies = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Node JS', icon: <FaNodeJs /> },
    { name: 'C#', icon: <SiCsharp /> },
    { name: '.NET', icon: <SiDotnet /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Tableau', icon: <SiTableau /> },
    { name: 'Snowflake', icon: <SiSnowflake /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
  ];

  return (
    <div className="container mt-5 p-1">
      <h1 className='display-3 lh-sm'>About Me</h1>
      <p>
        I am Javier Morales, a software developer with a passion of learning and
        self-improvement as my core strengths.
        <br />
        Former classical ballet dancer from Cuba
      </p>
      <h3>Technologies I Work With</h3>

      <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
          {technologies.map((tech) => (
            <div key={tech.name} className="d-flex flex-column align-items-center justify-content-center gap-2 text-center">
              {React.cloneElement(tech.icon, { className: 'tech-icon' })}
              <span className='fs-6 text-azure'>{tech.name}</span>
            </div>
          ))}
      </div>

      <div className="d-flex flex-column align-items-center text-center p-3 bg-green-dark rounded shadow-container mt-4">
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
              className="btn btn-primary mt-3"
            >
              Download My Resume Here (PDF)
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
