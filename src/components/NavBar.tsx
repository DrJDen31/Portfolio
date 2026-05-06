import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Collections", to: "/collections" },
  { label: "Courses", to: "/courses-overview" },
  { label: "About", to: "/about" },
];

const NavBar = () => {
  return (
    <header className="site-nav">
      <Link className="site-brand" to="/">
        Jaden Tompkins
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
