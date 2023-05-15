import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nisl ac neque varius aliquet. Duis maximus massa quis est interdum posuere.</p>
          </div>
          <div className={styles.footerSection}>
            <h3> Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Band</a></li>
              <li><a href="#">Tour</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Follow Us</h3>
            <div className={styles.footerSocial}>
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer