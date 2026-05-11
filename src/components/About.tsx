import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Python", "HTML", "CSS", "JavaScript", "C", "React.js", "Node.js",
    "Express", "MongoDB", "REST API", "Responsive Design", "Docker",
    "PM2", "Hugging Face", "Git", "GitHub"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Full Stack Web Developer building scalable, user-focused web applications from frontend to backend
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                My journey began with a strong curiosity for how websites and applications come to life.
                That spark led me to explore both frontend and backend technologies, and to build full
                stack projects that solve real-world problems — from AI-powered tools to healthcare platforms.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, I work as a Full Stack Web Developer with hands-on experience in React.js, Node.js,
                Express, and MongoDB. I love crafting clean, responsive interfaces, designing reliable REST APIs,
                and shipping production-ready features using modern tools like Docker and PM2.
              </p>
            </Card>

            <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">What I Do</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span><strong className="text-foreground">AI-Powered Web Apps</strong> — Built an AI Fashion Design Generator using Hugging Face models, delivering real-time generated designs to users.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span><strong className="text-foreground">Healthcare Platforms</strong> — Developed a Hospital Appointment Booking System with REST APIs that streamlined doctor–patient scheduling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span><strong className="text-foreground">Content & Blogging Platforms</strong> — Built The Corporate Blog, a full-stack blogging app with secure auth and a clean editorial UI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span><strong className="text-foreground">Secure Data Tools</strong> — Created NoteLock, an encrypted notes & password manager that safeguards user credentials across devices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span><strong className="text-foreground">Production Deployment</strong> — Shipped projects with Docker & PM2, ensuring reliable uptime and smooth release cycles.</span>
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
