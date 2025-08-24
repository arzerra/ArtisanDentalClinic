import styles from './ContactUs.module.css';
import Form from './Form';

export default function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBackground}>
        <h1>Contact Us</h1>
      </div>
      <h1>How can we help?</h1>
      <div className={styles.contactForm}>
        <Form />
      </div>
      <div>
        <h1>Clinic Hours</h1>
        <span></span>
      </div>
    </div>
  );
}
