"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/ReUsables/activitycard.module.scss";

const ActivityCard = () => {
  return (
    <div className={styles.activitycard}>
      <div className={styles.ac__left}>
        <Image fill quality={100} src={IMAGE} alt="activity image" />
      </div>
      <div className={styles.ac__right}>
        <h2 className={styles.ac__h2}>Networking</h2>
        <div className={styles.ac__points}>
          <div className={styles.ac__point}>
            <span className={styles.ac__icon}>
              <Icon icon="healthicons:calendar-outline" />
            </span>
            <span className={styles.ac__}>Close access to an outstanding STEM network</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
