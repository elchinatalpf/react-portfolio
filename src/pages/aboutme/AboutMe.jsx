import React from "react";
import photo from "../../assets/portfolio-photo.jpg";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe-container">
      <h4>About Me</h4>
      <img className="photo-javier" src={photo} alt="Javier Morales" />
      <p className="aboutMe-text">
      As I conclude my internship at NAIC as a Business Analyst/QA Project
      Support Intern, I take immense pride in recently completing an intensive
      Full Stack Coding Bootcamp program. This period has been transformative,
      filled with practical projects and real-world applications that have
      solidified my web development skills.
        <br />
        <br />
        An insatiable curiosity and an unwavering commitment to continuous
        learning fuel my journey in the technology field. Every project and
        challenge has been an opportunity for growth. I am excited to bring
        my newly acquired skills to a full-time role where I can contribute
        to innovative and impactful solutions.
        <br />
        <br />
        Before my incursion into the tech industry, I spent over two decades
        as a classical dancer, traveling to 18 countries to teach and perform.
        This unique experience has instilled in me a solid work ethic, creativity,
        problem-solving abilities, and a dedication to excellence. These attributes
        seamlessly translate to my current profession, where precision, creativity,
        and perseverance are paramount.
        <br />
        <br />
        I am actively seeking new opportunities to leverage my diverse experiences
        and technical knowledge to make a significant impact. The amalgamation of
        my artistic past and technological future drives my passion to create and
        innovate in ways that resonate both aesthetically and functionally.
      </p>
    </div>
  );
}
