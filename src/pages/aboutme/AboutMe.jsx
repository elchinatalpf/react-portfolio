import React from 'react';
import photo from '../../assets/portfolio-photo.jpg'

export default function AboutMe() {
  return (
    <div>
      <h4>About Me</h4>
      <img className='photo-javier' src={photo} alt="Javier Morales" />
      <p>
      I am currently immersed in the dynamic world of technology as a
      BA/QA Project Support Intern at NAIC, while also honing my skills
      through a rigorous Fullstack Coding Bootcamp. This exciting phase
      of my career is marked by constant learning and the application of
      knowledge in real-world projects, which prepares me to face the
      challenges of the technology industry head-on. The opportunities
      ahead are incredibly promising and I am fully committed to leveraging
      my diverse experiences to excel in this field.
      <br />
      Fun fact, I bring a unique perspective from my past life as
      a classical dancer. With over 20 years of experience, I have taught
      and performed for audiences around the world, an adventure that has
      instilled in me discipline, creativity and a passion for excellence,
      qualities that I now bring to my burgeoning career in technology.
      </p>
    </div>
  );
}
