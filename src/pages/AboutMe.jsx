import React, { useState } from 'react';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiSnowflake } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiDotnet } from 'react-icons/si';
import { TbBrandCSharp, TbPresentationAnalytics } from 'react-icons/tb';

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
    { name: 'C#', icon: <TbBrandCSharp /> },
    { name: '.NET', icon: <SiDotnet /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Tableau', icon: <TbPresentationAnalytics /> },
    { name: 'Snowflake', icon: <SiSnowflake /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
  ];

  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5 animate-fade-in-up">
          <h1 className="display-2 fw-bold text-light mb-3">About Me</h1>
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
                  I am Javier Morales, a full-stack developer and operations analyst defined by a
                  rigorous commitment to technical precision and continuous systems optimization.
                </p>
                <p className="fs-5 mb-4">
                  Following a distinguished 20-year career as an international ballet soloist,
                  I translated a lifetime of elite discipline, structured execution, and creative
                  problem-solving into building robust software and data solutions.
                </p>
                <p className="fs-5">
                  This non-traditional trajectory gives me a unique cognitive edge: the ability
                  to analyze complex systems from first principles, master technical stacks rapidly,
                  and approach code architecture with both mathematical rigor and spatial clarity.
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
                    <div
                      className="text-center animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="tech-icon-modern mx-auto mb-2">
                        {React.cloneElement(tech.icon, { className: 'fs-1' })}
                      </div>
                      <small className="text-tan fw-semibold">
                        {tech.name}
                      </small>
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
            <div className="bg-gradient-teal rounded-3 p-3 p-md-5 shadow-lg animate-fade-in-up mt-4">
              <h2 className="display-6 display-md-5 text-center text-light mb-4 fw-bold">
                My Journey
              </h2>

              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="bg-dark bg-opacity-25 rounded-3 p-3 p-md-4">
                    <p className="fs-5 lh-lg text-light mb-4">
                      My approach to technology is shaped by two decades on the
                      world’s premier stages. Performing under high-stakes conditions
                      with institutions like the National Ballet of Cuba taught me that
                      mastery is the result of deliberate practice, iterative refinement,
                      and an uncompromising attention to detail.
                    </p>

                    <p className="fs-5 lh-lg text-light mb-5">
                      I approach software engineering with that same operational intensity.
                      I do not merely write code; I design clean, maintainable systems
                      and build automation pipelines that eliminate friction. Every
                      technical challenge—whether optimizing an asynchronous workflow,
                      debugging a legacy .NET framework, or modeling a data schema—is met
                      with the absolute focus and execution velocity cultivated through a
                      lifetime of elite professional performance.
                    </p>

                    <div className="d-grid d-sm-block text-center">
                      <a
                        href="/Javier Morales Resume 2026.pdf"
                        download="Javier Morales Resume 2026.pdf"
                        className="btn btn-info btn-lg px-4 px-md-5  py-3 fw-semibold text-uppercase shadow hover-lift"
                      >
                        <i className="bi bi-download me-2"></i>Download My
                        Resume
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
