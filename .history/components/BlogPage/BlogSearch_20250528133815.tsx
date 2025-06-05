import React from 'react'
import styles from "../../styles/BlogPage/blogsearch.module.scss"

const BlogSearch = () => {
  return (
    <div className={styles.search__container}>
      <form action="">
        <input type="text" placeholder='Search blog' className={styles.sc__form}/>
      </form>
    </div>
  )
}

export default BlogSearch