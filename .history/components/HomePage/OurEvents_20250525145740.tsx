import React from 'react'
import MainButton from '../ReUsables/MainButton'
import 
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
          <h2 className={styles.event__h2}>Our events</h2>
          <div className={styles.mainButton}>
            <MainButton buttonprops={mainButtonData}/>
          </div>
        </div>
        <div className={styles.event__swiper}>

        </div>
      </div>
      <div className={styles.swiper__controls}>
        <div className={styles.progress__wrapper}>
          <div className={styles.full__progress}></div>
          <div className={styles.ongoing__progress}></div>
        </div>
        <div className={styles.eventswiper__buttons}>

        </div>
      </div>
    </div>
  )
}

export default OurEvents