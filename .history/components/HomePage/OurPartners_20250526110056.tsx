

"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { PartnersData } from "@/utils";
import styles from "../../styles/HomePage/ourpartners.module.scss";

const Marquee = () => (
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

const OurPartners = () => {
  // these refs hold the elements to translate
  const first1 = useRef<HTMLDivElement>(null);
  const second1 = useRef<HTMLDivElement>(null);
  const first2 = useRef<HTMLDivElement>(null);
  const second2 = useRef<HTMLDivElement>(null);

  // mutable direction values
  const dir1 = useRef(-1);
  const dir2 = useRef(1);

  // persistent xPercents
  const xp1 = useRef(0);
  const xp2 = useRef(0);

  const speed = 0.1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // single ScrollTrigger on window/document
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        // self.direction is +1 or -1
        dir1.current = -self.direction;
        dir2.current = self.direction;
      },
    });

    // the animation loop
    const tick = () => {
      // wrap xp1 between -100 .. 0
      xp1.current =
        xp1.current <= -100
          ? 0
          : xp1.current > 0
          ? -100
          : xp1.current;

      xp2.current =
        xp2.current <= -100
          ? 0
          : xp2.current > 0
          ? -100
          : xp2.current;

      // apply transforms
      gsap.set(first1.current, { xPercent: xp1.current });
      gsap.set(second1.current, { xPercent: xp1.current });
      gsap.set(first2.current, { xPercent: xp2.current });
      gsap.set(second2.current, { xPercent: xp2.current });

      // advance
      xp1.current += speed * dir1.current;
      xp2.current += speed * dir2.current;

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className={`sectioner ${styles.partners__section}`}>
      <h2 className={styles.partner__h2}>Our Partners</h2>
      <div className={styles.partners__container}>
        <div className={styles.marquee__top}>
          <div className={styles.mt__content}>
            <div className={styles.mc__container} ref={first1}>
              <Marquee />
            </div>
            <div className={styles.mc__container} ref={second1}>
              <Marquee />
            </div>
          </div>
        </div>
        <div className={styles.marquee__bottom}>
          <div className={styles.mb__content}>
            <div className={styles.mc__container} ref={first2}>
              <Marquee />
            </div>
            <div className={styles.mc__container} ref={second2}>
              <Marquee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
