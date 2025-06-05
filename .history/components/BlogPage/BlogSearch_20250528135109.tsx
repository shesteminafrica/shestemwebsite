"use client"

import React from 'react'
import styles from "../../styles/BlogPage/blogsearch.module.scss"

const BlogSearch = () => {
  return (
    <div className={styles.search__container}>
      <form action="" className={styles.sc__form}>
        <input type="text" placeholder='Search article' className={styles.sc__input}/>
      </form>
    </div>
  )
}

export default BlogSearch