"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "../../public/svg/logotwo.png"
import FACEBOOK from "../../public/svg/facebook.svg"
import TIKTOK from "../../public/svg/tiktok.svg"
import YOUTUBE from "../../public/svg/youtube.svg"
import LINKEDIN from "../../public/svg/linkedin.svg"
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const socialLinks = [
    {
      image: FACEBOOK, 
      name: "facebook",
      ratio: "103.906/200",
      link: "https://m.facebook.com/profile.php/?id=100086683743990"
    },
    {
      image: TIKTOK,
      name: "tiktok",
      ratio: "175.7857/200",
      link: "https://www.tiktok.com/@shesteminafrica",
    },
    {
      image: YOUTUBE,
      name: "youtube",
      link: "https://www.youtube.com/channel/UCpkn_qCz1Tw-GB-8b1YuQlw",
    },
    {
      image: LINKEDIN,
      name: "linkedin",
      link: "https://www.linkedin.com/company/shesteminafrica/?viewAsMember=true"
    }
  ]

  const footerLinks = [
    {
      header: "She STEM",
      links: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Blog",
          link: "/blog"
        }
      ]
    },
    {
      header: "Contact",
      links: [
        {
          name: "+33 7 58 78 10 35",
          link: "tel:+33758781035"
        },
        {
          name: "contact@shesteminafrica.com",
          link: "mailto:contact@shesteminafrica.com"
        },
        {
          name: "Strasbourg - France",
          link: "https://g.co/kgs/eVncG9g"
        }
      ]
    },
    {
      header: "About us",
      links: [
        {
          name: "Mission",
          link: "/about"
        },
      ]
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={`containerr ${styles.footer__container}`}>
        <div className={styles.footer__wrapper}>
          <div className={`containerr2 ${styles.main__wrapper}`}>
            <div className={styles.mw__left}>
              <div className={styles.footer__logo}>
                <Image fill quality={100} src={LOGO} alt="She STEMin Africa"/>
              </div>
              <div className={styles.social__links}>
                {
                  socialLinks.map((data, i) => (
                    <Link href={data.link} className={styles.social__link} key={i}>
                      <div className={styles.fl__icon}>
                        <Image fill quality={100} src={data.image} alt={data.name}/>
                      </div>
                    </Link>
                  ))
                }
              </div>
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
