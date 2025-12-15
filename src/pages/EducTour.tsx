"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HyperText } from "@/components/ui/hyper-text";
import { Lens } from "@/components/ui/lens";
import { useDraggableScroll } from "@/hooks/useDraggableScroll"; // Import the hook
import { DialogTrigger } from "@radix-ui/react-dialog";
import { BookOpen, ExternalLink } from "lucide-react";

// 1. DATA
const tourStops = [
  {
    title: "UP Cebu Business Incubator for IT",
    description: "Established in 2010 by UP and DOST, it embarked on an aggressive marketing campaign beyond the confines of the campus in 2011 to encourage potential locators from Region VII or Central Visayas, where Cebu is right at the center.",
    img: "./up-init-place.webp",
    journalImg: "./up-init-journal.webp",
    link: "https://www.facebook.com/UPCebuinIT"
  },
  {
    title: "Dynata Philippines, Inc.",
    description: "Dynata Philippines, Inc. is the Philippine branch of global data provider Dynata, a leading source of first-party data for market research, marketing, and advertising, operating in the Philippines with a significant presence in Cebu",
    img: "./dynata-place.webp",
    journalImg: "./dynata-journal.webp",
    link: "https://www.facebook.com/dynatacebu"
  },
  {
    title: "Rivan IT Cebu",
    description: "Rivan IT Cebu is a prominent, long-running IT training center in the Philippines, specializing in hands-on, practical bootcamps for in-demand tech skills like Cisco CCNA/CCNP, VoIP, Fiber Optics, Linux, and Networking, aiming to equip students for IT careers with real equipment and high exam passing rates, often partnering with universities for student immersion.",
    img: "./rivan-place.webp",
    journalImg: "./rivan-it-journal.webp",
    link: "https://www.facebook.com/rivanitcebu"
  },
  {
    title: "Mata Technologies",
    description: "Mata Technologies Inc. is a Philippine-based tech company specializing in creating immersive digital experiences, primarily through 360 Virtual Tours, Virtual Maps, and 3D photography, aiming to digitally transform locations like tourist spots, heritage sites, and properties",
    img: "./mata-place.webp",
    journalImg: "./mata-journal.webp",
    link: "https://www.facebook.com/matatechnologies"
  },
  {
    title: "T.a.R.S.I.E.R. 117",
    description: "TaRSIER 117 (Telephone and Radio System Integrated Emergency Response) is the dedicated emergency hotline and disaster management system for Bohol, Philippines, acting as a unified command for police, fire, and medical emergencies, with '117' being its primary contact number before the national 911 switch.",
    img: "./tarsier-117-place.webp",
    journalImg: "./tarsier-journal.webp",
    link: "https://www.facebook.com/profile.php?id=100076037333505"
  },
];

const TourCard = ({ title, description, img, journalImg, link }: any) => {
  return (
    <div className="snap-center shrink-0 h-auto flex"> 
      <Card className="dark relative w-[300px] sm:w-[400px] h-full shadow-none border-neutral-800 bg-black/40 backdrop-blur-sm flex flex-col">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <CardHeader>
          <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
            <div className="relative h-64 w-full overflow-hidden rounded-md">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover"
                width={500}
                height={500}
                draggable={false}
                onDragStart={(e) => e.preventDefault()} 
                style={{ pointerEvents: 'auto' }}
              />
            </div>
          </Lens>
        </CardHeader>
        
        {/* 3. CONTENT FIX: 'flex-grow' fills the empty space */}
        <CardContent className="flex-grow">
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          <CardDescription className="text-base line-clamp-4">
            {description}
          </CardDescription>
        </CardContent>
        
        {/* 4. FOOTER FIX: 'mt-auto' isn't strictly needed if flex-grow is on content, 
            but keeps it safe. */}
        <CardFooter className="space-x-2 mt-auto">
          <Dialog>
            <DialogTrigger className="p-0">
              <Button size="icon" className="cursor-pointer"><BookOpen /></Button>
            </DialogTrigger>
            <DialogContent className="dark">
                <div className="flex justify-center items-center">
                  <div className="relative w-full rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800">
                    <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
                      <img 
                          src={journalImg}
                          alt="Journal Entry"
                          className="w-full object-contain mx-auto"
                      />
                    </Lens>
                  </div>
                </div>
            </DialogContent>
          </Dialog>
          <a href={link} target="_blank"><Button className="cursor-pointer" variant="secondary"><ExternalLink /></Button></a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function EducTour() {
  const { ref, onMouseDown, onMouseUp, onMouseMove, onMouseLeave } = useDraggableScroll();

  return (
    <section id="eductour" className="px-8 lg:px-16 xl:px-32 dark flex flex-col gap-4 justify-center items-center min-h-screen w-full py-16 lg:py-0">
      <HyperText className="text-4xl font-bold w-full text-center">Educational Tour</HyperText>

      <div className="w-full relative">
        <div 
          ref={ref}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="
            flex w-full gap-6 overflow-x-auto pb-12 pt-4 px-4 
            snap-x snap-mandatory 
            no-scrollbar 
            cursor-grab  // Default cursor
          "
        >
          {tourStops.map((stop, idx) => (
             // Pass a prop to ensure image is not draggable
             <TourCard key={idx} {...stop} />
          ))}
        </div>
      </div>
    </section>
  );
}