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

  const mainButton2Data = {
    name: "data.button.name",
    link: "data.button.link",
    background: "var(--pink)",
    text: "#ffffff",
    round: "#ffffff",
    border: "1px solid transparent",
    arrow: "var(--pink)",
    hovBack: "#ffffff",
    hovText: "var(--pink)",
    hovBorder: "1px solid var(--pink)",
    hovArrow: "white",
    hovRound: "var(--pink)",
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
              <h3 className={styles.bfm__h3}>Trouver sa voie dans l'industrie agroalimentaire quand on vient d'une filière STEM</h3>
              <p>Pourquoi s'intéresser à l'agroalimentaire? Tu es étudiante en sciences, en technologie, en maths ou en ingénierie? Tu te demandes comment utiliser tes compétences concrètement et trouver un métier utile, stimulant, avec un impact réel sur ton environnement ? L'industrie agroalimentaire est une voie d'avenir, trop souvent méconnue. Elle allie innovation scientifique, enjeux sociaux, défis environnementaux et opportunités économiques.C'est un secteur essentiel à la vie: sans transformation alimentaire, pas de sécurité alimentaire, pas de développement durable, pas d'indépendance économique pour les pays d'Afrique.</p>
              <MainButton buttonprops={mainButton2Data}/>
            </div>
            <div className={styles.bfm__right}>
              <div className={styles.}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildFuture;
