import React from 'react'
import styles from './header.module.css'
function Header() {
  return (
    <React.Fragment>
      <header className={styles.menu__bg}>
        <div className={styles.menu__buttons}>
          <ul>
            <li>Home</li>
            <li>Band</li>
            <li>Tour</li>
            <li>Contact</li>
          </ul>
        </div>

      </header>
    </React.Fragment>
  )
}

export default Header