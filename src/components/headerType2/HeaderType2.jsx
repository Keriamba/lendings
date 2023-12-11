import React from 'react'
import styles from './header.module.scss'
const HeaderType2 = () => {

  return (
    <header className={styles.header_container}>
        <img src='../../../images/ASTRA-LOGO-TYPE2.svg' />

        <div className={styles.button_wrapper}>
            <a>Home</a>
            <a>Shop</a>
            <a>Subscribe</a>
        </div>
    </header>
  )
}

export default HeaderType2