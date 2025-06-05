import React from 'react'
import ArticleCard from './ArticleCard'
import styles from "../../styles/BlogPage/otherblog.module.scss"

const OtherBlogs = () => {
  return (
    <div className={`sectioner ${styles.ob__section}`}>
      <div className={`containerr ${styles.ob__container}`}>
        <h2 className={styles.ob__h2}>Other Articles</h2>
        <div className={styles.ob__bottom}>
          <ArticleCard/>
          <ArticleCard/>
        </div>
      </div>
    </div>
  )
}

export default OtherBlogs