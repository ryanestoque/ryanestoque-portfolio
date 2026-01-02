import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import { HyperText } from "../ui/hyper-text";
import { Button } from "../ui/button";

// 1. IMPORT ICONS (Add more as needed)
import { 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiPostgresql, 
  SiPrisma,
  SiVite,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDjango,
  SiMysql,
  SiExpress
} from "react-icons/si";

// 2. CREATE A MAPPING OBJECT
// This allows you to just pass strings like ["React", "Tailwind"] in your data
const techIcons: Record<string, React.ReactNode> = {
  "HTML": <SiHtml5 className="text-[#E34F26]" />,
  "CSS": <SiCss3 className="text-[#1572B6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "React": <SiReact className="text-[#61DAFB]" />,
  "Tailwind": <SiTailwindcss className="text-[#06B6D4]" />,
  "Django": <SiDjango className="text-white" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
  "Prisma": <SiPrisma className="text-white" />,
  "Vite": <SiVite className="text-[#646CFF]" />,
  "Framer": <SiFramer className="text-white" />,
  "MySQL": <SiMysql className="text-blue-400" />,
  "ExpressJS": <SiExpress className="text-white"/>,
  // Add a default fallback if needed
  "default": <div className="w-2 h-2 rounded-full bg-gray-500" />
};

interface CardProps {
  i: number;
  title: string;
  desc: string;
  src: string;
  url: string;
  // 3. ADD THIS NEW PROP
  stack: string[]; 
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const ProjectCard = ({
  i,
  title,
  desc,
  src,
  url,
  stack, // Destructure the new prop
  progress,
  range,
  targetScale,
}: CardProps) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const pointerEvents = useTransform(scale, (value) => {
    return value >= 0.9 ? "auto" : "none";
  });

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          pointerEvents,
        }}
        className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 origin-top bg-neutral-950 rounded-3xl border border-white/10 shadow-2xl w-full max-w-5xl h-[60vh] md:h-[500px]"
      >
        {i === 0 && (
           <div className="absolute -top-28 left-0 w-full flex justify-center z-0">
             <HyperText className="text-4xl md:text-5xl font-bold text-white">
                PROJECTS
             </HyperText>
           </div>
        )}

        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="w-full md:w-2/5 flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {title}
          </h2>
          
          {/* 4. RENDER THE TECH STACK HERE */}


          <p className="mt-4 text-neutral-400 text-sm md:text-base">
             {desc}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {stack.map((tech, idx) => (
              <div 
                key={idx} 
                className="text-2xl text-neutral-400 hover:text-white transition-colors cursor-help"
                title={tech} // Shows text on hover
              >
                {techIcons[tech] || techIcons["default"]}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a href={url} target="_blank" className="relative z-20 block">
              <Button variant={"link"} className="text-sm font-mono cursor-pointer uppercase tracking-wider p-0">
                View Repository →
              </Button>
            </a>
          </div>
        </div>

        <div className="w-full md:w-3/5 relative h-full rounded-2xl overflow-hidden bg-black border border-white/5">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};