import { Link, useLocation } from 'react-router-dom';
import { Collapse } from 'bootstrap';

export default function NavTabs() {
  const currentPage = useLocation().pathname;

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/aboutme', label: 'About Me' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => {
    const el = document.getElementById('mainNav');
    if (el?.classList.contains('show')) {
      Collapse.getOrCreateInstance(el, { toggle: false }).hide();
    }
  };

  return (
    <ul className="navbar-nav ms-auto gap-md-2">
      {links.map(({ to, label }) => (
        <li className="nav-item" key={to}>
          <Link
            to={to}
            onClick={closeMenu}
            className={`nav-link px-3 py-2 rounded${currentPage === to ? ' active' : ''}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
