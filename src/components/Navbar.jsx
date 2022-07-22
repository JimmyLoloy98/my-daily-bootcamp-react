export default function Navbar() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Me
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-logo">
          <a className="logo-link" href="/index.html">
            <img
              className="logo-img"
              src="../assets/img/logo.svg"
              alt="bootcamp logo"
            />
            <h2 className="logo-text">My Daily Bootcamp</h2>
          </a>
        </div>
      </header>
    </div>
  );
}
