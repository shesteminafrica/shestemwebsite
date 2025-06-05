"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/mainbutton.module.scss"

const MainButton = () => {
  //Check if button has been hovered
  const [activeButton, setActiveButton] = useState(false);

  return (
    <Link href="/" className={styles.button__wrapper} onMouseEnter={() => setActiveButton(true)}>
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