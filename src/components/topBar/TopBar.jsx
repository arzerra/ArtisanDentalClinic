import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={style.header}>
      <div className={style.left}>
        <Link to="/admin-login" className={style.adminLink}>
          Admin Login
        </Link>
      </div>

      {/* Right: Social Icons */}
      <div className={style.right}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={style.iconLink}
        >
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={style.iconLink}
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className={style.iconLink}
        >
          {/* If this doesn’t show, swap to fa-twitter */}
          <i className="fa-brands fa-x-twitter" />
        </a>
      </div>
    </div>
  );
}
