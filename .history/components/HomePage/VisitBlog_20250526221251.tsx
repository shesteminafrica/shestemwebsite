"use client";

import React, { useRef } from "react";
import Image from "next/image";
import MainButton from "../ReUsables/MainButton";
import IMAGE from "../../public/images/homehero.jpg";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/HomePage/joinwhatsapp.module.scss";

const VisitBlog = () => {
  const blogData = {
    name: "Visit our blog",
    link: "/blog",
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

  //Parallax For Image
  const container = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scroll1, [0, 1], [-150, 0]);

  return (
    <div className={`sectioner ${styles.jw__section}`}>
      <div className={`containerr ${styles.jw__container}`}>
        <div className={styles.jw__wrapper2} ref={container}>
          <div className={styles.jww__content}>
            <p className={styles.jw__h3}>
              Find out more about the STEM challenges Africa
              and African women are facing, please visit our blog by clicking on
              the link below.
            </p>
            <div className={styles.jw__buttons}>
              <MainButton buttonprops={blogData} />
            </div>
          </div>
          <motion.div className={styles.jww__background} style={{ y }}>
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

export default VisitBlog;
