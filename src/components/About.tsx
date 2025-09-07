import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "Docker", "AWS", "GraphQL", "REST APIs",
    "Git", "Figma", "Adobe Creative Suite", "Responsive Design"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Started as a curious student exploring the endless possibilities of code. 
                Now I'm a seasoned developer who loves turning complex problems into elegant solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I specialize in full-stack development with a keen eye for design. 
                My mission is to bridge the gap between functionality and aesthetics, 
                creating applications that are not only powerful but also delightful to use.
              </p>
            </Card>

            <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">What I Do</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Frontend Development (React, Vue, Angular)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Backend Development (Node.js, Python, Java)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  UI/UX Design & Prototyping
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cloud Architecture & DevOps
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;