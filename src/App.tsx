import Preloader from "./components/common/preloader";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import EducTour from "./pages/EducTour";
import Gallery from "./pages/Gallery";
import Hero from "./pages/Hero";
import Ryan from "./pages/Ryan";

export default function App() {
  return (
    // 2. Wrap everything inside Preloader
    // <Preloader>
      <main>
        <Hero />
        <About />
        <Ryan />
        <Certificates />
        <EducTour />
        <Gallery />
        <Contact />
      </main>
    // </Preloader>
  )
}