import React from 'react'
import styles from './signup.module.scss'
import HeaderType2 from '../../components/headerType2/HeaderType2'
import Slider from '../../components/ui-components/slider/Slider'
import {Link} from 'react-router-dom'
import FooterType2 from '../../components/footerType2/FooterType2'
const SignUp = () => {
  return (
    <main>
      <HeaderType2 />
      <div className={styles.signupContainer}>
      <section className={styles.contentContainer}>
        <aside>
        <Slider sliderTitle="Create an account" backgroundColor='#93A3B4' defaultImage={0} images={['../../../../images/ASTRA-LOGO-BIG.svg', '../../../images/astra-vape-stick.jpg', '../../../images/candies-8288760_640.jpg']}/>
        </aside>
        <section className={styles.formContentContainer}>
          <div className={styles.logoBlock}>
            <img width={31} height={33} src='../../../images/circle-logo.svg' alt='logo-circle' />
            <span>
              Astra
            </span>
          </div>
          <div className={styles.headForm}>
            <h3 className={styles.headFormTitle}>
              Create account
            </h3>
            <p className={styles.headFormDescription}>
              Customer accounts
            </p>
          </div>
          <form >
              <section className={styles.formFields}>
                  <div className={styles.fieldItem}>
                    <span>Email</span>
                    <input className={styles.field_input} type="text" />
                  </div>
                  <div className={styles.fieldItem}>
                    <span>Email</span>
                    <input className={styles.field_input} type="text" />
                  </div>
                  <div className={styles.fieldItem}>
                    <span>Email</span>
                    <input className={styles.field_input} type="text" />
                  </div>
                  <div className={styles.fieldItem}>
                    <span>Email</span>
                    <input className={styles.field_input} type="text" />
                </div>
              </section>
              <div className={styles.buttonBlock}>
                <section className={styles.checkBoxContainer}>
                <div className={styles.checkBoxWrapper}>
                  <input type='checkbox' /> remember Me
                </div>
                <div className={styles.checkBoxWrapper}>
                  <input type='checkbox' /> I agree to all the <a className={styles.customLink} href='#'>Terms</a> and <a href='#'> Privacy policy</a>
                </div>
              </section>
              <a className={styles.forgotPassword} href='#'>Forgot password?</a>
              <button className={styles.SignUp} type='submit'>
                Create account
              </button>
              <button className={styles.SignUpWithGoogle}>
               <img width={14} height={14} src='../../../images/googe-icon.svg'  alt='google-icon'/> Sign-in with google
              </button>
              </div>
            </form>
            <div className={styles.haveAccount}>
              <span>
                 Have account?
              </span>
              <Link className={styles.customLink} to='/sign-in'>Log In</Link>
            </div>
            <div className={styles.downloadAppButtons}>
              <a href="#">
                <img width={95} height={28} src='../../../images/googlePlayButton.svg' alt='google play'/>
              </a>
              <a href="#">
                <img width={95} height={28} src='../../../images/appStoreButton.svg' alt='google play'/>
              </a>
            </div>
        </section>
      </section>
    </div>
    <FooterType2 />
    </main>

  )
}

export default SignUp