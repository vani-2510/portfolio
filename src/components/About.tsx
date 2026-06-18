import { Card } from "@/components/ui/card";
import { GraduationCap, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-2">
          Get To Know More
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
          <Card className="p-8 bg-card border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <GraduationCap className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Education
            </h3>
            <p className="text-foreground/80">
              <strong>Bachelor of Technology (CSE)</strong>
              <br />
              <span className="text-muted-foreground">
                Building strong foundations in computer science, web
                development, and software engineering.
              </span>
            </p>
          </Card>

          <Card className="p-8 bg-card border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <Code2 className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Experience
            </h3>
            <p className="text-foreground/80">
              <strong>Software Development Engineer Intern</strong>
              <br />
              <span className="text-muted-foreground">
                Bluestock Fintech Pvt. Ltd. — full stack feature development
                with React.js, Node.js, Express & MongoDB.
              </span>
            </p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/80 leading-relaxed">
            My journey began with a strong curiosity for how websites and
            applications come to life. That spark led me to explore both
            frontend and backend technologies, and to build full-stack projects
            that solve real-world problems — from AI-powered tools to healthcare
            platforms. Today, I work as a Full Stack Web Developer with hands-on
            experience in React.js, Node.js, Express, and MongoDB, crafting
            clean responsive interfaces, designing reliable REST APIs, and
            shipping production-ready features using modern tools like Docker
            and PM2.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
