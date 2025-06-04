"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  image: string
}

interface EventsCarouselProps {
  events: Event[]
  onRegister?: (eventId: number) => void
}

export function EventsCarousel({ events, onRegister }: EventsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, events.length - itemsPerView)

  // Calculate item width based on container
  const getItemWidth = useCallback(() => {
    if (!containerRef.current) return 0
    return containerRef.current.offsetWidth / itemsPerView
  }, [itemsPerView])

  // Update current index based on scroll position
  const updateIndexFromScroll = useCallback(() => {
    if (!containerRef.current || isScrolling) return

    const container = containerRef.current
    const itemWidth = getItemWidth()
    const scrollLeft = container.scrollLeft
    const newIndex = Math.round(scrollLeft / itemWidth)

    setCurrentIndex(Math.min(Math.max(0, newIndex), maxIndex))
  }, [getItemWidth, maxIndex, isScrolling])

  // Handle scroll events with debouncing
  const handleScroll = useCallback(() => {
    if (isScrolling) return

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      updateIndexFromScroll()
    }, 100)
  }, [updateIndexFromScroll, isScrolling])

  // Smooth scroll to specific index
  const scrollToIndex = useCallback(
    (index: number) => {
      if (!containerRef.current) return

      setIsScrolling(true)
      const container = containerRef.current
      const itemWidth = getItemWidth()
      const scrollPosition = index * itemWidth

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false)
      }, 400)
    },
    [getItemWidth],
  )

  const goToPrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < maxIndex

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="overflow-x-auto custom-scrollbar pb-4"
        onScroll={handleScroll}
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        <div className="flex">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="flex-shrink-0 px-3 group cursor-pointer flex flex-col justify-between"
              style={{
                width: `${100 / itemsPerView}%`,
                scrollSnapAlign: "start",
              }}
            >
              {/* Event Title */}
              <h3 className="text-lg lg:text-3xl font-semibold mb-4 text-center px-2 min-h-[3rem] flex items-center justify-center">
                {event.title}
              </h3>

              {/* Event Date */}
              <div className="flex items-center justify-center gap-2 text-[#7E8188] border border-[#E5E8ED] rounded-full w-fit px-4 py-2 mx-auto">
                <Calendar size={16} />
                <span className="text-sm font-medium">{event.date}</span>
              </div>

              {/* Event Image */}
              <div className="relative aspect-[4/3] mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={event.image || "/er.png"}
                  alt={event.title}
                  fill      
                  className="object-cover size-full group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className={`p-3 rounded-full border transition-all duration-200 ${
            canGoPrevious
              ? "border-gray-300 hover:border-pink-600 hover:text-pink-600 text-gray-600 hover:shadow-md"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
          aria-label="Previous events"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`p-3 rounded-full border transition-all duration-200 ${
            canGoNext
              ? "border-gray-300 hover:border-pink-600 hover:text-pink-600 text-gray-600 hover:shadow-md"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
          aria-label="Next events"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      {/* <div className="flex justify-center mt-4">
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(events.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                scrollToIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerView) === index ? "bg-pink-600 w-6" : "bg-gray-300 hover:bg-pink-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}
