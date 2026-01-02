import { AnimatedCerts } from "@/components/about/AnimatedCerts"
import { CertMarquee } from "@/components/about/CertMarquee"
import { TechMarquee } from "@/components/about/TechMarquee"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Ripple } from "@/components/ui/ripple"
import {
  FileTextIcon,
  GlobeIcon,
} from "@radix-ui/react-icons"
import { GraduationCap, Sparkle } from "lucide-react"

const features = [
  {
    Icon: Sparkle,
    name: "A detail-oriented individual",
    description: "Enough is not enough.",
    href: "#about",
    cta: "About me",
    
    // --- THE FIX ---
    background: (
      <div className="opacity-100">
        <div className="flex items-center justify-center translate-y-28 lg:translate-y-4">
          <div className="w-32 h-32">
            <img 
              src="./about-profile-img.webp" 
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
            />
          </div>
        </div>
        <Ripple />
      </div>
    ),
    // ----------------
    
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:py-4",
  },
  {
    Icon: GraduationCap,
    name: "Road to Mastery",
    description: "I never, ever get bored with the basics." ,
    href: "#projects",
    cta: "View projects",
    background: 
    <div className="opacity-100">
      <TechMarquee />
    </div>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-5",
  },
  {
    Icon: FileTextIcon,
    name: "Best teacher: Experience",
    description: "With certifications, you can't go wrong with me.",
    href: "#certifications",
    cta: "View certificates",
    background: 
    <div className="opacity-100">
      <CertMarquee />
    </div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
  },
  {
    Icon: GlobeIcon,
    name: "Learning while having fun",
    description: "2025 Cebu-Bohol Educational Tour",
    href: "#eductour",
    cta: "See Journey", // "Learn more" is a bit boring for a tour
    
    // --- THE FIX ---
    background: (
      // <div className="absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden opacity-80">
        
      //   {/* Inner Orbit (Radius 40) */}
      //   <OrbitingCircles radius={75} speed={1.5}>
    //     <div className="flex items-center justify-center">
    //       <div className="w-12 h-12 lg:w-14 lg:h-14">
    //         <img 
    //           src="./dynata-logo.png" 
    //           alt="Profile"
    //           className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
    //         />
    //       </div>
      //   </div>
      //   <div className="flex items-center justify-center">
      //     <div className="w-12 h-12 lg:w-14 lg:h-14">
      //       <img 
      //         src="./rivan-logo.jpg" 
      //         alt="Profile"
      //         className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
      //       />
      //     </div>
      //   </div>
      //   </OrbitingCircles>
        
      //   {/* Outer Orbit (Radius 100) */}
      //   <OrbitingCircles radius={150} reverse speed={1.5}>
      //     <div className="flex items-center justify-center">
      //       <div className="w-12 h-12 lg:w-14 lg:h-14">
      //         <img 
      //           src="./mata-technologies-logo.jpg" 
      //           alt="Profile"
      //           className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
      //         />
      //       </div>
      //     </div>
      //     <div className="flex items-center justify-center">
      //       <div className="w-12 h-12 lg:w-14 lg:h-14">
      //         <img 
      //           src="./tarsier-117-logo.jpg" 
      //           alt="Profile"
      //           className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
      //         />
      //       </div>
      //     </div>
      //     <div className="flex items-center justify-center">
      //       <div className="w-12 h-12 lg:w-14 lg:h-14">
      //         <img 
      //           src="./up-init-logo.jpg" 
      //           alt="Profile"
      //           className="w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl" 
      //         />
      //       </div>
      //     </div>
      //   </OrbitingCircles>
        
      // </div>
      <div className="opacity-100">
        <AnimatedCerts />
      </div>
    ),
    // ----------------
    
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-2 lg:col-end-3",
  }

]

export default function About() {
  return(
    <section className="px-8 lg:px-16 xl:px-32 w-full min-h-screen py-16 lg:py-0">
      <BentoGrid className="dark lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}