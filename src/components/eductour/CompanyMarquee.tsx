"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

// 1. DATA: Your Certificates
// I've duplicated them to ensure the loop is smooth if you have few items
const certificates = [
  {
    name: "UP Business Incubator",
    img: "./cebu-bohol-cert.jpg", // Replace with actual landscape cert image path
  },
  {
    name: "Dynata Philippines",
    img: "./codechum-im.png",
  },
  {
    name: "Rivan IT Cebu",
    img: "./codechum-prog-comp.png",
  },
  {
    name: "Mata Technologies",
    img: "./ideas-pitch.png",
  },
  {
    name: "T.a.R.S.I.E.R 117",
    img: "./quiz-bowl.jpg",
  },
  {
    name: "T.a.R.S.I.E.R 117",
    img: "./tarsier-cert.jpg",
  },
];

// 2. THE CARD: Landscape Design
const CertCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden p-0 h-full", 
      
      )}
    >
      {/* IMAGE CONTAINER: 16:9 Aspect Ratio */}
      <div className="relative h-48 xl:h-64 w-full overflow-hidden rounded-lg border">
        <img 
          src={img} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
    </figure>
  );
};

export function CertMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      
      {/* MARQUEE: Slower speed (40s) so people can see the details */}
      <Marquee pauseOnHover className="[--duration:40s]">
        {certificates.map((cert, idx) => (
          <CertCard key={`${cert.name}-${idx}`} {...cert} />
        ))}
      </Marquee>

      {/* OPTIONAL: Second Row (Reverse) if you have many certificates */}
      {/* <Marquee reverse pauseOnHover className="[--duration:40s] mt-6">
        {certificates.map((cert, idx) => (
          <CertCard key={`${cert.name}-rev-${idx}`} {...cert} />
        ))}
      </Marquee> 
      */}

      {/* FADE EDGES: Creates the 3D 'tunnel' look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
}