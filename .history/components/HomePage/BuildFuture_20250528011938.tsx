"use client";

import React, { useState } from "react";
import Image from "next/image";
import AgendaA
import IMAGE from "../../public/images/homehero.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { BuildFutureData } from "@/utils";
import MainButton from "../ReUsables/MainButton";
import styles from "../../styles/HomePage/buildfuture.module.scss";

const BuildFuture = () => {
  const mainButtonData = {
    name: "View all articles",
    link: "/blog",
    background: "#f5f5f5",
    text: "#000000",
    border: "1px solid rgba(0,0,0,0.5)",
    arrow: "white",
    round: "var(--pink)",
    hovBack: "var(--pink)",
    hovText: "#ffffff",
    hovRound: "#ffffff",
    hovBorder: "1px solid transparent",
    hovArrow: "var(--pink)",
  };

  const [activeSelector, setActiveSelector] = useState(0);


  const mainButton2Data = {
    name: "Read article",
    link: BuildFutureData[activeSelector].link,
    background: "var(--pink)",
    text: "#ffffff",
    round: "#ffffff",
    border: "1px solid transparent",
    arrow: "var(--pink)",
    hovBack: "#ffffff",
    hovText: "var(--pink)",
    hovBorder: "1px solid var(--pink)",
    hovArrow: "white",
    hovRound: "var(--pink)",
  };

  return (
    <div className={`sectioner ${styles.bf__section}`}>
      <div className={`containerr ${styles.bf__container}`}>
        <div className={styles.bf__header}>
          <h2 className={styles.bf__h2}>Build your future</h2>
          <MainButton buttonprops={mainButtonData} />
        </div>
        <div className={styles.bf__content}>
          <div className={styles.bf__selector}>
            <div className={styles.bfs__swiper}>
              {BuildFutureData.map((data, i) => (
                <span
                  key={i}
                  className={`${styles.bfs__button} ${
                    activeSelector === i ? styles.active : ""
                  }`}
                  onClick={() => setActiveSelector(i)}
                >
                  {data.subtitle}
                </span>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              variants={agendaAnimation}
              initial="initial"
              animate="enter"
              exit="closed"
              className={`${styles.bf__modal}`}
              key={activeSelector}
            >
              <div className={styles.bfm__left}>
                <h3 className={styles.bfm__h3}>
                  {BuildFutureData[activeSelector].title}
                </h3>
                <p className={styles.bfm__p}>
                  {BuildFutureData[activeSelector].text}
                </p>
                <MainButton buttonprops={mainButton2Data} />
              </div>
              <div className={styles.bfm__right}>
                <div className={styles.bfm__image}>
                  <Image fill quality={100} alt="Image" src={IMAGE} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BuildFuture;
