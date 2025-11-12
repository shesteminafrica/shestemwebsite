"use client";

import React from 'react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/language-context'
import { getLocalizedString, getLocalizedText, formatDate, urlFor } from '@/sanity'
import { Button3 } from '../button'
import type { Blog, Initiative } from '@/types/sanity'

interface ArticleCardProps {
  blog: Blog | Initiative;
}

const ArticleCard = ({ blog }: ArticleCardProps) => {
  const { language } = useTranslation();

  // Récupérer les données dans la langue actuelle
  const title = getLocalizedString(blog.title, language);
  const excerpt = getLocalizedText(blog.excerpt, language);
  const tag = getLocalizedString(blog.tag, language) || (language === 'fr' ? 'Article' : 'Article');
  const formattedDate = formatDate(blog.publishedAt, language);

  return (
    <div className="w-full flex flex-col gap-4 bg-white rounded-3xl overflow-hidden p-4 transition-all duration-600 ease-in-out transform-none hover:scale-97">
      <div className="w-full aspect-square relative rounded-2xl overflow-hidden">
        {blog.mainImage ? (
          <Image
            fill
            quality={100}
            alt={title}
            src={urlFor(blog.mainImage).width(600).height(600).url()}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full px-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-gray-600 px-4 py-1.5 rounded-full border border-gray-300 text-sm">
            {tag}
          </span>
          <span className="text-gray-600">{formattedDate}</span>
        </div>
        <div className="flex flex-col gap-4 w-[95%] mb-4">
          <h3 className="line-clamp-2 text-black overflow-hidden font-normal font-medium text-3xl leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2 overflow-hidden">
            {excerpt || (language === 'fr' ? 'Aucun extrait disponible.' : 'No excerpt available.')}
          </p>
        </div>
        <Button3
          value={language === 'fr' ? 'Lire plus' : 'Read More'}
          link={`/blog/${blog.slug.current}`}
        />
      </div>
    </div>
  )
}

export default ArticleCard