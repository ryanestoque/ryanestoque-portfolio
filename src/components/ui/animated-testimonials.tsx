"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

// 1. Add Shadcn Dialog imports
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          {/* 2. Wrap the image container area with the Dialog Root */}
          <Dialog>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => {
                  const isCurrentActive = isActive(index);
                  
                  // Define the image element separately for reuse
                  const ImageElement = (
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      // Add cursor-zoom-in if it's the active one
                      className={`h-full w-full rounded-3xl object-cover object-center ${isCurrentActive ? 'cursor-zoom-in' : ''}`}
                    />
                  );

                  return (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isCurrentActive ? 1 : 0.7,
                        scale: isCurrentActive ? 1 : 0.95,
                        z: isCurrentActive ? 0 : -100,
                        rotate: isCurrentActive ? 0 : randomRotateY(),
                        zIndex: isCurrentActive
                          ? 40
                          : testimonials.length + 2 - index,
                        y: isCurrentActive ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      {/* 3. Conditionally wrap only the ACTIVE image with DialogTrigger */}
                      {isCurrentActive ? (
                        <DialogTrigger asChild>
                          {ImageElement}
                        </DialogTrigger>
                      ) : (
                        ImageElement
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* 4. The Modal Content showing the FULL SIZE active image */}
            {/* Classes added to remove default shadcn white box styling for a clean image view */}
<DialogContent 
  className="
    w-auto 
    h-auto 
    max-w-fit 
    p-0 
    border-none 
    bg-transparent 
    shadow-none 
    outline-none 
    flex 
    items-center 
    justify-center
  "
>
   <img
      src={testimonials[active].src}
      alt={testimonials[active].name}
      // This combination ensures it respects BOTH width and height of any screen
      className="
        w-auto 
        h-auto 
        max-w-[90vw] 
        max-h-[90vh] 
        rounded-xl 
        object-contain
      "
    />
</DialogContent>
          </Dialog>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};