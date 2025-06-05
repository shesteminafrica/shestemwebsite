"use client";

import React, {useRef} from "react";
import Image from "next/image";
import MainButton from "../ReUsables/MainButton";
import IMAGE from "../../public/images/homehero.jpg";
import { useScroll, motion, useTransform } from "framer-motion";
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
    name: "Become a member",
    link: "/contact",
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

  //Parallax For Image
  const container = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scroll1, [0, 1], [-100, 0]);

  return (
    <div className={`sectioner ${styles.jw__section}`}>
      <div className={`containerr ${styles.jw__container}`}>
        <div className={styles.jw__wrapper} ref={container}>
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
          <motion.div className={styles.jww__background} style={{}}>
            <div className={styles.jwb__overlay}></div>
            <div className={styles.jwb__image}>
              <Image fill quality={100} src={IMAGE} alt="Join us" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinWhatsapp;
