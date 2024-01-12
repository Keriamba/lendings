import React from 'react'
import styles from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer_container}>
        <section className={styles.logo_desc_wrapper}>
            <img className={styles.logo} src='../../../images/footer_footer.svg' />
            <p className={styles.footerDescription}>
            Join our community on social media to stay up-to-date on the latest CBD trends,<br/> exclusive promotions,
             and behind-the-scenes content. Follow us on Facebook, Twitter, and<br/>
             Instagram and join the conversation today
            </p>
            <div>
                <a className={styles.socialNetorkLink}>
                    <img src='../../../images/Twitter-logo.svg' />
                </a>
                <a className={styles.socialNetorkLink}>
                    <img src='../../../images/instagram-logo.svg' />
                </a>
            </div>
        </section>
        <section className={styles.pages_wrapper}>
            <h3 className={styles.pagesTitle}>
                Pages
            </h3>
            <ul className={styles.footerUl}>
                <li>
                    <a className={styles.footerListLink} href="#">Home</a>
                </li>
                <li>
                    <a className={styles.footerListLink} href="#">Shop</a>
                </li>
                <li>
                    <a className={styles.footerListLink} href="#">About us</a>
                </li>
                <li>
                    <a className={styles.footerListLink} href="#">Site map</a>
                </li>
                <li>
                    <a className={styles.footerListLink} href="#">Blog</a>
                </li>
            </ul>
        </section>
        <section className={styles.pages_wrapper}>
            <h3 className={styles.pagesTitle}>
                Service
            </h3>
            <ul className={styles.footerUl}>
                <li>
                    <a className={styles.footerListLink} href="#">Whole sale/Bulk</a>
                </li>
                <li>
                    <a className={styles.footerListLink} href="#">Subscribe and <br />
                        save 10%</a>
                </li>
                <li>
                    <a className={styles.footerListLink} href="#">Influencers program</a>
                </li>
            </ul>
        </section>
        <section className={styles.pages_wrapper}>
            <h3 className={styles.pagesTitle}>
                Contact
            </h3>
            <ul className={styles.footerUl}>
                <li>
                    <address><img  src='../../../images/ant-design_phone-filled.svg' /></address>
                </li>
                <li>
                     <a className={styles.footerListLink} href="#"> <img className={styles.image} src='../../../images/inst-small-logo.svg' /> @Astra_cannabis</a>
                </li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer