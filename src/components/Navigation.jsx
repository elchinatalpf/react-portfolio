import { Link, useLocation } from 'react-router-dom';

function NavTabs () {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <Link>
          </Link>
        </li>
      </ul>
    </nav>
  )

}