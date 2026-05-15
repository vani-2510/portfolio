import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const groups = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Responsive Design", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Tools",
    items: [
      { name: "Node.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "REST API", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git & GitHub", level: "Intermediate" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Explore My
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {groups.map((group) => (
            <Card
              key={group.title}
              className="p-8 bg-card border border-border shadow-elegant"
            >
              <h3 className="text-xl font-semibold text-center text-foreground mb-6">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((s) => (
                  <div key={s.name} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-foreground font-medium leading-tight">
                        {s.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{s.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
