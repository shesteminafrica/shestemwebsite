"use client";

import React, { useState, useRef, useEffect } from "react";
import MainButton from "../ReUsables/MainButton";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import IMAGE from "../../public/images/linkedin.jpg";
import { Icon } from "@iconify/react";
import styles from "../../styles/HomePage/ourevents.module.scss";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";

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
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
    {
      name: "Essentials to get started on LinkedIn",
      date: "Apr, 10 2025",
      image: IMAGE,
      link: "/",
    },
  ];

  //Just to track the fact that a user on a mobile screen swiped
  const [userSwipe, setUserSwipe] = useState(0);

  const leftButton = useRef<HTMLSpanElement>(null);
  const rightButton = useRef<HTMLSpanElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = swiperContent.length; //Needs to change when i must have fetched this data
  const slidesPerView = 3.5;

  //To control swiper slide change when sliding not when using control buttons
  const SwiperChange = () => {
    const swiper = useSwiper();

    useEffect(() => {
      setActiveSlide(swiper.activeIndex);
    }, [userSwipe]);

    return <span style={{ position: "absolute" }}></span>;
  };

  const ClickLeft = () => {
    const swiper = useSwiper();

    return (
      <span
        onClick={() => {
          swiper.slidePrev();
          setActiveSlide(swiper.activeIndex);
        }}
        ref={leftButton}
      ></span>
    );
  };

  const ClickRight = () => {
    const swiper = useSwiper();

    return (
      <span
        onClick={() => {
          swiper.slideNext();
          setActiveSlide(swiper.activeIndex);
        }}
        ref={rightButton}
      ></span>
    );
  };

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
          <Swiper
            slidesPerView={3.5}
            spaceBetween={20}
            speed={500}
            className={styles.eswiper__wrapper}
            onSlideChange={() => setUserSwipe((prev) => prev + 1)}
          >
            {swiperContent.map((data, i) => (
              <SwiperSlide key={i}>
                <Link href={data.link} className={styles.eslide}>
                  <p className={styles.esp}>{data.name}</p>
                  <div className={styles.edate}>
                    <span className={styles.calendar}>
                      <Icon icon="healthicons:calendar-outline" />
                    </span>
                    <span className={styles.maindate}>{data.date}</span>
                  </div>
                  <div className={styles.event__image}>
                    <Image
                      fill
                      quality={100}
                      alt={data.name}
                      src={data.image}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <SwiperChange />
            <div className="solo">
              <ClickLeft />
              <ClickRight />
            </div>
          </Swiper>
        </div>
      </div>
      <div className={styles.swiper__controls}>
        <div className={styles.progress__wrapper}>
          <div className={styles.full__progress}></div>
          <div
            className={styles.ongoing__progress}
            style={{
              width: `${Math.min(
                ((activeSlide + slidesPerView) / totalSlides) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
        <div className={styles.eventswiper__buttons}>
          <div
            className={styles.eangle}
            onClick={() => leftButton.current?.click()}
          >
            <Icon icon="fa:angle-left" />
          </div>
          <div
            className={styles.eangle}
            onClick={() => rightButton.current?.click()}
          >
            <Icon icon="fa:angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
