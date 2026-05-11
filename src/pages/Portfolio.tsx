import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;