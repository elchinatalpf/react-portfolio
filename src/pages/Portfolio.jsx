import Project from '../components/Project';
import projects from '../components/projects-data/projectsData';

export default function Portfolio() {
  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          imageSrc={project.imageSrc}
          imageAtl={project.imageAtl}
          projectLink={project.projectLink}
          repoLink={project.repoLink}
        >
          <p>{project.description}</p>
        </Project>
      ))}
    </div>
  );
}
