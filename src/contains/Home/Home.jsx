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
    </>
  )
}

export default Home