import { FaPhone, FaEnvelope, FaFacebookMessenger, FaFacebook   } from "react-icons/fa";
import styles from './ContactUs.module.css';
import MessageForm from './MessageForm';

export default function ContactUs() {
  return (
    <div className={styles.contactContainer}>
        <div className="relative w-full max-h-[800px] overflow-hidden">
          <img
            src="/images/pages/contactUs/bg/4.jpg"
            loading="eager"
            fetchPriority="high"
            alt="background"
            className="
              object-cover object-[50%_20%] sm:object-[50%_45%] w-full blur-[1px] lg:blur-[5px]
              h-[350px] sm:h-[600px] md:h-[600px] lg:h-[350px]
            "

          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pt-0 sm:pt-20">
            <h1 className="font-['Archivo_Black'] text-white text-5xl sm:text-7xl font-bold drop-shadow-lg"             
            style={{
            textShadow: '1px 1px 0px black'
            }}>
              Contact Us
            </h1>
          </div>
        </div>

      <h1 className={styles.contentTitle} data-aos="zoom-in-up">Hi, how can we help?</h1>

      {/* Flex row wrapper */}
      <div className={styles.contactContent}>
        {/* Left: Form */}
        <div className={styles.contactInfo} >
        <div data-aos="fade-right">
          <h1>Clinic Hours</h1>
          <div className={styles.hoursRow}>
            <span>Mon - Fri:</span>
            <span>10:00AM - 5:00PM</span>
          </div>
          <div className={styles.hoursRow}>
            <span>Sat:</span>
            <span>12:00PM - 4:00PM</span>
          </div>
          <div className={styles.hoursRow}>
            <span>Sun:</span>
            <span>Close</span>
          </div>
        </div>

          <div data-aos="fade-right">
            <h1>Contact Number</h1>
            <span><FaPhone/>0917 717 5300</span><br />
            <span><FaPhone/>0961 943 7592</span>
          </div>

          <div data-aos="fade-right">
            <h1>Email</h1>
            <span><FaEnvelope/>artisan.8800@gmail.com</span>
          </div>

          <div data-aos="fade-right">
            <h1>Message Us</h1>
            <button><FaFacebookMessenger />@ArtisanDental</button>
          </div>

          <div data-aos="fade-right">
            <h1>Follow us</h1>
            <button><FaFacebook />@ArtisanDental</button>
          </div>
        </div>
        <div className={styles.contactForm} data-aos="zoom-in">
          <MessageForm />
        </div>
      </div>
    </div>
  );
}
