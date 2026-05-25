import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Software Development Engineer",
    issuer: "Bluestock Fintech",
  },
  {
    title: "Artificial Intelligence & Cloud Technology",
    issuer: "IBM Edunet Foundation",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Achievements
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((c) => (
            <Card
              key={c.title}
              className="p-6 bg-card border border-border shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
