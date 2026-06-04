import { Link } from 'react-router-dom';
import NavTabs from './Navigation';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-navy sticky-top shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fs-4 fw-bold lh-sm">
          Javier Morales Portfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <NavTabs />
        </div>
      </div>
    </nav>
  );
}
