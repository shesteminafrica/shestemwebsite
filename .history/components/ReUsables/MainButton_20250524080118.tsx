import React from 'react'
import styles from "../../styles/ReUsables/mainbutton.module.scss"

const MainButton = () => {
  return (
    <div className={styles.button__wrapper}>
      <div className={styles.button__content}>
        <span>Contactez nous</span>
        <div className={styles.button_}>

        </div>
      </div>
    </div>
  )
}

export default MainButton