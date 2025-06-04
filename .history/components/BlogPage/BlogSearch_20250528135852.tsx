"use client";

import React from 'react'
import { Icon } from "@iconify/react"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import styles from "../../styles/BlogPage/blogsearch.module.scss"

const BlogSearch = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  return (
    <div className={styles.search__container}>
      <form action="" className={styles.sc__form}>
        <input type="text" placeholder='Search article' className={styles.sc__input}/>
        <Icon icon="iconamoon:search" />
      </form>
    </div>
  )
}

export default BlogSearch