import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import aiFashionImg from "@/assets/project-ai-fashion.jpg";
import hospitalImg from "@/assets/project-hospital.jpg";
import blogImg from "@/assets/project-blog.jpg";
import notelockImg from "@/assets/project-notelock.jpg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "AI Fashion Design Generator",
    description:
      "AI-powered web app generating fashion designs from text prompts using Hugging Face models.",
    tech: ["React", "TypeScript", "Node.js", "Hugging Face", "Docker"],
    liveUrl: "https://github.com/vani-2510/AI-Fashion-Design-",
    githubUrl: "https://github.com/vani-2510/AI-Fashion-Design-",
    image: aiFashionImg,
  },
  {
    title: "Hospital Appointment Booking",
    description:
      "Full-stack platform streamlining doctor–patient scheduling with REST APIs and responsive UI.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "REST API"],
    liveUrl: "https://github.com/vani-2510/hospital-booking-medibook",
    githubUrl: "https://github.com/vani-2510/hospital-appointment-booking",
    image: hospitalImg,
  },
  {
    title: "The Corporate Blog",
    description:
      "Modern corporate blogging platform with TypeScript, secure auth and clean editorial experience.",
    tech: ["TypeScript", "React", "Node.js", "REST API", "Vercel"],
    liveUrl: "https://the-corporate-blog-kappa.vercel.app/",
    githubUrl: "https://github.com/vani-2510/the-corporate-blog",
    image: blogImg,
  },
  {
    title: "NoteLock",
    description:
      "Secure notes & password manager built with Next.js and Prisma with encrypted storage.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    liveUrl: "https://github.com/vani-2510/NoteLock",
    githubUrl: "https://github.com/vani-2510/NoteLock",
    image: notelockImg,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-md shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              {/* Image — roughly 70 % of card height */}
              <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-muted/50 border border-glass text-foreground/80 font-normal text-[11px]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-foreground/20 text-foreground/90 hover:bg-foreground/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
