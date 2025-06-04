import React from "react";
import Image from "next/image";
import styles from "../../styles/HomePage/donate.module.scss";

const Donate = () => {
  return (
    <div className={`sectioner ${styles.donate__section}`}>
      <div className={`containerr2 ${styles.donate__container}`}>
        <div className={styles.donate__wrapper}>
          <div className={styles.donate__content}>
            <div className={`containerr3 ${styles.donate__containerr}`}></div>
          </div>
          <div className={styles.donate__imagegradient}></div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
