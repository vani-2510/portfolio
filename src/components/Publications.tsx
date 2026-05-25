import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    title:
      "A Comprehensive Review on Underwater Sensor Network Lifetime Enhancement Using Advanced Routing Methodologies",
    journal: "International Journal of Innovative Science and Research Technology (IJISRT)",
    tags: ["Research", "Networks", "Routing"],
    url: "https://www.ijisrt.com/a-comprehensive-review-on-underwater-sensor-network-lifetime-enhancement-using-advanced-routing-methodologies",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Research &amp; Writing
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Paper Publications
        </h2>

        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {publications.map((p) => (
            <Card
              key={p.title}
              className="p-6 bg-card border border-border shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <BookOpen className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.journal}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-secondary text-foreground/80 font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-foreground hover:bg-foreground/90 text-background"
                    asChild
                  >
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
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

export default Publications;
