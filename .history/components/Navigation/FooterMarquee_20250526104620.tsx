"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import styles from "../../styles/Navigation/footermarquee.module.scss";

const FooterMarquee = () => {
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const sliderRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 20000,
        scrub: 1,
        onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
      },
      // x: "-150px",
    });
    requestAnimationFrame(animation);
  });

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;
    gsap.set(firstSlide.current, { xPercent });
    gsap.set(secondSlide.current, { xPercent });
    xPercent += speed * directionRef.current; // Use directionRef's current property
    requestAnimationFrame(animation);
  };

  return (
    <section className={`${styles.sl__section}`}>
      <div className={styles.slslider__container}>
        <div className={styles.sl__slider} ref={sliderRef}>
          <div className={styles.slslider__main} ref={firstSlide}>
            <div className={styles.slslider__content}>
              <div className={styles.slfirst__slide}>
                <p>She STEMin Africa</p>
                <span className={styles.slspan__button}></span>
              </div>
              <div className={styles.slfirst__slide}>
                <p>She STEMin Africa</p>
                <span className={styles.slspan__button}></span>
              </div>
            </div>
            <span className={styles.slslider__space}></span>
          </div>
          <div className={styles.slslider__main} ref={secondSlide}>
            <div className={styles.slslider__content}>
              <div className={styles.slfirst__slide}>
                <p>She STEMin Africa</p>
                <span className={styles.slspan__button}></span>
              </div>
              <div className={styles.slfirst__slide}>
                <p>She STEMin Africa</p>
                <span className={styles.slspan__button}></span>
              </div>
            </div>
            <span className={styles.slslider__space}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMarquee;
