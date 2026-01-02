import { ProjectCard } from "@/components/common/project-cards";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Brok's Chikaan",
    src: "/broks-chikaan.png",
    desc: "This project is inspired from a small local food and catering business “Brok’s Chikaan”, which caters various meals and treats.",
    url: "https://github.com/ryanestoque/broks-chikaan",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Wordol: Cebuano Wordle",
    src: "/wordol.png",
    desc: "A one-player word puzzle game that challenges players to guess a five-letter Cebuano word each time he or she plays.",
    url: "https://github.com/ryanestoque/wordol-web",
    stack: ["React", "TypeScript", "Tailwind", "Django"], 
  },
  {
    title: "Arado POS and Inventory System",
    src: "/arado-pos.png",
    desc: "A combined system that contributes in streamlining retail transactions of purchasing and efficiency of monitoring the inventory of hardware products in Arado Enterprises.",
    url: "https://github.com/ryanestoque/arado-enterprises-pos",
    stack: ["React", "TypeScript", "Tailwind", "ExpressJS", "MySQL"],
  },
  {
    title: "Cross Server: 2024 HCDC Online Canteen",
    src: "/cross-server.png",
    desc: "A food-ordering system that exclusivelyaccommodates Holy Crossians, catering a wide variety of foods and drinks directly served from HCDC’s canteen.",
    url: "https://github.com/ryanestoque/cross-server",
    stack: ["HTML", "CSS", "JavaScript"]
  },
];

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={container}
      id="projects"
      className="px-8 lg:px-16 xl:px-32 dark flex flex-col min-h-screen justify-center items-center w-full py-16 lg:py-0">
      {/* <div className="flex justify-center">
        <HyperText className="-mb-24 text-4xl font-bold w-full text-center">PROJECTS</HyperText>
      </div> */}
        {projects.map((project, i) => {
            const targetScale = Math.max(
              0.5,
              1 - (projects.length - i - 1) * 0.1,
            );
            return (
              <ProjectCard
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
      </section>
    );
  }