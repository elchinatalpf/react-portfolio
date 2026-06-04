import { Link } from 'react-router-dom';
import photo from '../assets/portfolio-photo.jpg';

export default function HomePage() {
  return (
    <div className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-gradient-dark rounded-3 shadow-lg p-4 p-md-6 animate-fade-in-up">
              {/* Hero Section */}
              <div className="text-center mb-5 position-relative">
                <h1 className="display-hero fw-bold mb-4 text-shadow-hero position-relative">
                  <span className="bg-gradient-primary text-transparent bg-clip-text">
                    Hi, I'm Javier Morales
                  </span>
                </h1>
                <p className="lead fs-2 text-info mb-2 fw-light">
                  Software Developer
                </p>
                <p className="fs-4 text-tan mb-5 opacity-75">
                  Ballet Teacher/Coach
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link
                    to="/portfolio"
                    className="btn btn-info btn-lg px-4 py-2 fw-semibold text-uppercase shadow-sm hover-lift"
                  >
                    View Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-light btn-lg px-4 py-2 fw-semibold text-uppercase"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Photo Section */}
              <div className="text-center mb-5">
                <div className="position-relative d-inline-block">
                  <img
                    className="photo-professional"
                    src={photo}
                    alt="Javier Morales"
                    width="300"
                    height="400"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>

              {/* Bio Section */}
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="bg-glass rounded-3 p-4 shadow">
                    <p className="fs-5 lh-lg text-light mb-4">
                      Full-stack developer and operations analyst specializing
                      in building responsive web applications and data-driven
                      infrastructure. Drawing on a dual background in high-velocity
                      technical environments and enterprise data management,
                      I engineer scalable front-end solutions and optimize internal
                      workflows that directly align business requirements with technical execution.
                    </p>

                    <hr className="my-4 opacity-25" />

                    <p className="fs-5 lh-lg text-light mb-4">
                      My foundation spans full-stack development (MERN stack, Next.js, C#/.NET)
                      and modern data engineering ecosystems, with proven experience leveraging SQL,
                      Tableau, Snowflake, and Postgres to drive operational decisions.
                      I systematically integrate advanced LLM workflows (Gemini, Claude) into
                      my development pipeline to accelerate shipping times and ensure code quality.
                      Whether deploying responsive national campaigns or architecting cross-functional
                      data pipelines, I deliver production-ready implementations designed for performance.
                    </p>

                    <hr className="my-4 opacity-25" />

                    <p className="fs-5 lh-lg text-light mb-0">
                      Prior to entering technology, I spent two decades as a classical ballet dancer
                      and instructor with the National Ballet of Cuba and Kansas City Ballet, performing
                      across 18 countries. The extreme discipline, precise execution, and adaptability
                      required at the elite level of international performance now drive my engineering
                      standard: building clean, robust architectures that perform flawlessly under pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
