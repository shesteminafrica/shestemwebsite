import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/BlogPage/blogdetails.module.scss";

const BlogDetails = () => {
  return (
    <div className={`sectioner ${styles.bd__section}`}>
      <div className={`containerr ${styles.bd__container}`}>
        <div className={styles.bd__wrapper}>
          <div className={`containerr2 ${styles.bd__container2}`}>
            <div className={styles.bdc__top}>
              <div className={styles.bd__read}>
                <div className={styles.read__item}>
                  <span className={styles.read__dot}></span>
                  <p>10 min read</p>
                </div>
                <div className={styles.read__item}>
                  <span className={styles.read__dot}></span>
                  <p>April 30, 2025</p>
                </div>
              </div>
              <div className={styles.bdt__bottom}>
                <div className={styles.bdt__left}>
                  <h2 className={styles.bdt__h2}>
                    Opportunité de bourse : L'Oréal-UNESCO - Fullbright
                    2025-2026 - RSTMH (The Royal Society of Tropical Médecine &
                    Hygiene)
                  </h2>
                </div>
                <div className={styles.bdt__right}>
                  <Image fill quality={100} alt="Blog Image" src={IMAGE} />
                </div>
              </div>
            </div>
            <div className={styles.bdc__bottom}>
              <div className={styles.bdb__left}></div>
              <div className={styles.bdb__right}>
                <div className={styles.table__content}>
                  <h3 className={styles.tc__h3}>Table of content</h3>
                  <div className={styles.tc__bottom}>
                    <span className={styles.tc__item}>
                      Why Canada is still a top study destination
                    </span>
                    <span className={styles.tc__item}>
                      What you will need to study in Canada in 2025
                    </span>
                  </div>
                </div>
                <div className={styles.social__share}>
                  <h3 className={styles.sc__h3}>Social share</h3>
                  <div className={styles.sc__content}>

                  </div>
                </div>
                <div className={styles.author}>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
