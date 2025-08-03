import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul className="list-unstyled -p-0 m-0 d-flex flex-wrap justify-content-center gap-2 gap-md-3">
        <li className="m-0">
          <Link
            to="/"
            className={currentPage === '/'
              ? 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link active'
              : 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="m-0">
          <Link
            to="/Portfolio"
            className={
              currentPage === '/Portfolio'
              ? 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link active'
              : 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link'
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="m-0">
          <Link
            to="/AboutMe"
            className={
              currentPage === '/AboutMe'
              ? 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link active'
              : 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link'
            }
          >
            About Me
          </Link>
        </li>
        <li className="m-0">
          <Link
            to="/Contact"
            className={
              currentPage === '/Contact'
              ? 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link active'
              : 'text-decoration-none px-3 py-2 rounded d-block fw-medium nav-link'
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
