import React from 'react'
import Image from 'next/image'
import MainButton from '../ReUsables/MainButton'
import IMAGE from "../../public/images/report.jpg"
import { Button1, Button2, Button3 } from '../button'

const ArticleCard = () => {

  return (
    <div className="w-full flex flex-col gap-4 bg-white rounded-3xl overflow-hidden p-4 transition-all duration-600 ease-in-out transform-none hover:scale-97">
      <div className="w-full aspect-square relative rounded-2xl overflow-hidden">
        <Image fill quality={100} alt="article" src={IMAGE} className="object-cover"/>
      </div>
      <div className="flex flex-col gap-4 w-full px-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-gray-600 px-4 py-1.5 rounded-full border border-gray-300 text-sm">Article</span>
          <span className="text-gray-600">April 30, 2025</span>
        </div>
        <div className="flex flex-col gap-4 w-[95%] mb-4">
          <h3 className="line-clamp-2 text-black overflow-hidden font-normal font-medium text-3xl leading-tight">From Curiosity to Discovery: Dr. Sabine Adeline Fanta Yadang&apos;s STEM Journey</h3>
          <p className="text-gray-600 line-clamp-2 overflow-hidden">Can you tell us about your academic and professional background in STEM? Since primary school,  I have been fascinated by sciences with biology...</p>
        </div>
        <Button3 value='Read More' link='/blog/from-curiosity' />
      </div>
    </div>
  )
}

export default ArticleCard