import React from 'react'
import MainButton from '../ReUsables/MainButton'
import styles from "../../styles/HomePage/ourevents.module.scss"

const OurEvents = () => {
  const mainButtonData = {
    name: "See all events",
    link: "/events",
    background: "#f5f5f5",
    text: "#000000",
    border: "1px solid #000000",
    arrow: "white",
    round: "var(--pink)",
    hovBack: "var(--pink)",
    hovText: "#ffffff",
    hovRound: "#ffffff",
    hovBorder: "1px solid transparent",
    hovArrow: "var(--pink)"
  };

  return (
    <div className={`sectioner ${styles.event__section}`}>
      <div className={`containerr ${styles.event__container}`}>
        <div className={styles.event__header}>
          <h2 className={styles.}>Our events</h2>

        </div>
      </div>
      <div className={styles.swiper__controls}>

      </div>
    </div>
  )
}

export default OurEvents