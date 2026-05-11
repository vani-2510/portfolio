import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Internship = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world full stack development experience contributing to production-grade products
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Software Developer Engineer
                  </h3>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Intern
                  </Badge>
                </div>
                <p className="text-lg text-primary font-medium">
                  Bluestock Fintech Pvt. Ltd.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Software Developer Engineer Intern</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Worked as a Software Developer Engineer Intern, contributing to full stack features across the company's fintech web platform.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Built responsive UI components with React.js and integrated REST APIs powered by Node.js and Express.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Collaborated with senior engineers on code reviews, Git workflows, and shipping production-ready features.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Helped improve performance and reliability of existing modules, gaining hands-on experience with deployment using Docker and PM2.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {["React.js", "Node.js", "Express", "MongoDB", "REST API", "Git", "Docker"].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-glass text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internship;
