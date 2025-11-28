import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="#projects" className="nav-link">
            projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
