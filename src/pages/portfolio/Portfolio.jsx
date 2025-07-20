import Project from '../../components/project/Project';
import projects from '../../components/projects_js/projectsData';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio">
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
