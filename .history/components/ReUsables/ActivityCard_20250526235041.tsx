"use client";

import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MainButton from "./MainButton";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/ReUsables/activitycard.module.scss";

interface ActivityProps {
  name: string;
  image: StaticImageData;
  button: {
    name: string;
    link: string;
  };
  points: string[];
}

const ActivityCard = ({ data, keyId }: { data: ActivityProps, keyId: n }) => {
  const mainButtonData = {
    name: data.button.name,
    link: data.button.link,
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
    <div className={styles.activitycard}>
      <div className={styles.ac__left}>
        <Image fill quality={100} src={data.image} alt={data.name} />
      </div>
      <div className={styles.ac__right}>
        <h2 className={styles.ac__h2}>{data.name}</h2>
        <div className={styles.ac__points}>
          {data.points.map((item, i) => (
            <div className={styles.ac__point} key={i}>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={styles.ac__icon}
              />
              <span className={styles.ac__span}>{item}</span>
            </div>
          ))}
        </div>
        <MainButton buttonprops={mainButtonData} />
      </div>
    </div>
  );
};

export default ActivityCard;
