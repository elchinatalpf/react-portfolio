import React from "react";
import photo from "../../assets/portfolio-photo.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe-container">
      <h4>About Me</h4>
      <img className="photo-javier" src={photo} alt="Javier Morales" />
      <p className="aboutMe-text">
        As I near the completion of my internship at NAIC as a BA/QA Project
        Support Intern, I am proud to have recently graduated from an intensive
        Fullstack Coding Bootcamp. This period has been transformative, filled
        with hands-on projects and real-world applications that have solidified
        my skills in web development.
        <br />
        <br />
        My journey into technology is driven by a relentless curiosity and a
        commitment to continuous learning. Each project and challenge has been
        an opportunity to grow, and I am excited to bring my newly acquired
        skills to a full-time role where I can contribute to innovative
        solutions and impactful projects.
        <br />
        <br />
        Prior to diving into the tech industry, I spent over two decades as a
        classical dancer, traveling to 18 countries to teach and perform. This
        unique background has equipped me with a strong work ethic, creative
        problem-solving abilities, and a dedication to excellence. These
        attributes seamlessly translate into my current work, where precision,
        creativity, and perseverance are key.
        <br />
        <br />I am now actively seeking new opportunities where I can leverage
        my diverse experiences and technical expertise to make a meaningful
        impact. The blend of my artistic past and technological future drives my
        passion for creating and innovating in ways that resonate both
        aesthetically and functionally.
      </p>
    </div>
  );
}
