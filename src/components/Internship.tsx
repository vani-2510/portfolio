import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Internship = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Where I've Worked
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  Software Development Engineer — Intern
                </h3>
                <p className="text-primary font-medium">
                  Bluestock Fintech Pvt. Ltd.
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-foreground/80 list-disc pl-5">
              <li>
                Contributed to full stack features across the company's fintech
                web platform.
              </li>
              <li>
                Built responsive UI components with React.js and integrated
                REST APIs powered by Node.js and Express.
              </li>
              <li>
                Collaborated on code reviews, Git workflows, and shipping
                production-ready features.
              </li>
              <li>
                Helped improve performance and reliability of existing modules,
                with hands-on deployment using Docker and PM2.
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internship;
