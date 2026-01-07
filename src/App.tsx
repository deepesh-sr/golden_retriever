import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { FrontendDesigns } from "./components/FrontendDesigns";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <FrontendDesigns />
      <Contact />
    </div>
  );
}

export default App;
