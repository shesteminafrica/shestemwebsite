"use client";

import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/mainbutton.module.scss"

const MainButton = () => {
  return (
    <Link href="/" className={styles.button__wrapper}>
      <div className={styles.button__content}>
        <span>Contactez nous</span>
        <div className={styles.button__round}>
          <span className={styles.button__icon}>

          </span>
        </div>
      </div>
    </Link>
  )
}

export default MainButton