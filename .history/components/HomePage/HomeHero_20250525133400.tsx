import React from "react";
import Image from "next/image";
import Link from "next/link";
import STARS from "../../public/svg/stars.svg";
import BRUSH from "../../public/svg/penstroke.svg";
import HERO from "../../public/images/homehero.jpg";
import STAR from "../../public/svg/strokestar.svg";
import EDUCATION from "../../public/svg/education.svg"
import SEXEQUAL from "../../public/svg/sexequal.svg"
import INEQUAL from "../../public/svg/inequality.svg"
import styles from "../../styles/HomePage/homehero.module.scss";
import MainButton from "../ReUsables/MainButton";

const HomeHero = () => {
  const mainText = "Africa's STEM Future Starts with Her";

  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };

  const mainButtonData = {
    name: "Discover our programs",
    link: "/events",
    background: "#ffffff",
    text: "var(--pink)",
    border: "1px solid transparent",
    arrow: "#ffffff",
    hovBack: "transparent",
    hovText: "#ffffff",
    hovBorder: "1px solid #ffffff",
    hovArrow: "var(--pink)",
  };

  const heroBottom = [
    {
      name: "Quality Education",
      image: EDUCATION,
      ratio: "238.9398/200"
    },
    {
      name: "Quality Education",
      image: SEXEQUAL,
      ratio: "147.9737/200"
    },
    {
      name: "Reduced Inequality",
      image: INEQUAL,
      ratio: "200.0839/200"
    }
  ]

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
              <p className={styles.p__text}>
                Overcoming the socio-professional BARRIERS and UNCERTAINTIES
                faced by African girls and women in STEM fields & careers
              </p>
            </div>
            <MainButton buttonprops={mainButtonData} />
            <div className={styles.hcm__star}>
              <Image fill quality={100} alt="Star" src={STAR} />
            </div>
          </div>
          <div className={styles.hero__bottom}>
            {
              heroBottom.map(() => (
                <div>
                  
                </div>
              ))
            }
          </div>
          <div className={styles.outer__star}>
            <Image fill quality={100} alt="Star" src={STAR} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
