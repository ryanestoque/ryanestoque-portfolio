import About from "./pages/About";
import Certificates from "./pages/Certificates";
import EducTour from "./pages/EducTour";
import Gallery from "./pages/Gallery";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Ryan from "./pages/Ryan";


export default function App() {

  return (
    <main className="px-8 lg:px-16 xl:px-32">
      <Hero />
      <About />
      {/* <Projects /> */}
      <Ryan />
      <Certificates />
      <EducTour />
      <Gallery />
    </main>
  )
}
