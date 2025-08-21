import React, { useState } from "react";
import style from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <Link to="/" className={style.logo} onClick={handleLinkClick}>
        <span className={style.logoArtisan}>Artisan</span>
        <span className={style.logoClinic}>Dental Clinic</span>
      </Link>

      <button
        className={style["menu-toggle"]}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      <nav className={menuOpen ? style["nav-open"] : ""}>
        <ul>
          <li className={currentPath === "/" ? style.active : ""}>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className={currentPath === "/about" ? style.active : ""}>
            <Link to="/about" onClick={handleLinkClick}>About Us</Link>
          </li>
          <li className={currentPath === "/services" ? style.active : ""}>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
          </li>
          <li className={currentPath === "/dentist" ? style.active : ""}>
            <Link to="/dentist" onClick={handleLinkClick}>Dentist</Link>
          </li>
          <li className={currentPath === "/contact" ? style.active : ""}>
            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <button className={style.appointment}>Appointment</button>

    </header>
  );
}

export default Header;
