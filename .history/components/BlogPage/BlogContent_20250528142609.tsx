import React from 'react'
import styles from "../../styles/BlogPage/blogcontent.module.scss"

const BlogContent = () => {
  const filters = ["All", "Entrepreneurship", "Innovation", "Inspiring African women in science", "Opportunities", "Events", "News", "STEM"]
  return (
    <div className={`sectioner ${styles.bc__section}`}>
      <div className={`containerr ${styles.bc__container}`}>
        <div className={styles.bc__filter}>
          {
            filters.map((data, i) => (
              <span></span>
            ))
          }
        </div>
        <div className={styles.bc__articles}>

        </div>
      </div>
    </div>
  )
}

export default BlogContent