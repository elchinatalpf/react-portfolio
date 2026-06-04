export default function Footer() {
  return (
    <footer className="bg-teal text-center p-3 rounded-2 footer">
      <div>
        <h5>Connect with Me!</h5>
        <a
          href="https://github.com/elchinatalpf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tan text-decoration-none mx-2 footer-link"
        >
          <i className="bi bi-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/javier-morales-08642baa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tan text-decoration-none mx-2 footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/elchinatalpf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tan text-decoration-none mx-2 footer-link"
        >
          Twitter/X
        </a>
      </div>
    </footer>
  );
}
