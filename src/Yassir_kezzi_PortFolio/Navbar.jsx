let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-5" href="#">PortFolio_Shark_Family</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li><a className="nav-link active" href="#home">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#skills">Skills</a></li>
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#education">Education</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;