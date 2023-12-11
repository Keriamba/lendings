import React from 'react'
import styles from './home.module.scss'
import HomeHeader from '../../components/homeHeader/HomeHeader'
import HomeContent from '../../components/homeContent/HomeContent'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <>
    <div className={styles.container}>
      <HomeHeader/>
      <HomeContent />
      <Footer />
    </div>
{/*     <header className={styles.container} >
      <div className={styles.header_container}>
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
        <button className={styles.header_button_signup}>Sign up</button>
        </section>
      </div>
    </header> */}
{/*     <div>
    <main className={styles.main_head_container}>
          <section className={styles.main_header_text}>
            <h1>
              Discover the Cosmic<br/> Benefits of Astra 
            </h1>
            <p>
              Journey beyond the ordinary with Astra's premium CBD. Our <br/>
              unique formula harnesses the power of the cosmos to deliver<br/>
              a therapeutic experience unlike any other.
            </p>
            <div className={styles.buttons_block}>
              <button>
                <img src='../../../images/shop_button.svg' />
              </button>
              <a href='#'>
                Learn more
                </a>
            </div>
          </section>
          <section className={styles.main_header_img}>
            <img src='../../../images/item_candys.png' alt='candys' />
          </section>
    </main>
    <section className={styles.main_description_container}>
      <div className={styles.main_description_text}>
        <h1>
        Discover the Out-of-this-World CBD Experience
        </h1>
        <p>
        Immerse yourself in the celestial embrace of Astra's CBD. A universe of relaxation, relief, and rejuvenation awaits you.
        </p>
        <ul>
          <li>
            <p>Pure and Potent: Sourced from the finest organic farms, our CBD is 100% pure and rigorously tested for quality.</p>
          </li>
          <li>
            <p>Unparalleled Experience: With Astra, you don't just consume CBD—you experience it. Dive into the cosmic wonder with every drop.</p>
          </li>
          <li>
            <p>Trusted and Safe: Your well-being is our top priority. Astra's CBD is free from harmful additives and meets the highest safety standards.</p>
          </li>
        </ul>
        </div>
        <div className={styles.main_description_image}>
          <img src='../../../images/candies-8288760_640.jpg'/>
        </div>
    </section>
    </div> */}
    </>
  )
}

export default Home