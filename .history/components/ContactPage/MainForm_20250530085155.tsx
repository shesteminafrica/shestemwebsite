"use client";

import React, {useRef, useState, useEffect} from 'react'
import { ContactFormFields } from '@/utils';
import styles from "../../styles/ContactPage/mainform.module.scss"

const MainForm = () => {
  const [buttonText, setButtonText] = useState("Apply to speak");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const firsttwo = SpeakerFormFields.slice(0, 2); // Gets the first 6 items
  const lastTwo = SpeakerFormFields.slice(,); // Gets the last 2 items
  const textArea = SpeakerFormFields[6];


  return (
    <div className={styles.form__wrapper}>
      <form ref={formRef} className={styles.form}>
        <div className={styles.form__top}>
          <div className={styles.form__box}>

          </div>
        </div>
      </form>
    </div>
  )
}

export default MainForm