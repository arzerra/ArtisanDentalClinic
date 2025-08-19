import React, { useState } from "react";
import style from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={style.header}>
        <a href="/" className={style.logo}>
          <span className={style.logoArtisan}>Artisan</span>
          <span className={style.logoClinic}>Dental Clinic</span>
        </a>
        <button
          className={style["menu-toggle"]}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <nav className={menuOpen ? style["nav-open"] : ""}>
          <ul>
            <li className={currentPath === "/" ? style.active : ""}><Link  to="/">Home</Link ></li>
            <li className={currentPath === "/appointments" ? style.active : ""}><Link  to="/appointments">Appointments</Link ></li>
            <li className={currentPath === "/about" ? style.active : ""}><Link  to="/about">About Us</Link ></li>
            <li className={currentPath === "/contact" ? style.active : ""}><Link  to="/contact">Contact Us</Link ></li>
            {/* <li className={currentPath === "/login" ? style.active : ""}><Link  to="/login">Login</Link ></li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
