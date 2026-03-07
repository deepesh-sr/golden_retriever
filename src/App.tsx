import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { FrontendDesigns } from "./components/FrontendDesigns";
import { Contact } from "./components/Contact";
import { CursorGlow } from "./components/CursorGlow";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white relative overflow-x-hidden">
      <CursorGlow />
      <Navigation />
      <Hero />
      <div className="max-w-3xl mx-auto px-6"><hr className="border-[#e23636]/5" /></div>
      <About />
      <div className="max-w-3xl mx-auto px-6"><hr className="border-[#e23636]/5" /></div>
      <Experience />
      <div className="max-w-3xl mx-auto px-6"><hr className="border-[#e23636]/5" /></div>
      <Projects />
      <div className="max-w-3xl mx-auto px-6"><hr className="border-[#e23636]/5" /></div>
      <FrontendDesigns />
      <div className="max-w-3xl mx-auto px-6"><hr className="border-[#e23636]/5" /></div>
      <Contact />
    </div>
  );
}

export default App;
