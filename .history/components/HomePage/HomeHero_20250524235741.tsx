import React from 'react'
import Image from 'next/image'
import HERO from "../../public/images/homehero.jpg"
import styles from "../../styles/HomePage/homehero.module.scss"

const HomeHero = () => {
  return (
    <div className={styles.hhero__section}>
      <div className={styles.backimage__parallax}>
        <div className={styles.back__gradient}></div>
        <div className={styles.back__image}>
          <Image fill quality={100} alt='She STEMin Africa' src={HERO}/>
        </div>
      </div>
      <div className={styles.hero__content}>
        <div className={`container ${styles.hc__container}`}>
          <div className={styles.hc__main}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero