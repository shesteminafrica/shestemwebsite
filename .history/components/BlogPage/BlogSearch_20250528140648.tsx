"use client";

import React from 'react'
import { Icon } from "@iconify/react"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import styles from "../../styles/BlogPage/blogsearch.module.scss"

const BlogSearch = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set("query", searchTerm)
    } else {
      params.delete("query")
    }

    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className={styles.search__container}>
      <div className={styles.sc__form}>
        <input placeholder='Search article' className={styles.sc__input} defaultValue={searchParams.get("query")?.toString()}/>
        <Icon icon="iconamoon:search" />
      </div>
    </div>
  )
}

export default BlogSearch