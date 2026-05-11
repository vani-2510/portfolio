import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Info, CheckCircle2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  overview: string;
  outcomes: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AI Fashion Design Generator",
      description:
        "Built an AI image generation system using Hugging Face models with real-time output. Integrated ML models for real-time design generation, implemented secure authentication, and deployed using Docker and PM2.",
      overview:
        "An AI-powered web app that lets users generate original fashion designs from text prompts in real time. Combines a React + TypeScript frontend with a Node.js backend that orchestrates Hugging Face inference models behind a secure auth layer.",
      outcomes: [
        "Delivered real-time AI design generation with sub-second UI feedback",
        "Implemented secure authentication and request validation end-to-end",
        "Containerized the stack with Docker and managed processes with PM2 for reliable uptime",
        "Designed a responsive, accessible UI for both desktop and mobile users",
      ],
      tech: ["React 18", "TypeScript", "Node.js", "Hugging Face", "Docker", "PM2"],
      liveUrl: "#",
      githubUrl: "https://github.com/vani-2510",
      featured: true,
    },
    {
      title: "Hospital Appointment Booking System",
      description:
        "Full-stack booking platform for doctors and patients with REST APIs for scheduling and user management. Created responsive UI with seamless backend integration.",
      overview:
        "A full-stack healthcare platform that streamlines doctor–patient scheduling. Patients can browse doctors, book slots and manage appointments, while doctors get a dashboard to view and manage their schedule.",
      outcomes: [
        "Reduced manual scheduling overhead with automated slot booking",
        "Built secure REST APIs for users, doctors and appointments",
        "Designed a responsive UI that works smoothly across devices",
        "Integrated MongoDB with clean, normalized data models",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express", "REST API"],
      liveUrl: "#",
      githubUrl: "https://github.com/vani-2510",
      featured: true,
    },
    {
      title: "The Corporate Blog",
      description:
        "Full-stack corporate blogging platform with a TypeScript frontend and backend, secure authentication via access tokens, and a clean editorial reading experience. Deployed live on Vercel.",
      overview:
        "A modern corporate blogging platform with a TypeScript frontend and backend. Supports authenticated authors, a clean editorial reading experience and a deployed production environment on Vercel.",
      outcomes: [
        "Shipped a fully deployed blog at the-corporate-blog-kappa.vercel.app",
        "Implemented secure cross-origin auth via access tokens passed through URL hash",
        "Built a clean, content-first reading layout with strong typography",
        "Separated frontend and backend codebases for clear ownership and scaling",
      ],
      tech: ["TypeScript", "React", "Node.js", "REST API", "Vercel"],
      liveUrl: "https://the-corporate-blog-kappa.vercel.app/",
      githubUrl: "https://github.com/vani-2510/the-corporate-blog",
      featured: true,
    },
    {
      title: "NoteLock",
      description:
        "Secure web app for managing sensitive notes and passwords. Uses strong encryption and authentication so users can safely store, organize and retrieve credentials from any device.",
      overview:
        "A secure notes and password manager built with Next.js and Prisma. Users can safely store, organize and retrieve sensitive credentials from any device, protected by strong authentication and encryption.",
      outcomes: [
        "Encrypted storage of sensitive notes and credentials",
        "Authentication flow that protects against unauthorized access",
        "Clean, simple UI for fast capture and retrieval of secrets",
        "Persistent storage backed by Prisma and SQLite for reliability",
      ],
      tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/vani-2510/NoteLock",
      featured: true,
    },
  ];

  const [selected, setSelected] = useState<Project | null>(null);
  const open = selected !== null;

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
              className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-glass text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(project);
                    }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-accent transition-all duration-300"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => e.stopPropagation()}
                      className="border-glass text-foreground hover:bg-glass backdrop-blur-glass transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                    className="border-glass text-foreground hover:bg-glass backdrop-blur-glass transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-glass backdrop-blur-glass border-glass max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-foreground/80 leading-relaxed pt-2 text-base">
                  {selected.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-glass text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {selected.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-foreground/85">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selected.liveUrl && selected.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                      asChild
                    >
                      <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-glass text-foreground hover:bg-glass"
                    asChild
                  >
                    <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
