"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/mainbutton.module.scss";

interface ButtonProps{
  name: string;
  link: string;
  background: string;
  text: string;
  border: string;
  hovBack: string;
  hovText: string;
  hovBorder: string;
}

const MainButton = ({buttonprops}: {buttonprops: ButtonProps}) => {
  //Check if button has been hovered
  const [activeButton, setActiveButton] = useState(false);

  return (
    <Link
      href={buttonprops.link}
      className={styles.button__wrapper}
      onMouseEnter={() => setActiveButton(true)}
      onMouseLeave={() => setActiveButton(false)}
    >
      <div className={styles.button__content}>
        <span>{buttonprops.}</span>
        <div className={styles.button__round}>
          <span className={styles.button__icon}></span>
        </div>
      </div>
    </Link>
  );
};

export default MainButton;
