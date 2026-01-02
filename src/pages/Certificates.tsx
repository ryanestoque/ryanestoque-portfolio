import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { HyperText } from "@/components/ui/hyper-text";

export default function Certificates() {
  const testimonials = [
    {
      quote:
        "A pitching event where we came unprepared, yet we went outside full of learnings and realizations.",
      name: "IDEAS Plugin Activity",
      designation: "May 9, 2025",
      src: "./ideas-pitch.webp",
    },
    {
      quote:
        "The best trip I ever had, so far.",
      name: "2025 Cebu-Bohol Educational Tour",
      designation: "November 15, 2025",
      src: "./cebu-bohol-cert.webp",
    },
    {
      quote:
        "I managed to complete the activities from Prelims to Finals, obtaining an overall score of 1118/1130.",
      name: "CodeChum Information Management",
      designation: "May 16, 2025",
      src: "./codechum-im.webp",
    },
    {
      quote:
        "Even though it is just a Certificate of Participation, the idea that we were able to represent the BSIT department 'nationally' is something surreal already.",
      name: "2024 CodeChum National Programming Competition",
      designation: "November 13, 2024",
      src: "./codechum-prog-comp.webp",
    },
    {
      quote:
        "The First Inter-School competition I have joined in my college years. Among more than 10 competitors, I managed to get the second spot! Lezgo!",
      name: "2025 PSITS Programming Quiz Bowl",
      designation: "May 16, 2025",
      src: "./quiz-bowl.webp",
    },
    {
      quote:
        "A Certificate of Appearance certifying I was able to grasp the strong determination of T.a.R.S.I.E.R 117 as the frontliners of the common good.",
      name: " T.a.R.S.I.E.R 117 Symposium",
      designation: "November 15, 2025",
      src: "./tarsier-cert.webp",
    },
  ];

  return(
    <section id="certifications" className="px-8 lg:px-16 xl:px-32 dark flex flex-col min-h-screen justify-center items-center w-full py-16 lg:py-0">
      <div className="flex justify-center">
        <HyperText className="text-4xl font-bold w-full text-center">Certifications</HyperText>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  )
}