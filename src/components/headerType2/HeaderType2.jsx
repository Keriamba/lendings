import React from 'react'
import styles from './header.module.scss'
const HeaderType2 = () => {

  return (
    <header className={styles.header_container}>
        <a href='#'>
          <img width={204} height={83} src='../../../images/ASTRA-LOGO-TYPE2.svg' alt='logo' />
        </a>
        <div className={styles.button_wrapper}>
            <a href='#'>Home</a>
            <a href='#'>Shop</a>
            <a href='#'>Subscribe</a>
        </div>
    </header>
  )
}

export default HeaderType2