"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import Image from "next/image";
import { PartnersData } from "@/utils";
import styles from "../../styles/HomePage/ourpartners.module.scss";

const Marquee = () => {
  return (
    <div className={styles.marquee}>
      {PartnersData.map((data, i) => (
        <div className={styles.partner__box} key={i}>
          <div
            className={styles.partner__image}
            style={{ width: data.width, aspectRatio: data.aspectRatio }}
          >
            <Image fill quality={100} src={data.image} alt={data.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

const OurPartners = () => {
  const firstSlide1 = useRef(null);
  const secondSlide1 = useRef(null);
  const firstSlide2 = useRef(null);
  const secondSlide2 = useRef(null);
  
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const directionRef = useRef(-1); // Use useRef for mutable direction value
  const directionRef = useRef(-1);
  
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement

  return (
    <div className={`sectioner ${styles.partners__section}`}>
      <h2 className={styles.partner__h2}>Our Partners</h2>
      <div className={styles.partners__container}>
        <div className={styles.marquee__top}>
          <div className={styles.mt__content}>
            <div className={styles.mc__container}>
              <Marquee />
            </div>
            <div className={styles.mc__container}>
              <Marquee />
            </div>
          </div>
        </div>
        <div className={styles.marquee__bottom}>
          <div className={styles.mb__content}>
            <div className={styles.mc__container}>
              <Marquee />
            </div>
            <div className={styles.mc__container}>
              <Marquee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
