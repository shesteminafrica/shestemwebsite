import React from "react";
import Image from "next/image";
import Link from "next/link";
import STARS from "../../public/svg/stars.svg";
import HERO from "../../public/images/homehero.jpg";
import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = () => {
  const mainText = "Africa's Stem Future Starts with Her";

  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };

  return (
    <div className={styles.hhero__section}>
      <div className={styles.backimage__parallax}>
        <div className={styles.back__gradient}></div>
        <div className={styles.back__image}>
          <Image fill quality={100} alt="She STEMin Africa" src={HERO} />
        </div>
      </div>
      <div className={styles.hero__content}>
        <div className={`containerr ${styles.hc__container}`}>
          <div className={styles.hc__main}>
            <div className={styles.hc__event}>
              <div className={styles.truncate}>
                Meetup to share experiences about exploring more STEM
                opportunities abroad.
              </div>
              <Link href="/event" className={styles.event__link}>
                Next event
              </Link>
              <div className={styles.twinkling}>
                <Image fill quality={100} src={STARS} alt="stars" />
              </div>
            </div>
            <div className={styles.hero__maintext}>
              {splitWords(mainText).map((word, i) => (
                <p className={styles.word__wrapper} key={i}>
                  <span
                    className={`${styles.activespan} ${
                      animationFinished ? styles.activer : ""
                    } ${
                      pathname === "/" ? styles.moredelay : styles.normaldelay
                    }`}
                  >
                    {word}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
