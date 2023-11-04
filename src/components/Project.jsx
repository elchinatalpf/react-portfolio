export default function Project({ title, imageSrc, imageAtl, projectLink, children }) {
  return (
    <section className="card">
      <header>{title}</header>
        <img src={imageSrc} className="projects-images" alt={imageAtl} />
        <div className="card-content">
          <p className="card-text">
            {children}
            {projectLink && <a href={projectLink}><br />Go to Project</a>}
          </p>
        </div>
    </section>
  );
}