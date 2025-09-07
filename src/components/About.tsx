import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Python", "Data Science", "HTML", "CSS", "C", "JavaScript", "Responsive Design",
    "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", 
    "Power BI", "Excel", "Statistics", "Machine Learning", "R"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate data analyst with expertise in transforming raw data into actionable business insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Started as a curious student exploring the power of data and analytics. 
                Now I'm an experienced data professional who loves transforming complex datasets into actionable insights.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I specialize in data analytics with expertise in statistical analysis, machine learning, and data visualization. 
                My mission is to bridge the gap between raw data and business value, 
                creating insights that drive informed decision-making and strategic growth.
              </p>
            </Card>

            <Card className="p-8 bg-glass backdrop-blur-glass border-glass shadow-elegant hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">What I Do</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Data Analysis & Statistical Modeling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Machine Learning & Predictive Analytics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Data Visualization & Dashboards
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Web Development & Database Management
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