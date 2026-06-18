import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  accent: string;
  span?: string;
};

const projects: Project[] = [
  {
    title: "AI Fashion Design Generator",
    description:
      "AI-powered web app generating fashion designs from text prompts using Hugging Face models, with secure auth and Docker + PM2 deployment.",
    tech: ["React", "TypeScript", "Node.js", "Hugging Face", "Docker"],
    liveUrl: "https://github.com/vani-2510/AI-Fashion-Design-",
    githubUrl: "https://github.com/vani-2510/AI-Fashion-Design-",
    accent: "from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Hospital Appointment Booking",
    description:
      "Full-stack platform streamlining doctor–patient scheduling with REST APIs, responsive UI, and a normalized MongoDB data model.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "REST API"],
    liveUrl: "https://github.com/vani-2510/hospital-appointment-booking",
    githubUrl: "https://github.com/vani-2510/hospital-appointment-booking",
    accent: "from-emerald-400/40 via-teal-500/30 to-cyan-500/40",
  },
  {
    title: "The Corporate Blog",
    description:
      "Modern corporate blogging platform with TypeScript frontend & backend, secure token-based auth and a clean editorial reading experience.",
    tech: ["TypeScript", "React", "Node.js", "REST API", "Vercel"],
    liveUrl: "https://the-corporate-blog-kappa.vercel.app/",
    githubUrl: "https://github.com/vani-2510/the-corporate-blog",
    accent: "from-amber-400/40 via-orange-500/30 to-rose-500/40",
    span: "md:col-span-2",
  },
  {
    title: "NoteLock",
    description:
      "Secure notes & password manager built with Next.js and Prisma. Strong authentication and encrypted storage protect user credentials.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    liveUrl: "https://github.com/vani-2510/NoteLock",
    githubUrl: "https://github.com/vani-2510/NoteLock",
    accent: "from-sky-400/40 via-blue-500/30 to-violet-500/40",
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

        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[260px] gap-5 max-w-6xl mx-auto">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:shadow-glow ${p.span ?? ""}`}
            >
              {/* Preview image / gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} transition-transform duration-700 ease-out group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.25),transparent_60%),radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.25),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-30 transition-opacity duration-500">
                <Code2 className="w-20 h-20 text-foreground/80" strokeWidth={1.2} />
              </div>

              {/* Title chip (always visible) */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                <h3 className="text-base md:text-lg font-semibold text-foreground/95 bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-glass">
                  {p.title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-background/60 backdrop-blur-sm border border-glass text-foreground/85 font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
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
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
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
