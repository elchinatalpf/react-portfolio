export default function Project({ title, imageSrc, imageAtl, projectLink, repoLink, children }) {
  return (
    <section className="card">
      <header>{title}</header>
        <img src={imageSrc} className="projects-images" alt={imageAtl} />
        <div className="card-content">
          <p className="card-text">
            {children}
            {projectLink}
            <a href={projectLink} target="_blank" rel="noopener noreferrer"><br />Live Project</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
    </section>
  );
}