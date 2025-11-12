"use client";

import React from 'react'
import { useTranslation } from '@/contexts/language-context'
import ArticleCard from './ArticleCard'
import styles from "../../styles/BlogPage/otherblog.module.scss"
import type { Blog } from '@/types/sanity'

interface OtherBlogsProps {
  blogs: Blog[];
}

const OtherBlogs = ({ blogs }: OtherBlogsProps) => {
  const { language } = useTranslation();

  return (
    <div className={`sectioner ${styles.ob__section}`}>
      <div className={`containerr ${styles.ob__container}`}>
        <h2 className={styles.ob__h2}>
          {language === 'fr' ? 'Autres Articles' : 'Other Articles'}
        </h2>
        <div className={styles.ob__bottom}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <ArticleCard key={blog._id} blog={blog} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              {language === 'fr'
                ? 'Aucun autre article disponible.'
                : 'No other articles available.'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default OtherBlogs