import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/mainbutton.module.scss"

const MainButton = () => {
  return (
    <div className={styles.button__wrapper}>
      <div className={styles.button__content}>
        <span>Contactez nous</span>
        <div className={styles.button__round}>
          <span className={styles.button__icon}>

          </span>
        </div>
      </div>
    </div>
  )
}

export default MainButton