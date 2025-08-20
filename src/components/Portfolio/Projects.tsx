import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, MessageCircle, Shield, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Realtime Chatting Website",
      description: "React-based platform supporting real-time text, image sharing, and group chats with seamless user experience.",
      role: "Designed and developed frontend & backend features using Socket.IO for real-time communication.",
      techStack: ["React.js", "Node.js", "Socket.IO", "JavaScript"],
      icon: MessageCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "AI-Powered Fake Job/Internship Offer Detector",
      description: "Web application that verifies job offer authenticity using OCR and NLP to detect fraudulent patterns and protect job seekers.",
      role: "Implemented OCR pipeline, ML classification models, and integrated Flask backend with React frontend.",
      techStack: ["Python", "Flask", "Tesseract OCR", "Scikit-learn", "React", "JavaScript", "HTML/CSS"],
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Face-Swap DeepFake Detection System",
      description: "AI-based system to detect face-swap deepfake videos with real-time analysis capabilities for media verification.",
      role: "Built and trained CNN + LSTM models for video analysis, deployed using Flask with real-time processing.",
      techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Flask", "Deep Learning"],
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 blue-heading">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, web development, and real-world problem solving
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${project.bgColor} rounded-lg`}>
                      <IconComponent className={`w-8 h-8 ${project.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">My Role:</h4>
                      <p className="text-muted-foreground">{project.role}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/20 text-primary hover:bg-primary/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/20 text-primary hover:bg-primary/10"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
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

export default Projects;