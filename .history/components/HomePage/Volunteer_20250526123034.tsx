"use client";

import React from "react";
import Image from "next/image";
import MainButton from "../ReUsables/MainButton";
import 
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/HomePage/volunteer.module.scss";

const Volunteer = () => {
  const mainButtonData = {
    name: "I volunteer",
    link: "/contact",
    background: "#ffffff",
    text: "var(--pink)",
    border: "1px solid transparent",
    round: "var(--pink)",
    arrow: "#ffffff",
    hovBack: "transparent",
    hovText: "#ffffff",
    hovRound: "#ffffff",
    hovBorder: "1px solid #ffffff",
    hovArrow: "var(--pink)",
  };

  return (
    <div className={`sectioner ${styles.volunteer__section}`}>
      <div className={`containerr2 ${styles.volunteer__container}`}>
        <div className={styles.volunteer__wrapper}>
          <div className={styles.volunteer__content}>
            <div className={`containerr3 ${styles.volunteer__containerr}`}>
              <div className={styles.v__left}>
                <h2 className={styles.vl__h2}>Call for volunteering</h2>
                <p className={styles.vl__p}>
                  Would you like to participate in empowering more African girls
                  and women in STEM through our association? Please contact us
                  by clicking on the link below
                </p>
                <MainButton buttonprops={mainButtonData} />
              </div>
              <div className={styles.v__right}></div>
            </div>
          </div>
          <div className={styles.volunteer__imagegradient}>
            <div className={styles.v__image}>
              <Image
                fill
                quality={100}
                src={IMAGE}
                alt="Volunteer She STEMin Africa"
              />
            </div>
            <div className={styles.v__gradient}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
