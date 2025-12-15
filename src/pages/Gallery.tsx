import { AuroraText } from "@/components/ui/aurora-text";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";



export default function Gallery() {
  const items = [
    {
      title: "",
      image:
        "gallery-20.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "",
      image:
        "gallery-16.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "",
      image:
        "gallery-5.webp",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "",
      image:
        "gallery-11.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "",
      image:
        "gallery-12.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "",
      image:
        "gallery-7.webp",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "",
      image:
        "gallery-17.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "",
      image: "gallery-18.jpg",
      // Was: left-[20%] rotate-[-5deg]
      className: "absolute top-10 right-[20%] rotate-[5deg]", 
    },
    {
      title: "",
      image: "gallery-23.jpg",
      // Was: left-[25%] rotate-[-7deg]
      className: "absolute top-40 right-[25%] rotate-[7deg]",
    },
    {
      title: "",
      image: "gallery-22.jpg",
      // Was: left-[45%] rotate-[-7deg]
      className: "absolute top-24 right-[45%] rotate-[7deg]",
    },
    {
      title: "",
      image: "gallery-19.jpg",
      // Was: left-[30%] rotate-[4deg]
      className: "absolute top-8 right-[30%] rotate-[-4deg]",
    },
  ];

  return(
    <section className="flex flex-col h-screen justify-center items-center w-full py-16 lg:py-0">
      <DraggableCardContainer className="dark relative flex h-full  w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
         <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}> Daghang Salamat, <br />Cebu and Bohol!</AuroraText>
        </p>
        {items.map((item) => (
          <DraggableCardBody className={item.className + ""}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  )
}