import style from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={style.footer}>
      {/* <div className={style.upper}>
        <h1>Your smile deserves expert care and open conversation.</h1>
      </div> */}
      <div className={style.container}>
        {/* Column 1 - Logo */}
    <div className={style.col}>
      <img src="/artisandental.png" alt="Artisan Dental" className={style.logoImg} />

      <div className={style.payments}>
        <div className={style.row}>            
          <p>Accepted</p>
          <img src="/footer/Maya.png" alt="Maya" />
        </div>

        <div className={style.row}>
          <img src="/footer/bpi.webp" alt="BPI" style={{height: "30px"}}/>
          <img src="/footer/QRph.svg" alt="QRPh" />
        </div>

        <div className={style.row}>            
          <img src="/footer/gcash.png" alt="Gcash" />
          <img src="/footer/BancNet.png" alt="BancNet" style={{height: "13px"}}/>
        </div>
      </div>
    </div>


      {/* Column 2 - Clinic Info */}
      <div className={style.col}>
        <h4>Contact</h4>
        <p><strong>Email:</strong> artisan.8800@gmail.com</p>
        <p><strong>Phone:</strong> 0917-717-5300</p>
        <p>Mon – Sat: 10:00 AM – 5:00 PM</p>
        
      </div>

      {/* Column 3 - Hours */}
      <div className={style.col}>
        <h4>Location</h4>
        <p>Room 8, 2nd Floor, Emilia Mindanao Souvenir Center,<br />
            CM Recto St., Claveria, Davao City
        </p>
      </div>

      {/* Column 4 - Socials & Quicklinks */}
      <div className={style.col}>
        <h4>Quick Links</h4>
        <ul className={style.quicklinks}>
          <li ><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/dentist">Dentist</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

    </div>

      {/* Bottom */}
    <div className={style.bottom}>
    <p> &copy; Artisan Dental Clinic {new Date().getFullYear()} - All Rights Reserved</p>
    <div className={style.socials}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
    </div>

    </footer>
  );
}
