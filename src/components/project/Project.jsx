import PropTypes from 'prop-types';

export default function Project({
  title,
  imageSrc,
  imageAtl,
  projectLink,
  repoLink,
  children,
}) {
  return (
    <section className="bg-secondary rounded shadow-card text-center mb-3 p-3 portfolio-card shadow-card-hover">
      <header className="fs-5 fw-semibold mb-2">{title}</header>
      <img src={imageSrc} className="w-100 h-auto mb-2" alt={imageAtl} />
      <div className="px-1">
        <div className="mb-2">
          {children}
          </div>
          <a href={projectLink} target="_blank" rel="noopener noreferrer"
             className="d-block my-2 text-azure text-decoration-none">
            Live Project
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer"
             className="d-block my-2 text-azure text-decoration-none">
            GitHub
          </a>
      </div>
    </section>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAtl: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  children: PropTypes.node,
};
