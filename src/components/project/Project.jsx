import PropTypes from 'prop-types';
import './project.css';

export default function Project({
  title,
  imageSrc,
  imageAtl,
  projectLink,
  repoLink,
  children,
}) {
  return (
    <section className="card">
      <header>{title}</header>
      <img src={imageSrc} className="projects-images" alt={imageAtl} />
      <div className="card-content">
        <p className="card-text">
          {children}
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <br />
            Live Project
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

Project.protoTypes = {
  title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAtl: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired,
    children: PropTypes.node,
};
