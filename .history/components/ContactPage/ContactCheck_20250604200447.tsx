"use client";

import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ContactPage/checkbox.module.scss";

interface CheckData{
  name: string;
  slug: string;
}

const ContactCheck = ({data}: {data: CheckData}) => {
  return (
    <div className={styles.checkbox__wrap}>
      <div className={styles.checker}>
        <div className={styles.checkconfirm}>
          <Icon icon="ri:check-line" className={styles.check__icon} />
        </div>
      </div>
      <span className={styles.check__text}>Search for funding</span>
    </div>
  );
};

export default ContactCheck;
