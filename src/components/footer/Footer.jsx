import style from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className={style.footer}>
            <p>&copy; {new Date().getFullYear()} Artisan Dental Clinic | All Rights Reserved</p>
            
            <div className={style.footerSocial}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
            </div>
        </footer>
    );
}
