import React from 'react'
import styles from './signup.module.scss'
import HeaderType2 from '../../components/headerType2/HeaderType2'
import Slider from '../../components/ui-components/slider/Slider'
const SignUp = () => {
  return (
    <div className={styles.signup_container}>
      <HeaderType2 />
      <section className={styles.content_container} >
        <aside>
        <Slider />
        </aside>
        <section className={styles.form_content_container}>
          <div className={styles.logo_block}>
            <img src='../../../images/circle-logo.svg' />
            <span>
              Astra
            </span>
          </div>
          <h2>
            Create account
          </h2>
          <p>
            Customer accounts
          </p>
          <form>
          <div className={styles.form_fields}>
            <div>
              <span>Email</span>
              <input className={styles.field_input} type="text" />
            </div>

            <input className={styles.field_input} type="text" />
            <input className={styles.field_input} type="text" />
            <input className={styles.field_input} type="text" />
          </div>
        </form>
        </section>
      </section>
    </div>
  )
}

export default SignUp