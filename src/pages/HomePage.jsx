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
                  {/* <div className="position-absolute top-0 start-100 translate-middle">
                    <span className="badge bg-info rounded-pill px-3 py-2 shadow">
                      Available for hire
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Bio Section */}
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="bg-glass rounded-3 p-4 shadow">
                    <p className="fs-5 lh-lg text-light mb-4">
                      Full-stack developer with a unique blend of technical
                      expertise and creative problem-solving abilities. Recently
                      completed roles as Operations & Solutions Specialist at
                      Tiger-Rock Martial Arts, engineering responsive landing
                      pages for national campaigns, and as BA/QA Project Support
                      Intern at NAIC, where I leveraged SQL, Tableau, and
                      Snowflake for data-driven decision-making.
                    </p>

                    <hr className="my-4 opacity-25" />

                    <p className="fs-5 lh-lg text-light mb-4">
                      My technical foundation includes full-stack development
                      (MERN stack, Next.js, C#), data analysis, and
                      cross-functional collaboration—bridging business
                      requirements with front-end solutions. I actively
                      integrate AI tools including Gemini, Grok, Claude into my
                      development workflow. I bring a results-oriented approach,
                      whether optimizing production workflows or translating
                      stakeholder needs into scalable technical implementations.
                    </p>

                    <hr className="my-4 opacity-25" />

                    <p className="fs-5 lh-lg text-light mb-0">
                      Before transitioning to tech, I spent two decades as a
                      classical ballet dancer and instructor, performing with
                      the National Ballet of Cuba and Kansas City Ballet across
                      18 countries. I continue teaching and coaching ballet at
                      all levels. This foundation instilled discipline,
                      adaptability, and excellence under pressure—skills that
                      now drive my commitment to crafting innovative,
                      user-focused solutions.
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
