import Project from '../components/Project';
import projects from '../components/projects-data/projectsData';

export default function Portfolio() {
  return (
    <div className="min-vh-100 py-5 bg-gradient-dark">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5 animate-fade-in-up">
          <h1 className="display-2 fw-bold text-light mb-3 text-shadow-hero">
            My Projects
          </h1>
          <p className="lead fs-4 text-tan mb-0 opacity-75">
            Showcasing my journey in web development
          </p>
          <div className="d-flex gap-2 justify-content-center flex-wrap">
            <span className="badge bg-dark bg-opacity-50 border border-tan px-3 py-2 fs-6 text-white">
              MERN Stack
            </span>
            <span className="badge bg-dark bg-opacity-50 border border-tan px-3 py-2 fs-6 text-white">
              Full Stack
            </span>
            <span className="badge bg-dark bg-opacity-50 border border-tan px-3 py-2 fs-6 text-white">
              Responsive Design
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid-pro">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Project
                title={project.title}
                imageSrc={project.imageSrc}
                imageAtl={project.imageAtl}
                projectLink={project.projectLink}
                repoLink={project.repoLink}
              >
                <p>{project.description}</p>
              </Project>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
