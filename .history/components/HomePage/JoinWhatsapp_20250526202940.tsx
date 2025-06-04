import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/HomePage/joinwhatsapp.module.scss"

const JoinWhatsapp = () => {
  return (
    <div className={`sectioner ${styles.jw__section}`}>
      <div className={`containerr ${styles.jw__container}`}>
        <div className={styles.jw__wrapper}>
          <div className={styles.jww__content}>
            <h2 className={styles.jw__h2}>Join Us</h2>
            <p className={styles.jw__p}>We’ve created a whatsApp group where we bring together all our STEM girls and women to provide them with tailor-made support according to their needs</p>
            <div class>

            </div>
          </div>
          <div className={styles.jww__background}>
            <div className={styles.jwb__overlay}>

            </div>
            <div className={styles.jwb__image}>
              <Image fill quality={100} src={IMAGE} alt="Join us"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinWhatsapp