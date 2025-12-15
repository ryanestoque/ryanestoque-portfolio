import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { HyperText } from "@/components/ui/hyper-text"; // Assuming import path
import { TypingAnimation } from "@/components/ui/typing-animation";
import { SiFacebook, SiGithub, SiYoutube } from "react-icons/si";

export default function Ryan() {
  return (
    <section id="about" className="px-8 lg:px-16 xl:px-32 flex flex-col min-h-screen justify-center items-center w-full py-16 lg:py-0">
      <div className="flex flex-col gap-16 max-w-5xl w-full">
        <div className="flex justify-center">
          <HyperText className="text-4xl font-bold w-full text-center">Know About Me</HyperText>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-4">
          
          {/* LEFT SIDE (Image): Takes up 1 share of space */}
          <div className="flex-1 flex flex-col items-center md:justify-end gap-6">
            <div className="w-64 h-64 md:w-80 md:h-80"> 
              {/* Increased size slightly (w-80) for desktop balance */}
              <img 
                src="./about-profile-img.webp" 
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
              />
            </div>
            <div  className="text-center flex flex-col gap-1">
              <h1 className="text-2xl font-medium">Ryan Estoque</h1>
              <h1 className="text-lg font-light">Web Developer</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <a href="https://github.com/ryanestoque/" target="_blank"><SiGithub className="w-6 h-6"/></a>
              <a href="https://www.facebook.com/ryanestoque02" target="_blank"><SiFacebook className="w-6 h-6"/></a>
              <a href="https://www.youtube.com/@ryanestoque" target="_blank"><SiYoutube className="w-6 h-6"/></a>
            </div>
          </div>

          {/* RIGHT SIDE (Text): Takes up 1 share of space */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              A not-so-full-stack developer
            </h1>
            <div className="flex flex-row gap-4 items-center">
              <div className="group relative flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <AnimatedGradientText>Frontend 60%</AnimatedGradientText>
              </div>
              <div className="group relative flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <AnimatedGradientText>Backend 30%</AnimatedGradientText>
              </div>
              <div className="group relative flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <AnimatedGradientText>Sleep 10%</AnimatedGradientText>
              </div>
            </div>

            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              My name is Ryan Christopher Estoque! 
              I’m a web developer who strives for full-stack mastery but currently resides in 
              <span className="text-white font-medium"> 'Three-Quarter Stack'</span> territory. 
              I build accessible, user-friendly interfaces and dabble in the dark arts of server management.
              I particularly hate deadlines and have keen eye for minor flaws, an imperfect-perfectionist indeed.
              If you feel like going crazy with the art of web developing, you know where to find me.
              <br className="hidden md:block" />
              <TypingAnimation typeSpeed={30} className="italic block mt-4 text-neutral-500">"Increase that padding of yours, brooo."</TypingAnimation>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}