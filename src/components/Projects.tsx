import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "AI Fashion Design Generator",
    description:
      "AI-powered web app generating fashion designs from text prompts using Hugging Face models, with secure auth and Docker + PM2 deployment.",
    tech: ["React", "TypeScript", "Node.js", "Hugging Face", "Docker"],
    liveUrl: "https://github.com/vani-2510/AI-Fashion-Design-",
    githubUrl: "https://github.com/vani-2510/AI-Fashion-Design-",
  },
  {
    title: "Hospital Appointment Booking",
    description:
      "Full-stack platform streamlining doctor–patient scheduling with REST APIs, responsive UI, and a normalized MongoDB data model.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "REST API"],
    liveUrl: "https://github.com/vani-2510/hospital-appointment-booking",
    githubUrl: "https://github.com/vani-2510/hospital-appointment-booking",
  },
  {
    title: "The Corporate Blog",
    description:
      "Modern corporate blogging platform with TypeScript frontend & backend, secure token-based auth and a clean editorial reading experience.",
    tech: ["TypeScript", "React", "Node.js", "REST API", "Vercel"],
    liveUrl: "https://the-corporate-blog-kappa.vercel.app/",
    githubUrl: "https://github.com/vani-2510/the-corporate-blog",
  },
  {
    title: "NoteLock",
    description:
      "Secure notes & password manager built with Next.js and Prisma. Strong authentication and encrypted storage protect user credentials.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    liveUrl: "https://github.com/vani-2510/NoteLock",
    githubUrl: "https://github.com/vani-2510/NoteLock",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Browse My Recent
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="overflow-hidden bg-card border border-border shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div
                className="h-44 flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Code2 className="w-16 h-16 text-primary-foreground/90" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-secondary text-foreground/80 font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-full border-foreground/30"
                    asChild
                  >
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 rounded-full bg-foreground hover:bg-foreground/90 text-background"
                    asChild
                  >
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
