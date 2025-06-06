"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ReUsables/mainbutton.module.scss";


interface ButtonProps {
  name: string;
  background: string;
  text: string;
  border: string;
  round: string;
  arrow: string;
  hovBack: string;
  hovText: string;
  hovBorder: string;
  hovArrow: string;
  hovRound: string;
}

const ContactButton  = ({ buttonprops, disabled }: { buttonprops: ButtonProps, disabled: boolean }) => {
  //Check if button has been hovered
  const [activeButton, setActiveButton] = useState(false);

  return (
    <button
      style={{
        border: `${!activeButton ? buttonprops.border : buttonprops.hovBorder}`,
        background: `${
          !activeButton ? buttonprops.background : buttonprops.hovBack
        }`,
      }}
      type="submit"
      disabled={disabled}
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
              !activeButton ? buttonprops.round : buttonprops.hovRound
            }`,
          }}
        >
          <span className={`${styles.button__icon} ${activeButton ? styles.active__button : ""}`}>
            <Icon icon="ph:arrow-right-light" style={{color: `${
              !activeButton ? buttonprops.arrow : buttonprops.hovArrow
            }`}} />

{isSubmitting && (
            <div className={styles.sub__right}>
              <span className={styles.spinner}></span>
            </div>
          )}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ContactButton;