import React, { useState } from "react";
import "./aboutMe.css";

export default function AboutMe() {

  const [showFullResume, setshowFullResume] = useState(false);
  
  const handleToggleResume = () => {
    setshowFullResume(!showFullResume);
  };

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Description about myself
      </p>
      <button onClick={handleToggleResume}>
        {showFullResume ? "Show Less" : "Show More"}</button>

      {showFullResume && (
        <div>
          <h2>Full Resume</h2>
          <p>
            Description about myself
          </p>
          {/* Add more content as needed */}
        </div>
      )}
      <a href="./Javier_Morales_Resume_2024.pdf" download="Javier_Morales_Resume_2024.pdf" className="download-button">Download Resume (PDF)</a>
      
    </div>
  );
}




    // <div className="container mt-5">
    //   <div className="row">
    //     <div className="col-12">
    //       <h1 className="text-center">Javier Morales</h1>

    //       <h2 className="mt-4">Objective</h2>
    //       <p>
    //         Highly motivated software engineer eager to leverage extensive data analysis skills and technical proficiency in SQL,
    //         Tableau, and Snowflake acquired at the National Association of Insurance Commissioners (NAIC) to contribute effectively
    //         to software development projects. Committed to utilizing business management acumen and project support expertise to
    //         drive innovation and achieve organizational objectives.
    //       </p>

    //       <h2 className="mt-4">Technical Skills</h2>
    //       <ul className="list-group">
    //         <li className="list-group-item"><strong>Programming:</strong> HTML, CSS, JavaScript, SQL, MERN Stack</li>
    //         <li className="list-group-item"><strong>Tools:</strong> Excel, Tableau, Jira, Snowflake, PostgreSQL, VS Code, Git workflow</li>
    //         <li className="list-group-item"><strong>Languages:</strong> Fluent in Spanish and English</li>
    //       </ul>

    //       <h2 className="mt-4">Work Experience</h2>
    //       <div className="mb-3">
    //         <h3>BA/QA Project Support Intern</h3>
    //         <h4>National Association of Insurance Commissioners (NAIC)</h4>
    //         <p>Sep 2023  Present</p>
    //         <ul className="list-group">
    //           <li className="list-group-item">Conduct data analysis using Excel, SQL, and Tableau for data-driven decision-making processes</li>
    //           <li className="list-group-item">Translate official documents to Spanish to facilitate communication with Spanish-speaking stakeholders</li>
    //           <li className="list-group-item">Manage invoices, audits, and metric report generation for consultant teams, ensuring accuracy and compliance</li>
    //           <li className="list-group-item">Provide support to OPTins by conducting audits and quality assurance of PDF file ingestion</li>
    //           <li className="list-group-item">Maintain contact lists for monthly industry and state meetings, facilitating seamless communication and collaboration</li>
    //           <li className="list-group-item">Perform QA testing of SQL queries in Snowflake to ensure data integrity and system functionality</li>
    //         </ul>
    //       </div>

    //       <h2 className="mt-4">Certifications</h2>
    //       <ul className="list-group">
    //         <li className="list-group-item">Tableau A-Z Hands-On Tableau Training for Data Science (Udemy)</li>
    //         <li className="list-group-item">Generative AI for Leaders & Business Professionals (Udemy)</li>
    //       </ul>

    //       <h2 className="mt-4">Education</h2>
    //       <ul className="list-group">
    //         <li className="list-group-item">Full Stack Software Development Bootcamp, University of Kansas (2022 - 2023)</li>
    //         <li className="list-group-item">Associate's Degree in Business Management, Eastern Gateway Community College (2019 - 2022)</li>
    //         <li className="list-group-item">National School of Art, Classical Ballet (1999 - 2003)</li>
    //       </ul>

    //       <h2 className="mt-4">Previous Experience</h2>
    //       <ul className="list-group">
    //         <li className="list-group-item">Dancer/Professor, Kansas City Ballet (2017 - 2023)</li>
    //         <li className="list-group-item">Dancer, Bay Area Houston Ballet & Theater (2015 - 2017)</li>
    //         <li className="list-group-item">Instructor, Feijoo Ballet School (2016 - 2017)</li>
    //         <li className="list-group-item">Dancer, Cultural Center of Mazatlán, Mexico (2014 - 2015)</li>
    //         <li className="list-group-item">Dancer, National Ballet of Cuba (2003 - 2014)</li>
    //       </ul>

    //       <h2 className="mt-4">Transferable Skills from Ballet Career</h2>
    //       <ul className="list-group">
    //         <li className="list-group-item">Strong discipline and time management honed through years of rigorous training and performance schedules</li>
    //         <li className="list-group-item">Excellent teamwork and ability to perform under pressure in high-stakes environments</li>
    //         <li className="list-group-item">Teaching and coaching experience working with diverse groups of students, demonstrating effective communication and leadership abilities</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>