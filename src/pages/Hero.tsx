import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SparklesCore } from "@/components/ui/sparkles";
import Header from "@/layout/Header";
import { motion } from "motion/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";

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
      <section id="home" className="px-8 lg:px-16 xl:px-32 relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center h-[90vh]">
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
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 mt-2"
          >
            <TypingAnimation typeSpeed={30} className="text-neutral-50 leading-0.5">Greetings, I am Ryan Christopher Estoque, a Web Enthusiast.</TypingAnimation>
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
            className="dark relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Drawer>
              <DrawerTrigger>            
                <InteractiveHoverButton>
                  Let's interact
                </InteractiveHoverButton></DrawerTrigger>
              <DrawerContent className="dark w-full max-w-lg mx-auto p-4"> 
                <DrawerHeader>
                  <DrawerTitle className="text-xl text-start">Get in Touch</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 flex flex-row gap-2 justify-center"> 
                  <Card className="flex-1">
                    <CardHeader className="break-all">
                      <div className="rounded-full bg-neutral-800 p-4 w-fit mb-2 border border-neutral-700">
                        <Phone />
                      </div>
                      <CardTitle>Book a Call</CardTitle>
                      <CardDescription>+63-9652951801</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-1">
                    <CardHeader className="break-all">
                      <div className="rounded-full bg-neutral-800 p-4 w-fit mb-2 border border-neutral-700">
                        <Mail />
                      </div>
                      <CardTitle>Email me</CardTitle>
                      <CardDescription>estoque02ryan@gmail.com</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </DrawerContent>
            </Drawer>
          </motion.div>
        </div>
    </section>

    </>
  )
}