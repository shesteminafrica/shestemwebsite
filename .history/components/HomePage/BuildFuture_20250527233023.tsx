import React from "react";
import MainButton from "../ReUsables/MainButton";
import styles from "../../styles/HomePage/buildfuture.module.scss";

const BuildFuture = () => {
  const mainButtonData = {
    name: "View all articles",
    link: "/blog",
    background: "#f5f5f5",
    text: "#000000",
    border: "1px solid rgba(0,0,0,0.5)",
    arrow: "white",
    round: "var(--pink)",
    hovBack: "var(--pink)",
    hovText: "#ffffff",
    hovRound: "#ffffff",
    hovBorder: "1px solid transparent",
    hovArrow: "var(--pink)",
  };

  return (
    <div className={`sectioner ${styles.bf__section}`}>
      <div className={`containerr ${styles.bf__container}`}>
        <div className={styles.bf__header}>
          <h2 className={styles.bf__h2}>Build your future</h2>
          <MainButton buttonprops={mainButtonData} />
        </div>
        <div className={styles.bf__content}>
          <div className={styles.bf__selector}>
            <div className={styles.bfs__swiper}>
              <span className={styles.bfs__button}>Guide Industrie agroalimentaire</span>
              <span className={styles.bfs__button}>Guide Industrie agroalimentaire</span>
              <span className={styles.bfs__button}>Guide Industrie agroalimentaire</span>
              <span className={styles.bfs__button}>Guide Industrie agroalimentaire</span>
              <span className={styles.bfs__button}>Guide Industrie agroalimentaire</span>
            </div>
          </div>
          <div className={styles.bf__modal}>
            <div className={styles.bfm__left}>

            </div>
            <div className={styles.bf}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildFuture;
