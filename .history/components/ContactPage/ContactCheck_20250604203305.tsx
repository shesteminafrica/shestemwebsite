"use client";

import React from "react";
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

  const handleClick = () => {
    content.onToggle(content.data, !content.active);
  };

  return (
    <div className={styles.checkbox__wrap}>
      <div className={styles.checker} onClick={handleClick}>
        <div className={`${styles.checkconfirm} ${content.active ? styles.activeCheck : ""}`}>
          <Icon icon="ri:check-line" className={styles.check__icon} />
        </div>
      </div>
      <span className={styles.check__text}>{content.data.name}</span>
    </div>
  );
};

export default ContactCheck;
