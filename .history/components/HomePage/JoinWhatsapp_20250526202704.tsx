import React from 'react'
import Image from 'next/image'
import IMAGE from "../../"
import styles from "../../styles/HomePage/joinwhatsapp.module.scss"

const JoinWhatsapp = () => {
  return (
    <div className={`sectioner ${styles.jw__section}`}>
      <div className={`containerr ${styles.jw__container}`}>
        <div className={styles.jw__wrapper}>
          <div className={styles.jww__content}>

          </div>
          <div className={styles.jww__background}>
            <div className={styles.jwb__overlay}>

            </div>
            <div className={styles.jwb__image}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinWhatsapp