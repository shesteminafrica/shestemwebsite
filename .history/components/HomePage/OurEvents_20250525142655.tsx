import React from 'react'
import MainButton from '../ReUsables/MainButton'
import styles from "../../styles/HomePage/ourevents.module.scss"

const OurEvents = () => {
  return (
    <div className={`sectioner ${styles.event__section}`}>
      <div className={`containerr ${styles.event__container}`}>
        <div className={styles.event__header}>
          <h2>Our events</h2>
        </div>
      </div>
      <div className={styles.swiper__controls}>

      </div>
    </div>
  )
}

export default OurEvents