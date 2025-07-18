"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ContactPage/checkbox.module.scss";

interface CheckData{
  name: string;
  slug: string;
}

const ContactCheck = ({data}: {data: CheckData}) => {
  const [activeCheck, setActiveCheck] = useState(false)

  return (
    <div className={styles.checkbox__wrap}>
      <div className={styles.checker} onClick={() => setAc}>
        <div className={styles.checkconfirm}>
          <Icon icon="ri:check-line" className={styles.check__icon} />
        </div>
      </div>
      <span className={styles.check__text}>{data.name}</span>
    </div>
  );
};

export default ContactCheck;
