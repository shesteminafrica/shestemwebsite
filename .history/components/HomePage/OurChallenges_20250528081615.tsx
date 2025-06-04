import React from "react";
import Image from "next/image";
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
            <div className={styles.occ__block}>
              <div className={styles.ocb__top}>
                <div className={styles.ocb__gradient}>
                  <Image
                    fill
                    quality={100}
                    alt="gradient icon"
                    src={GRADIENT}
                  />
                </div>
                <h3 className={styles.ocb__h3}>UNBALANCE</h3>
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
                <h2 className={styles.ocb__h2}>35%</h2>
                <div className={styles.ocb__text}>
                  Only 35% of African students pursue studies in STEM, compared
                  to 50% in other regions of the world. Only 7% of electrical
                  and electronics engineers are women.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.occ__right}></div>
        </div>
      </div>
    </div>
  );
};

export default OurChallenges;
