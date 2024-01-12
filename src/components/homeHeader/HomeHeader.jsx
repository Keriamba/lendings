import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styles from './header.module.scss'

const HomeHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () => {
      console.log("test")
      setIsOpen(prev => !prev)
    }

  return (
    <>
    <header className={styles.headerContainer}>
      <Link className={styles.logo} to='/'>
        <img height={46} width={168} src='../../../images/Ellipse 2.png' alt='logo'/>
      </Link>
        <nav>
          <ul className={styles.ulBlock}>
            <li>
              <a className={styles.menuLink} href="#">
                Home
              </a>
              </li>
              <li>
              <a className={styles.menuLink} href="#">
                Shop
              </a>
              </li>
              <li>
              <a className={styles.menuLink} href="#">
                About us
              </a>
              </li>
              <li>
              <a className={styles.menuLink} href="#">
                Whole sale
              </a>
              </li>
          </ul>
        </nav>
        <section className={styles.buttonBlock}>
        <Link to='/sign-in' className={styles.buttonSignin}>Sign in</Link>
        <Link to='/sign-up' className={styles.buttonSignup}>Sign up</Link>
        </section>
        <section className={styles.mobile}>
        <Link className={styles.mobileLogo}>
        <img  width={63} height={27} src='../../../images/TextLogoMobile.svg' alt='logo' />
        </Link>
          <div className={styles.mobileButtons}>
            <button className={styles.buttonBuy}>
              Buy
            </button>
            <button className={`${styles.mobileBurger} ${isOpen ? styles.open : ''}`} onClick={toogleMenu}>
              <span className={[styles.mobileBar, styles.mobileBar1].join(' ')}></span>
              <span className={[styles.mobileBar, styles.mobileBar2].join(' ')}></span>
              <span className={[styles.mobileBar, styles.mobileBar3].join(' ')}></span>
            </button>
          </div>
          </section>
    </header>
    <header className={styles.mobileMenuList}>
    <nav className={`${styles.headerMobileMenu} ${isOpen ? styles.show : ''}`}>
      <ul>
        <li className={styles.mobileListItem}>Home</li>
        <li className={styles.mobileListItem}>Shop</li>
        <li className={styles.mobileListItem}>About Us</li>
        <li className={styles.mobileListItem}>More <img width={24} height={24} src='../../../images/ChevronDown.svg' alt='chevron' /></li>
      </ul>
    </nav>
    </header>
    </>
  )
}

export default HomeHeader