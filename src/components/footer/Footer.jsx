import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h5>Connect with Me!</h5>
        <a
          href="https://github.com/elchinatalpf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/elchinatalpf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Twitter/X
        </a>
      </div>
    </footer>
  );
}
