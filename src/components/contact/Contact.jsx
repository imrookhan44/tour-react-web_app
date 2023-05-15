import React from 'react'
import styles from './contact.module.css'
function Contact() {
  return (
    <>
      <div className={styles.contact}>

        <div className={styles.container}>
          <h1>CONTACT</h1>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your message" defaultValue={""} />
              </div>
              <div className={styles.formGroup}>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact