import style from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok, FaTelegram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.col}>
          <img src="/images/logo/artisandental.png" alt="Artisan Dental" className={style.logoImg} />

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

        <div className={style.col}>
          <h4>Contact</h4>
          <p><strong>Email:</strong> artisan.8800@gmail.com</p>
          <p><strong>Phone:</strong> 0917-717-5300</p>
          <p>Mon – Sat: 10:00 AM – 5:00 PM</p>
          
        </div>

        <div className={style.col}>
          <h4>Location</h4>
          <p>Room 8, 2nd Floor, Emilia Mindanao Souvenir Center,<br />
              CM Recto St., Claveria, Davao City
          </p>
        </div>

        <div className={style.col}>
          <h4>Map</h4>
          <iframe
            title="Emilia Mindanao Souvenir Center"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4820.454621247679!2d125.611564!3d7.070792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d5c7123831b%3A0xd48a43fd8d616825!2sEmilia%20Mindanao%20Souvenir%20Center!5e0!3m2!1sen!2sph!4v1757273497275"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

        <div className={style.bottom}>
          <p> &copy; Artisan Dental Clinic {new Date().getFullYear()} - All Rights Reserved</p>
          <div className='flex flex-row gap-3'>
            <a href="/"><p>Home</p></a>
            <a href="/about"><p>About</p></a>
            <a href="/services"><p>Services</p></a>
            <a href="/dentist"><p>Dentist</p></a>
            <a href="/contact"><p>Contact</p></a>
            <a href="/appointments"><p>Appointment</p></a>
          </div>
          <div className={style.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaYoutube  /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaLinkedin  /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTiktok  /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTelegram  /></a>
          </div>
        </div>
    </footer>
  );
}
