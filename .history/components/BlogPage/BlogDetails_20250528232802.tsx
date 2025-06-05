import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/report.jpg"
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
                  <h2 className={styles.bdt_h2}>Opportunité de bourse : L'Oréal-UNESCO - Fullbright 2025-2026 - RSTMH (The Royal Society of Tropical Médecine & Hygiene)</h2>
                </div>
                <div className={styles.bdt__right}>
                  <Image fill quality={100} />
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
