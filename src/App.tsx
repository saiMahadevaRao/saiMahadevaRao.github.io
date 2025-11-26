import { AuroraBackground } from "./components/ui/aurora-background";
import { FloatingNav } from "./components/ui/floating-navbar";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCode, FaLaptopCode } from "react-icons/fa";
import Hero from "./components/Template/Hero";
import Experience from "./components/Template/Experience";
import Projects from "./components/Template/Projects";
import Contact from "./components/Template/Contact";
import ChatWidget from "./components/Chat/ChatWidget";
import Header from "./components/Template/Header";
import About from "./components/Template/About";
import Skills from "./components/Template/Skills";
import Footer from "./components/Template/Footer";

function App() {
  const navItems = [
    { name: "Home", link: "#home", icon: <FaHome /> },
    { name: "About", link: "#about", icon: <FaUser /> },
    { name: "Skills", link: "#skills", icon: <FaCode /> },
    { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
    { name: "Projects", link: "#projects", icon: <FaLaptopCode /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <AuroraBackground className="bg-neutral-950 h-auto min-h-screen">
      <main className="relative w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FloatingNav navItems={navItems} />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <ChatWidget />
      </main>
    </AuroraBackground>
  );
}

export default App;
