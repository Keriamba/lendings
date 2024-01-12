import React from 'react'
import styles from './footer.module.scss'
function FooterType2() {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.footerDataContainer}>
            <div className={styles.contactDataContainer}>
                <img width={63} height={27} src='../../../images/logo-logo.svg' alt='logo' />
                <section >
                    <p>
                        Address
                    </p>
                    <address>
                        123 Main St, Sydney, NSW 2000
                    </address>
                </section>
                <section className={styles.contacts}>
                    <p>Contact Us</p>
                    <a href='tel:+1800 555 1234'>1800 555 1234</a>
                    <a href='mailto:info@astracbd.com'>info@astracbd.com</a>
                </section>
                <section className={styles.socialNetworks}>
                    <img src="../../../images/fbIcon.svg" alt="facebook" />
                    <img src="../../../images/instIcon.svg" alt="instagramm" />
                    <img src="../../../images/XIcon.svg" alt="X" />
                    <img src="../../../images/LinkedIcon.svg" alt="LinkedIn" />
                    <img src="../../../images/YouIcon.svg" alt="YouTube" />
                </section>
            </div>
            <section className={styles.infoContainer}>
            <div className={styles.infoWrapper}>
                <ul>
                    <li>
                        <a href="#">
                            Shop Now
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        About Us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        FAQs
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Wholesale   
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Blog
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.infoWrapper}>
                <ul>
                    <li>
                        <a href="#">
                        Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Shipping
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Returns
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Terms   
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
            </section>
        </div>
        <section className={styles.termsContainer}>
        <div className={styles.divider}></div>
        <div className={styles.termsDataContainer}>
        <p>
            © 2023 Astra. All rights reserved.
        </p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookies Policy</a>
        </div>
        </section>
    </footer>
  )
}

export default FooterType2