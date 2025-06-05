"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/HomePage/donate.module.scss";

const Volunteer = () => {
  return (
    <div className={`sectioner ${styles.__section}`}>
      <div className={`containerr2 ${styles.__container}`}>
        <div className={styles.__wrapper}>
          <div className={styles.__content}>
            <div className={`containerr3 ${styles.__containerr}`}></div>
          </div>
          <div className={styles.__imagegradient}></div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
