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
          
        </div>
      </div>
    </div>
  )
}

export default HomeHero