import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.7), rgba(30, 27, 75, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
              Vani Gunisetty
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground animate-in slide-in-from-bottom-4 duration-1000 delay-200">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-400">
              Crafting beautiful digital experiences with modern technologies. 
              Passionate about clean code, stunning designs, and solving complex problems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-accent transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-glass text-foreground hover:bg-glass backdrop-blur-glass transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-glass text-foreground hover:bg-glass backdrop-blur-glass transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="/Vani_Gunisetty_Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-in slide-in-from-bottom-4 duration-1000 delay-800">
            <a 
              href="https://github.com/vani-2510" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass backdrop-blur-glass border border-glass hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/%20vanigunisetty25" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass backdrop-blur-glass border border-glass hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-glass backdrop-blur-glass border border-glass hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;