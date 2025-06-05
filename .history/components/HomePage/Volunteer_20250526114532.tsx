"use client";

import React from "react";
import Image from "next/image";
import IMAGE from "../../"
import styles from "../../styles/HomePage/volunteer.module.scss";

const Volunteer = () => {
  return (
    <div className={`sectioner ${styles.volunteer__section}`}>
      <div className={`containerr2 ${styles.volunteer__container}`}>
        <div className={styles.volunteer__wrapper}>
          <div className={styles.volunteer__content}>
            <div className={`containerr3 ${styles.volunteer__containerr}`}></div>
          </div>
          <div className={styles.volunteer__imagegradient}></div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
