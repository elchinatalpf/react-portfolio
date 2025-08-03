import NavTabs from '../Navigation';

export default function Header() {
  return (
    <header className="p-3 bg-navy sticky-top shadow-sm">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-md-between">
        <h1 className="fs-4 mb-3 mb-md-0 text-center display-3 lh-sm">Javier Morales Portfolio</h1>
        <NavTabs />
      </div>
    </header>
  );
}
