import React from 'react'
import styles from './content.module.scss'
const HomeContent = () => {
  return (
    <main>
    <section className={styles.content_head_container}>
        <div className={styles.text_content_wrapper}>
            <h1>
                Discover the Cosmic Benefits of Astra
            </h1>
            <p>
                Journey beyond the ordinary with Astra's premium CBD. Our<br/>
                 unique formula harnesses the power of the cosmos to deliver a <br/>
                 therapeutic experience unlike any other.
            </p>
            <section className={styles.button_block}>
                <button>
                <img src='../../../images/shop_button.svg' />
                </button>
                <a href='#'>Learn more</a>
            </section>
        </div>
        <img src='../../../images/image-PhotoRoom.png-PhotoRoom.png' />
    </section>
    <section className={styles.content_explore_container}>
        <div className={styles.content_explore_wrapper}>
            <section className={styles.text_content_explore}>
                <p className={styles.explore}>
                    Explore
                </p>
                <h1>
                    Discover the Out-of-this-World CBD Experience
                </h1>
                <p>
                    Immerse yourself in the celestial embrace of Astra's CBD. A universe
                     of relaxation, relief, and rejuvenation awaits you.
                </p>
                <ul>
                    <li>
                        Pure and Potent: Sourced from the finest organic farms, our CBD is
                         100% pure and rigorously tested for quality.
                    </li>
                    <li>
                        Unparalleled Experience: With Astra, you don't just consume CBD- you experience it. Dive into the cosmic wonder with every drop.
                    </li>
                    <li>
                        Trusted and Safe: Your well-being is our top priority. Astra's CBD is
                         free from harmful additives and meets the highest safety
                         <br/> standards.
                    </li>
                </ul>
                <section className={styles.text_addition_container}>
                    <div className={styles.text_addition_item}>
                        <h3>
                            Vape Pens
                        </h3>
                        <p>
                            Experience the smooth flavors of our 
                            <br/> CBD vape pens, available in a variety
                            <br/> of galactic flavors.
                        </p>
                    </div>
                    <div className={styles.text_addition_item}>
                        <h3>
                            Edibles
                        </h3>
                        <p>
                            Indulge your taste buds with our CBD infused gummies and chocolates,<br/>
                             crafted for an otherworldly delight.
                        </p>
                    </div>
                </section>
                <section className={styles.content_explore_button_block}>
                    <button>
                        Shop
                    </button>
                    <a href='#'>Learn more <img src='../../../images/icon-cube.svg' /></a>
                </section>
            </section>
            <section className={styles.img_content_explore}>
                <img src='../../../images/item_candys.png' />
            </section>
        </div>
    </section>
    <section className={styles.proposition_container}>
        <div className={styles.proposition_item_block}>
            <h3>
                Explore Our <br />
                 Product Categories
            </h3>
            <p>
                Discover our wide range of vape pens, edibles,<br/>
                 compatible batteries, and much more
            </p>
            <button>Shop</button>
        </div>
        <div className={styles.proposition_item_block}>
            <h3>
            Find Your Perfect<br/>
             Vape Pen
            </h3>
            <p>
            Experience smooth and flavorful vaping with our<br/>
             high-quality vape pens.
            </p>
            <button>Shop</button>
        </div>
        <div className={styles.proposition_item_block}>
            <h3>
                Indulge in<br/>
                 Delicious Edibles
            </h3>
            <p>
                Satisfy your cravings with our delectable range of<br/>
                 CBD-infused gummies and chocolates.
            </p>
            <button>Shop</button>
        </div>
    </section>
    <section className={styles.quality_block_container}>
        <div className={styles.quality_text_content_container}>
            <p className={styles.qualuity}>
                Quality Guaranteed 
            </p>
            <h1>
                Experience the Benefits of<br/>
                 Astra's Premium CBD
            </h1>
            <p>
                At Astra, we are committed to providing the highest quality CBD and<br/>
                 infused  products. Our vape pens come in a variety of flavors and are <br/>
                 paired with compatible batteries for a seamless experience. Indulge<br/>
                 in our delicious edibles, including Gummies and Chocolates. We also<br/>
                 offer a range of merchandise to show off your love for Astra.
            </p>
            <p>
                Sign up for our email list to stay updated on our latest products and<br/> promotions.
            </p>
            <div className={styles.proposition_list_wrapper}>
                <ul>
                    <li>
                     <img src='../../../images/icon-cube.svg'/> Premium CBD Vape Pens in a Variety of Flavors
                    </li>
                    <li>
                     <img src='../../../images/icon-cube.svg'/>  Delicious CBD Edibles for a Tasty Treat
                    </li>
                    <li>
                     <img src='../../../images/icon-cube.svg'/>  Show off your love for Astra with our Merchandise
                    </li>
                </ul>
            </div>
            <button>Shop</button>
        </div>
        <img src='../../../images/astra-vape-stick.jpg' />
    </section>
    <section className={styles.raiting_container}>
        <img src='../../../images/space-circle.jpg' />
        <div className={styles.raiting_text_container}>
            <div>
            <img src='../../../images/start-vector.svg' />
            <img src='../../../images/start-vector.svg' />
            <img src='../../../images/start-vector.svg' />
            <img src='../../../images/start-vector.svg' />
            <img src='../../../images/start-vector.svg' />
            </div>

            <p>
            Our experience with Astra has been nothing short of<br/>
             amazing. Their CBD products have helped us improve<br/>
              our overall well-being and have become a staple in<br/>
               our daily routine. We highly recommend Astra to any<br/>
                B2B customer or partner looking for high-quality CBD<br/>
                 products. Example
            </p>
            <section className={styles.label_container}>
                <div className={styles.name_block}>
                    <p>
                        John Doe
                    </p>
                    <p>
                        CEO, XYZ Corp
                    </p>
                </div>
                <span className={styles.line}></span>
                <img src='../../../images/web-flow-icon.svg' />
            </section>
        </div>
    </section>
    </main>
  )
}

export default HomeContent