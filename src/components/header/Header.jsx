import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/admin-login" className={styles.adminLink}>Artisan Dental Clinic</Link>
      </div>

      <nav className={styles.right}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.iconLink}>
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.iconLink}>
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X" className={styles.iconLink}>
          <i className="fa-brands fa-x-twitter" />
        </a>
      </nav>
    </header>
    </>
  );
}
