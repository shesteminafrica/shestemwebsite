"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import styles from "../../styles/ReUsables/mainbutton.module.scss";

interface ButtonProps {
  name: string;
  link: string;
  background: string;
  text: string;
  border: string;
  hovBack: string;
  hovText: string;
  hovBorder: string;
}

const MainButton = ({ buttonprops }: { buttonprops: ButtonProps }) => {
  //Check if button has been hovered
  const [activeButton, setActiveButton] = useState(false);

  return (
    <Link
      href={buttonprops.link}
      style={{
        border: `${!activeButton ? buttonprops.border : buttonprops.hovBorder}`,
        background: `${
          !activeButton ? buttonprops.background : buttonprops.hovBack
        }`,
      }}
      className={styles.button__wrapper}
      onMouseEnter={() => setActiveButton(true)}
      onMouseLeave={() => setActiveButton(false)}
    >
      <div className={styles.button__content}>
        <span
          style={{
            color: `${!activeButton ? buttonprops.text : buttonprops.hovText}`,
          }}
        >
          {buttonprops.name}
        </span>
        <div
          className={styles.button__round}
          style={{
            background: `${
              !activeButton ? buttonprops.text : buttonprops.hovText
            }`,
          }}
        >
          <span className={styles.button__icon}>
            <Icon icon="ph:arrow-right-light" style={} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MainButton;
