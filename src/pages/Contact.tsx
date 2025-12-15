import { BackgroundBeams } from "@/components/ui/background-beams";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
    return(
      <section id="contact" className="px-8 lg:px-16 xl:px-32 relative dark flex flex-col gap-8 min-h-screen justify-center items-center w-full py-16 lg:py-0">
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
          </motion.div>
        </div>
        <div className="px-4 py-10 md:py-20 dark">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-5xl font-bold text-slate-700 md:text-6xl lg:text-6xl dark:text-slate-300">
            {"FROM WHAT IF TO WHAT'S NEXT"
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
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-2xl font-normal text-neutral-600 dark:text-neutral-300"
          >
            Let's actualize the potentiality of your ideas in mind.
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
                    <CardHeader>
                      <div className="rounded-full bg-neutral-800 p-4 w-fit mb-2 border border-neutral-700">
                        <Phone />
                      </div>
                      <CardTitle>Book a Call</CardTitle>
                      <CardDescription>+63-9652961801</CardDescription>
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
        <div className="flex flex-col gap-4 md:gap-2 text-center">
          <h1 className="text-2xl font-semibold">I'm available for full-time roles & freelance projects.</h1>
          <h1 className="text-lg font-regular text-neutral-400">I specialize on crafting responsive web designs and seamless user experience.</h1>
        </div>
        <BackgroundBeams />
      </section>
    )
}