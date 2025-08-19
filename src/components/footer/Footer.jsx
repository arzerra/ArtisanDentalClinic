import style from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdPhone, MdOutlineMailOutline, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={style.footer}>




      <div className={style.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Artisan Dental Clinic | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
