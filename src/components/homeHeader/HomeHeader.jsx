import React from 'react'
import {Link} from 'react-router-dom'
import styles from './header.module.scss'

const HomeHeader = () => {
  return (
    <header className={styles.header_container}>
        <img className={styles.logo} src='../../../images/Ellipse 2.png' alt='logo'/>
        <nav className={styles.header_nav}>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
              <a href="#">
                Shop
              </a>
              <a href="#">
                About us
              </a>
              <a href="#">
                Whole sale
              </a>
            </li>
          </ul>
        </nav>
        <section className={styles.header_buttons_block}>
        <button className={styles.header_button_signin}>Sign in</button>
        <Link to='/sign-up' className={styles.header_button_signup}>Sign up</Link>
        </section>
    </header>
  )
}

export default HomeHeader