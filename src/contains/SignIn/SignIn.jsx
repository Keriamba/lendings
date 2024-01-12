import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/ui-components/slider/Slider';
import HeaderType2 from '../../components/headerType2/HeaderType2';
import styles from './signin.module.scss';
import FooterType2 from '../../components/footerType2/FooterType2';


function SignIn() {
  return (
    <>
    <HeaderType2 />
    <main className={styles.signInContentContainer}>
        <section className={styles.signInHeadContainer}>
            <span className={styles.explore}>
                Explore
            </span>
            <h1 className={styles.signInHeadTitle}>
                Sign in to your account
            </h1>
            <p className={styles.signInHeadDescription}>
                Discover the out-of-this-world CBD products from Astra, the best space-themed CBD <br/>
                and cannabiniod infusion company 
            </p>
            <div className={styles.headButtonBlock}>
                <a className={styles.learnMore} href="#">Learn more</a>
                <Link className={styles.signUp} to='/sign-up'>Sign up</Link>
            </div>
        </section>
        <section className={styles.ContentContainer}>
            <Slider sliderTitle="Create an account" backgroundColor='#93A3B4' defaultImage={0} images={['../../../../images/ASTRA-LOGO-BIG.svg', '../../../images/astra-vape-stick.jpg', '../../../images/candies-8288760_640.jpg']}/>
            <article className={styles.formContentContainer}>
                <div className={styles.logoBlock}>
                    <img src="../../../images/circle-logo.svg" alt="circle logo" />
                    <span className={styles.astra}>Astra</span>
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.signInTextTitle}>
                        Sign in
                    </span>
                    <p className={styles.signInText}>
                        Sign in to your account to view your cart, check order progress, and much more!
                    </p>
                </div>
                <form className={styles.formContainer}>
                    <section className={styles.fieldsContainer}>
                        <label className={styles.fieldItem}>
                            <span className={styles.signInText}>Email</span>
                            <input className={styles.input}  type="email" />
                        </label>
                        <label className={styles.fieldItem}>
                            <span className={styles.signInText}>Password</span>
                            <input className={styles.input}  type="password" />
                        </label>
                        </section>
                    <div className={styles.checkboxBlockContainer}>
                    <section className={styles.checkBoxContainer}>
                        <div className={styles.checkBoxItem}>
                            <input className={styles.checkBoxInput} type="checkbox" /><span>Remember me</span>
                        </div>
                        <div className={styles.checkBoxItem}>
                            <input className={styles.checkBoxInput} type="checkbox" />
                            <span className={styles.signInText}>I agree to all the <a className={styles.customLink} href="#">Terms</a> and <a className={styles.customLink} href="#">Privacy policy</a> </span>
                        </div>
                    </section>
                    <a className={styles.forgotPasswordLink} href="#">Forgot password?</a>
                    </div>
                    <section className={styles.buttonBlock}>
                       <button className={styles.SignIn} to='/'>Sign in</button>
                       <button className={styles.SignUpWithGoogle}>
                        <img className={styles.googleLogo} width={11} height={11} src='../../../images/googe-icon.svg' alt='google-logo' />
                        Sign in with google
                       </button>
                    </section>
                    <div className={styles.createAccountBlock}>
                    <span className={styles.signInText}>
                        Don’t have an account? <Link className={styles.customLink} to={'/sign-up'}>Sign-up</Link>
                    </span>
                    </div>
                </form>
                <div className={styles.downloadAppButtons}>
              <a href="#">
                <img width={95} height={28} src='../../../images/googlePlayButton.svg' alt='google play'/>
              </a>
              <a href="#">
                <img width={95} height={28} src='../../../images/appStoreButton.svg' alt='google play'/>
              </a>
            </div>
            </article>
        </section>
    </main>
    <FooterType2 />
    </>
  )
};

export default SignIn;

