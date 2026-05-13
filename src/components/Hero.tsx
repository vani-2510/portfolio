import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download, Github } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-hero"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-full opacity-30 blur-2xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <img
                src={profilePhoto}
                alt="Gunisetty Vani — Full Stack Web Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-card shadow-elegant"
              />
            </div>
          </div>

          {/* Intro */}
          <div className="text-center md:text-left space-y-5 animate-in fade-in slide-in-from-right-6 duration-700">
            <p className="text-lg text-muted-foreground">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              GUNISETTY VANI
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground/70 font-medium">
              Full Stack Web Developer
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto md:mx-0">
              Building scalable web applications with modern technologies and
              clean architecture. Passionate about creating responsive user
              experiences, developing efficient backend systems, and delivering
              high-quality solutions through clean, maintainable code.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-foreground/30 text-foreground hover:bg-secondary"
                asChild
              >
                <a href="/Vani_Gunisetty_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                className="rounded-full bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => scrollTo("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center md:justify-start gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/%20vanigunisetty25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/vani-2510"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:vanigunisetty2510@gmail.com"
                className="p-3 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
