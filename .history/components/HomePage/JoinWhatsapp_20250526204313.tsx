"use client";

import React from "react";
import Image from "next/image";
import MainButton from "../ReUsables/MainButton";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/HomePage/joinwhatsapp.module.scss";

const JoinWhatsapp = () => {
  const whatsappData = {
    name: "Join our whatsapp group",
    link: "https://chat.whatsapp.com/I6s4sRNHdy8BqxE3iMsjPg",
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

  const joinusData = {
    name: "Discover our programs",
    link: "/events",
    background: "transparent",
    text: "#ffffff",
    round: "#ffffff",
    border: "1px solid #ffffff",
    arrow: "var(--pink)",
    hovBack: "#ffffff",
    hovText: "var(--pink)",
    hovBorder: "1px solid transparent",
    hovRound: "var(--pink)",
    hovArrow: "#ffffff",
  };
  return (
    <div className={`sectioner ${styles.jw__section}`}>
      <div className={`containerr ${styles.jw__container}`}>
        <div className={styles.jw__wrapper}>
          <div className={styles.jww__content}>
            <h2 className={styles.jw__h2}>Join Us</h2>
            <p className={styles.jw__p}>
              We’ve created a whatsApp group where we bring together all our
              STEM girls and women to provide them with tailor-made support
              according to their needs
            </p>
            <div className={styles.jw__buttons}>
              <MainButton buttonprops={whatsappData} />
              <MainButton buttonprops={joinusData} />
            </div>
          </div>
          <div className={styles.jww__background}>
            <div className={styles.jwb__overlay}></div>
            <div className={styles.jwb__image}>
              <Image fill quality={100} src={IMAGE} alt="Join us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWhatsapp;
