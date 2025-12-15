"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "../ui/animated-list"

// 1. Update Interface to use 'img' instead of icon/color
interface Item {
  name: string
  description: string
  img: string // Changed from icon & color to just img path
  time: string
}

// 2. Update Data with image paths
let notifications: Item[] = [
  {
    name: "UP Business Incubator for IT",
    description: "Jason Nieva",
    time: "November 12, 2025",
    img: "./up-init-logo.webp", // Replace with your actual image paths
  },
  {
    name: "Dynata Philippines, Inc.",
    description: "Anton, Valerie, & Jake",
    time: "November 13, 2025",
    img: "./dynata-logo.webp",
  },
  {
    name: "Rivan IT Cebu",
    description: "Kevin Lu",
    time: "November 13, 2025",
    img: "./rivan-logo.webp",
  },
  {
    name: "Mata Technologies, Inc.",
    description: "Kemuel Andre Tantuan",
    time: "November 14, 2025",
    img: "./mata-technologies-logo.webp",
  },
  {
    name: "T.a.R.S.I.E.R 117",
    description: "Darwin Bernasor",
    time: "November 15, 2025",
    img: "./tarsier-117-logo.webp",
  }
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

// 3. Update Component to render the image
const Notification = ({ name, description, img, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        
        {/* --- IMAGE RENDERING --- */}
        {/* Replaced the colored div with the image structure you requested */}
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12"> {/* Adjusted size for list view */}
            <img 
              src={img} 
              alt={name}
              className="w-full h-full rounded-full object-cover border-2 border-white/10 shadow-sm" 
            />
          </div>
        </div>
        {/* ----------------------- */}

        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-base truncate">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedCerts({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}