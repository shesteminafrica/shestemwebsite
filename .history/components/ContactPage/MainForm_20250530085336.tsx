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

  const firsttwo = ContactFormFields.slice(0, 2); // Gets the first 2 items
  const lastTwo = ContactFormFields.slice(2, 4); // Gets the next 2 items
  const textArea = ContactFormFields[4]; //Get the last


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