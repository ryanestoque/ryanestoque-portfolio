import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SparklesCore } from "@/components/ui/sparkles";
import Header from "@/layout/Header";
import { motion } from "motion/react";

export default function Hero() {
  return(
    <>
      <Header />
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center h-[90vh]">
        <div className="flex justify-center">
          <motion.div 
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }} 
          className="relative w-32 h-32 md:w-40 md:h-40 -mb-5  md:-mb-12">
            <img 
              src="./hero-profile-img.webp" 
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
            />
          </motion.div>
        </div>
        <div className="px-4 py-10 md:py-20 dark">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300">
            {"A little king on his journey with his sword."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            Hi, I am Ryan Christopher Estoque, a Web Enthusiast.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
          <InteractiveHoverButton>
            Let's interact
          </InteractiveHoverButton>

          </motion.div>
        </div>
    </div>

    </>
  )
}