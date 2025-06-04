import React from 'react'
import MainButton from '../ReUsables/MainButton'
import styles from "../../styles/HomePage/ourevents.module.scss"

const OurEvents = () => {
  const mainButtonData = {
    name: "Contact us",
    link: "/contact",
    background: "#f5f5f5",
    text: "var(--pink)",
    border: "1px solid var(--pink)",
    arrow: "white",
    hovBack: "var(--pink)",
    hovText: "#f5f5f5",
    hovBorder: "1px solid transparent",
    hovArrow: "var(--pink)"
  };
  
  return (
    <div className={`sectioner ${styles.event__section}`}>
      <div className={`containerr ${styles.event__container}`}>
        <div className={styles.event__header}>
          <h2>Our events</h2>
        </div>
      </div>
      <div className={styles.swiper__controls}>

      </div>
    </div>
  )
}

export default OurEvents