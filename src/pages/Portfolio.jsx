import Project from '../components/Project';
import projects from '../components/projects-data/projectsData';

export default function Portfolio() {
  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5 animate-fade-in-up">
          <h1 className="display-2 fw-bold text-light mb-3 text-shadow-md">
            My Projects
          </h1>
          <p className="lead fs-4 text-tan mb-4">
            Showcasing my journey in web development
          </p>
          <div className="d-flex gap-2 justify-content-center flex-wrap">
            <span className="badge bg-info rounded-pill px-3 py-2 fs-6">React</span>
            <span className="badge bg-success rounded-pill px-3 py-2 fs-6">Node.js</span>
            <span className="badge bg-warning text-dark rounded-pill px-3 py-2 fs-6">MongoDB</span>
            <span className="badge bg-danger rounded-pill px-3 py-2 fs-6">Express</span>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.title} className="col-12 col-md-6 col-lg-4">
              <div className={`animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
