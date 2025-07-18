"use client";

import React from "react";
import Image from "next/image";
import FACEBOOK from "../../public/svg/facebook.svg"
import TIKTOK from "../../public/svg/tiktok.svg"
import YOUTUBE from "../../public/svg/youtube.svg"
import LINKEDIN from "../../public/svg/linkedin.svg"
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const socialLinks = [
    {
      image: FACEBOOK, 
      link: "https://m.facebook.com/profile.php/?id=100086683743990"
    },
    {
      image: TIKTOK,
      link: "https://www.tiktok.com/@shesteminafrica"
    }
  ]
  return (
    <footer className={styles.footer}>
      <div className={`containerr ${styles.footer__container}`}>
        <div className={styles.footer__wrapper}>
          <div className={`containerr2 ${styles.main__wrapper}`}>
            <div className={styles.mw__left}>

            </div>
            <div className={styles.mw__right}>

            </div>
          </div>
          <div className={styles.marquee}>

          </div>
        </div>
        <div className={styles.credits}>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
