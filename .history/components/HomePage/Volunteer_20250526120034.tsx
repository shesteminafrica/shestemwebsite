"use client";

import React from "react";
import Image from "next/image";
import MainButton from "../ReUsables/MainButton";
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/HomePage/volunteer.module.scss";

const Volunteer = () => {
  return (
    <div className={`sectioner ${styles.volunteer__section}`}>
      <div className={`containerr2 ${styles.volunteer__container}`}>
        <div className={styles.volunteer__wrapper}>
          <div className={styles.volunteer__content}>
            <div className={`containerr3 ${styles.volunteer__containerr}`}>
              <div className={styles.v__left}>
                <h2 className={styles.vl__h2}>Call</h2>
              </div>
              <div className={styles.v__right}>

              </div>
            </div>
          </div>
          <div className={styles.volunteer__imagegradient}>
            <div className={styles.v__image}>
              <Image fill quality={100} src={IMAGE} alt="Volunteer She STEMin Africa"/>
            </div>
            <div className={styles.v__gradient}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
