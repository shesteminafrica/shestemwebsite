"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MainButton from "./MainButton";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/ReUsables/activitycard.module.scss";

const ActivityCard = () => {
  const mainButtonData = {
    name: "Contact us",
    link: "/contact",
    background: "var(--pink)",
    text: "#ffffff",
    hovRound: "#ffffff",
    hovBorder: "1px solid transparent",
    hovArrow: "var(--pink)",
  };


  const mainButtoenData = {
    name: "Contact us",
    link: "/contact",
    background: "#f5f5f5",
    text: "var(--pink)",
    border: "1px solid var(--pink)",
    arrow: "white",
    round: "var(--pink)",
    hovBack: "var(--pink)",
    hovText: "#f5f5f5",
    hovRound: "#f5f5f5",
    hovBorder: "1px solid transparent",
    hovArrow: "var(--pink)",
  };

  return (
    <div className={styles.activitycard}>
      <div className={styles.ac__left}>
        <Image fill quality={100} src={IMAGE} alt="activity image" />
      </div>
      <div className={styles.ac__right}>
        <h2 className={styles.ac__h2}>Networking</h2>
        <div className={styles.ac__points}>
          <div className={styles.ac__point}>
            <Icon
              icon="teenyicons:tick-circle-solid"
              className={styles.ac__icon}
            />
            <span className={styles.ac__span}>
              Close access to an outstanding STEM network
            </span>
          </div>
          <div className={styles.ac__point}>
            <Icon
              icon="teenyicons:tick-circle-solid"
              className={styles.ac__icon}
            />
            <span className={styles.ac__span}>
              Close access to an outstanding STEM network
            </span>
          </div>
        </div>
        <MainButton buttonprops={mainButtonData} />
      </div>
    </div>
  );
};

export default ActivityCard;
