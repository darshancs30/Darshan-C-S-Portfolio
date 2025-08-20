import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Brain, Cloud, Database, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "Java", "Go"],
      color: "text-blue-600"
    },
    {
      title: "Frontend & Mobile",
      icon: Smartphone,
      skills: ["React.js", "Next.js", "React Native", "Flutter", "Android", "iOS"],
      color: "text-green-600"
    },
    {
      title: "Backend & APIs",
      icon: Cpu,
      skills: ["Node.js", "Express.js", "REST API", "System Architecture"],
      color: "text-purple-600"
    },
    {
      title: "AI/ML & Computer Vision",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "NLP", "Deep Learning"],
      color: "text-red-600"
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      skills: ["AWS", "GCP", "MongoDB", "MySQL"],
      color: "text-orange-600"
    },
    {
      title: "GenAI & Development Tools",
      icon: Database,
      skills: ["Cursor (GenAI)", "Lovable (GenAI)", "Vibe Coding", "Git", "GitHub", "Linux"],
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-soft card-hover group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;