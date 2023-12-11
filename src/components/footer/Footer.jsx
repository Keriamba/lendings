import React from 'react'
import styles from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer_container}>
        <section className={styles.logo_desc_wrapper}>
            <img className={styles.logo} src='../../../images/footer_footer.svg' />
            <p>
            Join our community on social media to stay up-to-date on the latest CBD trends,<br/> exclusive promotions,
             and behind-the-scenes content. Follow us on Facebook, Twitter, and<br/>
             Instagram and join the conversation today
            </p>
            <div>
                <a>
                    <img src='../../../images/Twitter-logo.svg' />
                </a>
                <a>
                    <img src='../../../images/instagram-logo.svg' />
                </a>
            </div>
        </section>
        <section className={styles.pages_wrapper}>
            <h3>
                Pages
            </h3>
            <ul >
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Shop</a>
                </li>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Site map</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
        </section>
        <section className={styles.pages_wrapper}>
            <h3>
                Service
            </h3>
            <ul >
                <li>
                    <a href="#">Whole sale/Bulk</a>
                </li>
                <li>
                    <a href="#">Subscribe and <br />
                        save 10%</a>
                </li>
                <li>
                    <a href="#">Influencers program</a>
                </li>
            </ul>
        </section>
        <section className={styles.pages_wrapper}>
            <h3>
                Contact
            </h3>
            <ul >
                <li>
                    <address><img src='../../../images/ant-design_phone-filled.svg' /></address>
                </li>
                <li>
                     <a href="#"> <img src='../../../images/inst-small-logo.svg' /> @Astra_cannabis</a>
                </li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer