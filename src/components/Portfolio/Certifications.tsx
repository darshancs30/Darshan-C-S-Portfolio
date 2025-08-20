import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Brain, Code, BookOpen } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Building LLM Applications with Prompt Engineering",
      provider: "NVIDIA",
      description: "Advanced certification in Large Language Model applications and prompt engineering techniques for AI development.",
      icon: Brain,
      category: "AI/ML",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Java Programming Certification",
      provider: "HackerRank",
      description: "Comprehensive Java programming certification covering advanced concepts and best practices.",
      icon: Code,
      category: "Programming",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Multiple Technology Certifications",
      provider: "Coursera & Infosys Springboard",
      description: "Various certifications in software development, algorithms, and emerging technologies through industry partnerships.",
      icon: BookOpen,
      category: "Professional Development",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 blue-heading">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium card-hover group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${cert.bgColor} rounded-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-6 h-6 ${cert.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <Badge 
                        variant="secondary" 
                        className="mb-2 bg-primary/5 text-primary hover:bg-primary/10"
                      >
                        {cert.category}
                      </Badge>
                      
                      <h3 className="text-lg font-bold mb-2 text-foreground leading-tight">
                        {cert.title}
                      </h3>
                      
                      <p className="text-primary font-medium mb-3">
                        {cert.provider}
                      </p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    
                    <div className="p-2 bg-primary/5 rounded-full">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
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

export default Certifications;