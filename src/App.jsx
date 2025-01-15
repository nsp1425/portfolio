import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { Meteors } from "./components/ui/meteors";
import Background_Color from "./components/ui/Background_Color";

const App = () => {
  return (
    <div className="relative w-full  min-h-screen overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0 -z-20">
        <Background_Color />
      </div>

      {/* Meteors */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Meteors number={25} />
      </div>

      {/* Main Content */}
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
