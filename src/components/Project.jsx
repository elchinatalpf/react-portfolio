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
    <article className="h-100 d-flex flex-column bg-glass rounded-3 overflow-hidden shadow-lg hover-lift">
      {/* Card Header */}
      <header className="p-3 bg-navy bg-opacity-50">
        <h3 className="h4 text-light fw-bold mb-0">{title}</h3>
      </header>
      
      {/* Image Container */}
      <div className="position-relative overflow-hidden">
        <img
          src={imageSrc}
          className="w-100"
          alt={imageAtl}
          style={{ aspectRatio: '16/9', objectFit: 'cover' }}
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="position-absolute bottom-0 start-0 end-0 bg-gradient" 
             style={{ background: 'linear-gradient(to top, rgba(2, 48, 47, 0.9), transparent)', height: '50%' }}>
        </div>
      </div>
      
      {/* Card Body */}
      <div className="flex-grow-1 p-3 d-flex flex-column">
        <div className="text-light mb-3 flex-grow-1">
          {children}
        </div>
        
        {/* Action Buttons */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <a href={projectLink} 
             target="_blank" 
             rel="noopener noreferrer"
             className="btn btn-info btn-sm px-3 shadow-sm">
            <i className="bi bi-eye me-1"></i> Live Demo
          </a>
          <a href={repoLink} 
             target="_blank" 
             rel="noopener noreferrer"
             className="btn btn-outline-light btn-sm px-3">
            <i className="bi bi-github me-1"></i> View Code
          </a>
        </div>
      </div>
      
      {/* Tech Stack Footer */}
      <footer className="p-2 bg-dark bg-opacity-25 border-top border-secondary">
        <div className="d-flex flex-wrap gap-1 justify-content-center">
          <span className="badge bg-secondary small">React</span>
          <span className="badge bg-secondary small">Bootstrap</span>
          <span className="badge bg-secondary small">Node.js</span>
        </div>
      </footer>
    </article>
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
