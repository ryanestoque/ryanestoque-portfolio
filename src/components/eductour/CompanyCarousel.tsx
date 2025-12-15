"use client";

import Carousel from "@/components/ui/carousel";
import { JournalModal } from "./JournalModal";

export function CompanyCarousel() {
  const slideData = [
    {
      title: "UP CeBu InIT",
      // Instead of a string, we pass the component itself if the Carousel supports generic nodes
      // OR we add a new 'component' key if you modify the carousel to look for it
      button: (
        <JournalModal 
            triggerText="View Journal" 
            imageSrc="./up-init-place.jpg" 
            title="UP CeBu InIT" 
        />
      ),
      src: "./up-init-place.jpg",
    },
    {
      title: "Dynata Philippines, Inc.",
      button: (
        <JournalModal 
            triggerText="View Journal" 
            imageSrc="./dynata-place.png" 
            title="Dynata" 
        />
      ),
      src: "./dynata-place.png",
    },
    {
      title: "Rivan IT Cebu",
      button: (
        <JournalModal 
            triggerText="View Journal" 
            imageSrc="./rivan-place.jpg" 
            title="Rivan IT" 
        />
      ),
      src: "./rivan-place.jpg",
    },
    {
      title: "Mata Technologies, Inc.",
      button: (
        <JournalModal 
            triggerText="View Journal" 
            imageSrc="./mata-place.jpg" 
            title="Mata Tech" 
        />
      ),
      src: "./mata-place.jpg",
    },
    {
      title: "T.a.R.S.I.E.R 117",
      button: (
        <JournalModal 
            triggerText="View Journal" 
            imageSrc="./tarsier-117-place.JPG" 
            title="TARSIER 117" 
        />
      ),
      src: "./tarsier-117-place.JPG",
    },
  ];

  return (
    <div className="dark relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}