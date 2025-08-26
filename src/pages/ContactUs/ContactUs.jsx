import styles from './ContactUs.module.css';
import Form from './Form';

export default function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBackground}>
        <h1>Contact Us</h1>
      </div>

      <h1 className={styles.contentTitle}>Hi, how can we help?</h1>

      {/* Flex row wrapper */}
      <div className={styles.contactContent}>
        {/* Left: Form */}
        <div className={styles.contactInfo}>
          <div>
            <h1>Clinic Hours</h1>
            <span>Morning: 10:00AM - 12:00PM</span><br />
            <span>Afternoon: 1:00PM - 5:00PM</span>
          </div>

          <div>
            <h1>Contact Number</h1>
            <span>0917 717 5300</span><br />
            <span>0961 943 7592</span>
          </div>

          <div>
            <h1>Email</h1>
            <span>artisan.8800@gmail.com</span>
          </div>

          <div>
            <h1>Message Us</h1>
            <button>Messenger</button>
          </div>

          <div>
            <h1>Follow us</h1>
            <button>Facebook</button>
          </div>
           {/* Right: Info */}
        </div>
                <div className={styles.contactForm}>
          <Form />
        </div>
      </div>
    </div>
  );
}
