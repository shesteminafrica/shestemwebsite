import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import STARS from "../../public/svg/stars.svg"
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
            <div className={styles.hc__event}>
              <div className={styles.truncate}>
                <p>meetup to share experiences about exploring more STEM opportunities abroad.</p>
              </div>
              <Link href="/event" className={styles.event__link}>
                Next Event
              </Link>
              <div className={styles.twinkling}>
                <Image/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero