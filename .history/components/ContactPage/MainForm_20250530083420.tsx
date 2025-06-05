"use client";

import React, {useRef, useState, useEffect} from 'react'
import styles from "../../styles/ContactPage/mainform.module.scss"

const MainForm = () => {
  const [buttonText, setButtonText] = useState("Apply to speak");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className={styles.form__wrapper}>
      <form ref={formRef} className={styles.form}>
        <div className={styles.form__top}>
          <div className={styles.form_}>

          </div>
        </div>
      </form>
    </div>
  )
}

export default MainForm