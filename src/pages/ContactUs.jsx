import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      
      <div className={styles.contactContent}>
        {/* Contact Form */}
        <form className={styles.contactForm}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your email" required />
          </label>
          <label>
            Phone Number
            <input type="number" name="phonenumber" placeholder="Your phone" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Write your message..." required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
