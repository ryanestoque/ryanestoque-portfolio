import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { HyperText } from "@/components/ui/hyper-text";



export default function Certificates() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "2025 Cebu-Bohol Educational Tour",
      designation: "November 15, 2025",
      src: "./cebu-bohol-cert.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "CodeChum Information Management",
      designation: "May 16, 2025",
      src: "./codechum-im.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "2024 CodeChum Programming Competition",
      designation: "November 13, 2024",
      src: "./codechum-prog-comp.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "IDEAS Plugin Activity",
      designation: "May 9, 2025",
      src: "./ideas-pitch.png",
    },
    {
      quote:
        "2025 PSITS Programming Quiz Bowl",
      name: "2025 PSITS Programming Quiz Bowl",
      designation: "May 16, 2025",
      src: "./quiz-bowl.jpg",
    },
    {
      quote:
        "T.a.R.S.I.E.R 117 Symposium",
      name: "T.a.R.S.I.E.R 117 Symposium",
      designation: "November 15, 2025",
      src: "./tarsier-cert.jpg",
    },
  ];

  return(
    <section className="dark flex flex-col min-h-screen items-center w-full py-16 lg:py-0">
      <div className="flex justify-center">
        <HyperText className="text-4xl font-bold w-full text-center">Certifications</HyperText>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  )
}