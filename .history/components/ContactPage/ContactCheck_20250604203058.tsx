"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ContactPage/checkbox.module.scss";

interface CheckData{
  name: string;
  slug: string;
}

interface ContactCheckProps {
  data: CheckData;
  active: boolean;
  onToggle: (service: CheckData, isActive: boolean) => void;
}

const ContactCheck = ({content}: {content: ContactCheckProps}) => {
  const [activeCheck, setActiveCheck] = useState(false)

  return (
    <div className={styles.checkbox__wrap}>
      <div className={styles.checker} onClick={() => setActiveCheck(!activeCheck)}>
        <div className={`${styles.checkconfirm} ${activeCheck ? styles.activeCheck : ""}`}>
          <Icon icon="ri:check-line" className={styles.check__icon} />
        </div>
      </div>
      <span className={styles.check__text}>{content.name}</span>
    </div>
  );
};

export default ContactCheck;
