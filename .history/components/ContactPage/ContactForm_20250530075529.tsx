"use client";

import React, {useRef} from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from 'next/image'
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/ContactPage/contactform.module.scss"

const ContactForm = () => {
  return (
    <div className={`sectioner ${styles.cf__section}`}>
      <div className={`containerr3 ${styles.cf__container}`}>
        <div className={styles.cf__wrapper}>
          <div className={styles.cf__hero}>

          </div>
          <div className={styles.cf__form}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm