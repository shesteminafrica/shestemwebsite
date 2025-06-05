import React from "react";
import MainButton from "../ReUsables/MainButton";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "../../styles/HomePage/ourevents.module.scss";

const OurEvents = () => {
  const mainButtonData = {
    name: "See all events",
    link: "/events",
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

  const swiperContent = [
    {
      name: "Essentials to get stat=rte don LinkedIn",
      date: "Apr, 10 2025",
      image: 
    }
  ]

  return (
    <div className={`sectioner ${styles.event__section}`}>
      <div className={`containerr ${styles.event__container}`}>
        <div className={styles.event__header}>
          <h2 className={styles.event__h2}>Our events</h2>
          <div className={styles.mainButton}>
            <MainButton buttonprops={mainButtonData} />
          </div>
        </div>
        <div className={styles.event__swiper}>
          <Swiper slidesPerView={4} spaceBetween={20} speed={500}>
            
          </Swiper>
        </div>
      </div>
      <div className={styles.swiper__controls}>
        <div className={styles.progress__wrapper}>
          <div className={styles.full__progress}></div>
          <div className={styles.ongoing__progress}></div>
        </div>
        <div className={styles.eventswiper__buttons}>
          <div className={styles.eangle}>
            <Icon icon="fa:angle-left" />
          </div>
          <div className={styles.eangle}>
            <Icon icon="fa:angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
