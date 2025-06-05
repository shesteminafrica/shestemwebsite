import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainButton from '../ReUsables/MainButton'
import IMAGE from "../../public/images/report.jpg"
import styles from "../../styles/BlogPage/articlecard.module.scss"

const ArticleCard = () => {
  const mainButtonData = {
    name: "Read more",
    link: "/blog",
    background: "var(--pink)",
    text: "#ffffff",
    round: "#ffffff",
    border: "1px solid transparent",
    arrow: "var(--pink)",
    hovBack: "#ffffff",
    hovText: "var(--pink)",
    hovBorder: "1px solid var(--pink)",
    hovArrow: "white",
    hovRound: "var(--pink)",
  };

  return (
    <Link href="/blog/from-curiosity" className={styles.article__wrapper}>
      <div className={styles.ar__image}>
        <Image fill quality={100} alt="article" src={IMAGE}/>
      </div>
      <div className={styles.ar__bottom}>
        <div className={styles.arb__top}>
          <span className={styles.ar__tag}>Article</span>
          <span className={styles.ar__date}>April 30, 2025</span>
        </div>
        <div className={styles.arb__bottom}>
          <h3 className={styles.arb__h3}>From Curiosity to Discovery: Dr. Sabine Adeline Fanta Yadang's STEM Journey</h3>
          <p className={styles.arb__p}>Can you tell us about your academic and professional background in STEM? Since primary school,  I have been fascinated by sciences with biology...</p>
        </div>
        <MainButton buttonprops={mainButtonData}/>
      </div>
    </Link>
  )
}

export default ArticleCard