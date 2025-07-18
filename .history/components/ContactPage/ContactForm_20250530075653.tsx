"use client";

import React, {useRef} from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from 'next/image'
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/ContactPage/contactform.module.scss"

const ContactForm = () => {
  //Parallax For Image
  const container = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: container,

    offset: ["start 106px", "end 106px"],
  });

  const y = useTransform(scroll1, [0, 1], [-100, 0]);

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