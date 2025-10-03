import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import Modal from "../modal/login/loginModal.jsx";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] =useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${style.header} ${scrolled ? style.scrolled : ""} ${
        menuOpen ? style["nav-open"] : ""
      }`}
    >
      <Link to="/" className={style.logo} onClick={(e) => {e.preventDefault(); window.location.href = "/";}}>
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
            <Link to="/" onClick={(e) => {e.preventDefault(); window.location.href = "/";}}>Home</Link>
          </li>
          <li className={currentPath === "/about" ? style.active : ""}>
            <Link to="/about" onClick={(e) => {e.preventDefault(); window.location.href = "/about";}}>About Us</Link>
          </li>
          <li className={currentPath === "/services" ? style.active : ""}>
            <Link to="/services" onClick={(e) => {e.preventDefault(); window.location.href = "/services";}}>Services</Link>
          </li>
          <li className={currentPath === "/dentist" ? style.active : ""}>
            <Link to="/dentist" onClick={(e) => {e.preventDefault(); window.location.href = "/dentist";}}>Dentist</Link>
          </li>
          <li className={currentPath === "/contact" ? style.active : ""}>
            <Link to="/contact" onClick={(e) => {e.preventDefault(); window.location.href = "/contact";}}>Contact Us</Link>
          </li>
          <li className={currentPath === "/appointments" ? style.active : ""}>
            <Link to="/appointments" onClick={(e) => {e.preventDefault(); window.location.href = "/appointments";}}>Appointments</Link>
          </li>
          <span>|</span>
          <button onClick={() => setShowModal(true)}>
            Admin Login</button>
        </ul>
      </nav>

      {/* Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </header>


  );
}

export default Header;
