import React, { useState } from 'react';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiTableau } from 'react-icons/si';
import { SiSnowflake } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { SiDotnet } from 'react-icons/si';

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
    <div className="min-vh-100 py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5 animate-fade-in-up">
          <h1 className="display-2 fw-bold text-light mb-3 text-shadow-md">
            About Me
          </h1>
          <p className="lead fs-4 text-tan">
            From dancer to developer - my unique journey
          </p>
        </div>
        
        <div className="row g-5">
          {/* Story Section */}
          <div className="col-lg-6">
            <div className="bg-gradient-dark rounded-3 p-4 shadow-lg h-100 animate-fade-in-up">
              <h2 className="h3 text-info mb-4 fw-bold">My Story</h2>
              <div className="text-light lh-lg">
                <p className="fs-5 mb-4">
                  <span className="fs-4 text-info me-2">👨‍💻</span>
                  I am Javier Morales, a software developer with a passion for learning and
                  self-improvement as my core strengths.
                </p>
                <p className="fs-5 mb-4">
                  <span className="fs-4 text-info me-2">🩰</span>
                  Former classical ballet dancer from Cuba, I bring the same discipline, 
                  creativity, and dedication from my 20-year dance career into the world of technology.
                </p>
                <p className="fs-5">
                  <span className="fs-4 text-info me-2">🌟</span>
                  My unique background gives me a fresh perspective on problem-solving and 
                  an artistic approach to creating elegant code solutions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="col-lg-6">
            <div className="bg-navy rounded-3 p-4 shadow-lg h-100 animate-fade-in-up">
              <h2 className="h3 text-info mb-4 fw-bold">Technical Skills</h2>
              
              <div className="row g-3">
                {technologies.map((tech, index) => (
                  <div key={tech.name} className="col-4 col-md-3">
                    <div className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                      <div className="tech-icon-modern mx-auto mb-2">
                        {React.cloneElement(tech.icon, { className: 'fs-1' })}
                      </div>
                      <small className="text-tan fw-semibold">{tech.name}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Extended Story Section */}
        <div className="mt-5">
          <div className="text-center mb-4">
            <button 
              onClick={handleToggleResume}
              className="btn btn-lg btn-outline-info px-5 py-3 fw-semibold text-uppercase shadow-sm hover-lift"
            >
              {showFullResume ? 'Show Less' : 'Discover My Full Journey'}
            </button>
          </div>
          
          {showFullResume && (
            <div className="bg-gradient-teal rounded-3 p-5 shadow-lg animate-fade-in-up mt-4">
              <h2 className="display-5 text-center text-light mb-4 fw-bold">My Journey</h2>
              
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="bg-dark bg-opacity-25 rounded-3 p-4">
                    <p className="fs-5 lh-lg text-light mb-4">
                      <span className="fs-3 text-info me-2">🌍</span>
                      Before stepping into the tech world, I spent 20 years as a
                      professional ballet dancer, traveling the globe and performing in
                      some of the greatest theaters in the world. These experiences have
                      shaped my approach to learning and working in software
                      development.
                    </p>
                    
                    <p className="fs-5 lh-lg text-light mb-5">
                      <span className="fs-3 text-info me-2">💪</span>
                      I am passionate about learning and improving in every aspect
                      of my life. I embrace challenges with the same dedication I had
                      every day in the studios when I was learning new ballet
                      choreography. This mindset helps me not only perform but also
                      discover new ways to improve my skills.
                    </p>
                    
                    <div className="text-center">
                      <a
                        href="./Javier Morales Resume 2025.pdf"
                        download="Javier Morales Resume 2025.pdf"
                        className="btn btn-info btn-lg px-5 py-3 fw-semibold text-uppercase shadow hover-lift"
                      >
                        <i className="bi bi-download me-2"></i>Download My Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
