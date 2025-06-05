import React from "react";
import { ChallengesData } from "@/utils";
import Image from "next/image";
import IMAGE from "../../public/images/homehero.jpg"
import GRADIENT from "../../public/svg/gradient.svg";
import styles from "../../styles/HomePage/ourchallenges.module.scss";

const OurChallenges = () => {
  return (
    <div className={`sectioner ${styles.oc__section}`}>
      <div className={`containerr ${styles.oc__container}`}>
        <div className={styles.oc__header}>
          <h2 className={styles.oc__h2}>Our Challenges</h2>
        </div>
        <div className={styles.oc__content}>
          <div className={styles.occ__left}>
            {ChallengesData.map((data, i) => (
              <div className={styles.occ__block} key={i}>
                <div className={styles.ocb__top}>
                  <div className={styles.ocb__gradient}>
                    <Image
                      fill
                      quality={100}
                      alt="gradient icon"
                      src={GRADIENT}
                    />
                  </div>
                  <h3 className={styles.ocb__h3}>{data.name}</h3>
                  <div className={styles.ocb__gradient2}>
                    <Image
                      fill
                      quality={100}
                      alt="gradient icon"
                      src={GRADIENT}
                    />
                  </div>
                </div>
                <div className={styles.ocb__bottom}>
                  <h2 className={styles.ocb__h2}>{data.stat}</h2>
                  <div className={styles.ocb__text}>
                    {data.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.occ__right}>
            <Image fill quality={100} src={IMAGE} alt={/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChallenges;
