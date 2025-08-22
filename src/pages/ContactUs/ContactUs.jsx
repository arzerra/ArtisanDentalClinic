import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactTopMargin}></div>
      <div className={styles.contactBackground}>
        <h1>CONTACT US</h1>
      </div>
      <h1>How can we help?</h1>
      <div className={styles.contactForm}>
        <h1>Contact Us</h1>
      </div>
    </div>
  );
}
