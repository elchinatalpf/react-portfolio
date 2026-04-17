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
    <article className="project-card-pro h-100 d-flex flex-column">
      {/* Image Container - clean, no gradient */}
      <div className="position-relative overflow-hidden bg-dark">
        <img
          src={imageSrc}
          className="w-100"
          alt={imageAtl}
          style={{
            aspectRatio: '16/9',
            objectFit: 'cover',
            display: 'block',
            minHeight: '200px'
          }}
          loading="lazy"
        />
      </div>

      {/* Card Body - title integrated, more spacious */}
      <div className="flex-grow-1 p-4 d-flex flex-column">
        {/* Title moved here from header - notice h3 with h5 class for better proportion */}
        <h3 className="h5 text-light fw-bold mb-3">{title}</h3>

        {/* Description with improved spacing */}
        <div className="text-light mb-4 flex-grow-1 lh-base opacity-75">
          {children}
        </div>

        {/* Action Buttons - centered, better spacing */}
        <div className="d-flex gap-2 justify-content-center">
          {/* Conditionally show Live Demo only if projectLink exists and is not empty */}
          {projectLink && projectLink.trim() !== '' && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-tan btn-sm px-4 py-2 hover-lift">
              <i className="bi bi-eye me-1"></i> Live Demo
            </a>
          )}

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm px-4 py-2">
            <i className="bi bi-github me-1"></i> View Code
          </a>
        </div>
      </div>
    </article>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAtl: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  repoLink: PropTypes.string.isRequired,
  children: PropTypes.node,
};
