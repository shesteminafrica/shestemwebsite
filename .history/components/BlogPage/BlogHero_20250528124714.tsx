import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/BlogPage/bloghero.module.scss"

const BlogHero = () => {
  return (
    <div className={styles.blog__hero}>
      <div className={styles.bh__imageback}>
        <div></div>
      </div>
      <div className={styles.bh__content}>

      </div>
    </div>
  )
}

export default BlogHero