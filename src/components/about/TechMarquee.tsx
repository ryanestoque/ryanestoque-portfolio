import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

// 1. IMPORT YOUR ICONS HERE
// (Make sure you have installed: npm install react-icons)
import { 
  SiReact, 
  SiTypescript, 
  SiVite, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFigma, 
  SiGit,
  SiMysql,
  SiHtml5,
  SiShadcnui,
  SiFirebase,
  SiJavascript,
  SiPhp,
  SiExpress,
  SiPython,
  SiDjango,
  SiXampp
} from "react-icons/si";


const techStack = [
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="text-purple-500" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400" />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500"  />,
  },
  {
    name: "shadcnui",
    icon: <SiShadcnui className="text-white" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-orange-500" />,
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-500" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500" />,
  },
  {
    name: "PHP",
    icon: <SiPhp className="text-purple-500" />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className="text-red-500" />,
  },
  {
    name: "Python",
    icon: <SiPython className="text-blue-500" />,
  },
  {
    name: "Django",
    icon: <SiDjango className="text-pink-500" />,
  },
  {
    name: "XAMPP",
    icon: <SiXampp className="text-orange-500" />,
  }
];

const oneThird = Math.ceil(techStack.length / 3);

const firstRow = techStack.slice(0, oneThird);                 // Items 0 - 6
const secondRow = techStack.slice(oneThird, oneThird * 2);     // Items 6 - 12
const thirdRow = techStack.slice(oneThird * 2);

const TechCard = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        // LAYOUT: Flex row, centered, smaller width (w-40 or w-auto)
        "relative flex items-center gap-3 cursor-pointer overflow-hidden rounded-lg border p-1",
        "w-max px-4", // Auto width based on content
        
        // LIGHT STYLES
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        
        // DARK STYLES (Glassmorphism)
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      {/* ICON */}
      <div className="text-2xl">
        {icon}
      </div>

      {/* NAME */}
      <span className="text-sm font-medium dark:text-white/90">
        {name}
      </span>
    </figure>
  );
};

export function TechMarquee() {
  return (
    <div className="relative flex gap-0 lg:gap-8 w-full flex-col items-center justify-center overflow-hidden p-0 lg:py-16">
      
      <Marquee className="[--duration:30s]">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s] mt-4">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee className="[--duration:30s] mt-4">
        {thirdRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>

      {/* FADE EDGES (The "Vignette" Effect) */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-slate-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-slate-950"></div> */}
    </div>
  );
}