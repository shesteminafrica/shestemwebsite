import React from "react";
import Image from "next/image";
import Link from "next/link";
import STARS from "../../public/svg/stars.svg";
import BRUSH from "../../public/svg/penstroke.svg";
import HERO from "../../public/images/homehero.jpg";
import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = () => {
  const mainText = "Africa's STEM Future Starts with Her";

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
                <div className={styles.word__wrapper} key={i}>
                  <span className={styles.main__word}>{word}</span>
                  {word.toLowerCase() === "starts" && (
                    <div className={styles.penstroke}>
                      <Image
                        fill
                        quality={100}
                        src={BRUSH}
                        alt="brush-stroke"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.next__text}>
              <p>Overcoming the socio-professional BARRIERS and UNCERTAINTIES faced by African girls and women in STEM fields & careers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
