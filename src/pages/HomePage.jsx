import { Link } from 'react-router-dom';
import photo from '../assets/portfolio-photo.jpg';

export default function HomePage() {
  return (
    <div className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-gradient-dark rounded-3 shadow-lg p-4 p-md-5 animate-fade-in-up">
              
              {/* Hero Section */}
              <div className="text-center mb-5">
                <h1 className="display-1 fw-bold text-light mb-3 text-shadow-md display-responsive">
                  Hi, I'm Javier Morales
                </h1>
                <p className="lead fs-3 text-tan mb-4">
                  Software Developer | Ballet Teacher/Coach
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/portfolio" className="btn btn-info btn-lg px-4 py-2 fw-semibold text-uppercase shadow-sm hover-lift">
                    View Projects
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg px-4 py-2 fw-semibold text-uppercase">
                    Get in Touch
                  </Link>
                </div>
              </div>
              
              {/* Photo Section */}
              <div className="text-center mb-5">
                <div className="position-relative d-inline-block">
                  <img
                    className="rounded-3 shadow-lg"
                    src={photo}
                    alt="Javier Morales"
                    width="300"
                    height="400"
                    style={{ 
                      maxWidth: '100%',
                      height: 'auto',
                      border: '3px solid rgba(100, 108, 255, 0.3)'
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
                  <div className="bg-navy bg-opacity-50 rounded-3 p-4 shadow">
                    <p className="fs-5 lh-lg text-light mb-4">
                      <span className="fs-4 fw-bold text-info me-2">💡</span>
                      As I conclude my internship at NAIC as a Business Analyst/QA Project
                      Support Intern, I take immense pride in recently completing an intensive
                      Full Stack Coding Bootcamp program. This period has been transformative,
                      filled with practical projects and real-world applications that have
                      solidified my web development skills.
                    </p>
                    
                    <hr className="my-4 opacity-25" />
                    
                    <p className="fs-5 lh-lg text-light mb-4">
                      <span className="fs-4 fw-bold text-info me-2">🚀</span>
                      An insatiable curiosity and an unwavering commitment to continuous
                      learning fuel my journey in the technology field. Every project and
                      challenge has been an opportunity for growth. I am excited to bring my
                      newly acquired skills to a full-time role where I can contribute to
                      innovative and impactful solutions.
                    </p>
                    
                    <hr className="my-4 opacity-25" />
                    
                    <p className="fs-5 lh-lg text-light mb-4">
                      <span className="fs-4 fw-bold text-info me-2">🎭</span>
                      Before my incursion into the tech industry, I spent over two decades as
                      a classical dancer, traveling to 18 countries to teach and perform. This
                      unique experience has instilled in me a solid work ethic, creativity,
                      problem-solving abilities, and a dedication to excellence.
                    </p>
                    
                    <p className="fs-5 lh-lg text-light mb-0">
                      <span className="fs-4 fw-bold text-info me-2">🎯</span>
                      I am actively seeking new opportunities to leverage my diverse
                      experiences and technical knowledge to make a significant impact. The
                      amalgamation of my artistic past and technological future drives my
                      passion to create and innovate in ways that resonate both aesthetically
                      and functionally.
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
