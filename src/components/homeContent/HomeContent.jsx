import React from 'react'
import styles from './content.module.scss'
import { Link } from 'react-router-dom'
const HomeContent = () => {
  return (
    <main>
        <section className={styles.previewContainer}>
            <div className={styles.previewContentContainer}>
                <article className={styles.articleWrapper}>
                    <h1 className={styles.previewTitle}>
                        Discover the Cosmic<br/>
                         Benefits of Astra
                    </h1>
                    <p className={styles.previewText}>
                        Journey beyond the ordinary with Astra's premium CBD. Our<br/>
                         unique formula harnesses the power of the cosmos to deliver a<br/>
                          therapeutic experience unlike any other.
                    </p>
                </article>
                <div className={styles.buttonBlock}>
                    <a href="">
                        <img width={88} height={48} src='../../../images/shop_button.svg' alt='shop button' />
                    </a>
                    <a className={styles.learnMorePreview} href="">
                        Learn more
                    </a>
                </div>
                
            </div>
        </section>
        <section className={styles.descriptionContainer}>
            <div className={styles.descriptionTextContent}>
                <span className={styles.descriptionSpan}>
                    Explore
                </span>
                <article className={styles.descriptionArticle}>
                    <h1 className={styles.descriptionTitle}>
                        Discover the Out-of-this-<br/>
                        World CBD Experience
                    </h1>
                    <p  className={styles.descriptionText}>
                        Immerse yourself in the celestial embrace of Astra's CBD. A universe<br/>
                        of relaxation, relief, and rejuvenation awaits you.
                    </p>
                    <ul className={styles.descriptionUl}>
                        <li className={styles.descriptionLi}>
                         Pure and Potent: Sourced from the finest organic farms, our CBD is<br/>
                         100% pure and rigorously tested for quality.
                        </li>
                        <li className={styles.descriptionLi}>
                         Unparalleled Experience: With Astra, you don't just consume CBD—<br/>
                         you experience it. Dive into the cosmic wonder with every drop.
                        </li>
                        <li className={styles.descriptionLi}>
                         Trusted and Safe: Your well-being is our top priority. Astra's CBD is<br/>
                         free from harmful additives and meets the highest safety<br/>
                         standards.
                        </li>
                    </ul>
                </article>
                <div className={styles.productDescription}>
                    <article className={styles.descriptionArticle}>
                        <h3 className={styles.descriptionProducttitle}>
                            Vape Pens
                        </h3>
                        <p className={styles.descriptionText}>
                            Experience the smooth flavors of our<br/>
                            CBD vape pens, available in a variety <br/>
                            of galactic flavors.
                        </p>
                    </article>
                    <article className={styles.descriptionArticle}>
                        <h3 className={styles.descriptionProducttitle}>
                            Edibles
                        </h3>
                        <p className={styles.descriptionText}>
                            Indulge your taste buds with our CBD-<br/>
                            infused gummies and chocolates,<br/>
                            crafted for an otherworldly delight.
                        </p>
                    </article>
                </div>
                <div className={styles.buttonBlock}>
                    <Link className={styles.shopButton} to='/shop'>Shop</Link>
                    <Link className={styles.learnMoreDescription} to='/shop'>Learn more <img width={24} height={24} src='../../../images/icon-cube.svg' alt='cube' /></Link>
                </div>

            </div>
            <img className={styles.candiesImg} width={618} height={640} src='../../../images/item_candies.png' alt='candies' />
        </section>
        <section className={styles.propositionContainer}>
            <div className={styles.propositionBlock}>
                <h3 className={styles.propositionTitle}>
                    Explore Our <br/>
                    Product Categories
                </h3>
                <p className={styles.propositionText}>
                    Discover our wide range of vape pens, edibles,<br/>
                    compatible batteries, and much more 
                </p>
                <span>
                    <Link className={styles.propositionLink} to='/shop'>
                        Shop
                    </Link>
                </span>
            </div>
            <div className={styles.propositionBlock}>
                <h3 className={styles.propositionTitle}>
                    Find Your Perfect<br/> 
                    Vape Pen
                </h3>
                <p className={styles.propositionText}>
                    Experience smooth and flavorful vaping with our<br/>
                    high-quality vape pens. 
                </p>
                <span>
                    <Link className={styles.propositionLink} to='/shop'>
                        Shop
                    </Link>
                </span>
            </div>
            <div className={styles.propositionBlock}>
                <h3 className={styles.propositionTitle}>
                    Indulge in<br/>
                    Delicious Edibles
                </h3>
                <p className={styles.propositionText}>
                    Satisfy your cravings with our delectable range of<br/>
                    CBD-infused gummies and chocolates. 
                </p>
                <span>
                    <Link className={styles.propositionLink} to='/shop'>
                        Shop
                    </Link>
                </span>
            </div>
        </section>
        <section className={styles.qualityContainer}>
            <article className={styles.qualityTextContent}>
                <span className={styles.qualityTextHead}>
                    Quality Guaranteed 
                </span>
                <h1 className={styles.qualityTitle}>
                    Experience the Benefits of <br/>
                    Astra's Premium CBD
                </h1>
                <p className={styles.qualityText}>
                    At Astra, we are committed to providing the highest quality CBD and <br/>
                    infused  products. Our vape pens come in a variety of flavors and are <br/>
                    paired with compatible batteries for a seamless experience. Indulge <br/>
                    in our delicious edibles, including Gummies and Chocolates. We also <br/>
                    offer a range of merchandise to show off your love for Astra.<br/>
                    <br/>
                    Sign up for our email list to stay updated on our latest products and<br/>
                    promotions.
                </p>
                <ul className={styles.qualityUl}>
                    <li className={styles.qualityList}>
                        <img className={styles.listQualityImage} height={16} width={16} src='../../../images/icon-cube.svg' alt='cube' /> Premium CBD Vape Pens in a Variety of Flavors
                    </li>
                    <li className={styles.qualityList}>
                        <img className={styles.listQualityImage} height={16} width={16} src='../../../images/icon-cube.svg' alt='cube' /> Delicious CBD Edibles for a Tasty Treat
                    </li>
                    <li className={styles.qualityList}>
                        <img className={styles.listQualityImage} height={16} width={16} src='../../../images/icon-cube.svg' alt='cube' /> Show off your love for Astra with our Merchandise
                    </li>
                </ul>
                <div>
                    <Link className={styles.qualityLink} to='shop'>
                        Shop
                    </Link>
                </div>
            </article>
            <img className={styles.qualityImage} width={616} height={640} src='../../../images/astra-vape-stick.jpg' alt='logo' />
        </section>
        <section className={styles.raitingContainer}>
            <img width={616} height={640} src='../../../images/space-circle.jpg' alt='space'/>
            <article className={styles.raitingTextContent}>
                <div className={styles.raitingBlock}>
                    <img width={20} height={19} src='../../../images/start-vector.svg' alt='star' />
                    <img width={20} height={19} src='../../../images/start-vector.svg' alt='star' />
                    <img width={20} height={19} src='../../../images/start-vector.svg' alt='star' />
                    <img width={20} height={19} src='../../../images/start-vector.svg' alt='star' />
                    <img width={20} height={19} src='../../../images/start-vector.svg' alt='star' />
                </div>
                <p className={styles.raitingDescription}>
                Our experience with Astra has been nothing short of <br/>
                amazing. Their CBD products have helped us improve <br/>
                our overall well-being and have become a staple in <br/>
                our daily routine. We highly recommend Astra to any <br/>
                B2B customer or partner looking for high-quality CBD <br/>
                products. Example
                </p>
                <div className={styles.creatorBlock}>
                    <div className={styles.itemBlock}>
                        <p className={styles.itemText}>
                            John Doe
                        </p>
                        <p className={styles.itemText}>
                            CEO, XYZ Corp
                        </p>
                    </div>
                    <span className={styles.divider}></span>
                    <img width={120} height={48} src='../../../images/web-flow-icon.svg'  alt='webflow'/>
                </div>
            </article>
        </section>
    </main>
  )
}

export default HomeContent