import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/report.jpg"
import styles from "../../styles/BlogPage/articlecard.module.scss"

const ArticleCard = () => {
  return (
    <div className={styles.article__wrapper}>
      <div className={styles.ar__image}>
        <Image fill quality={100} alt="article" src={IMAGE}/>
      </div>
      <div className={styles.ar__bottom}>
        <div className={styles.arb__top}>
          <span className={styles.ar__tag}>Article</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard