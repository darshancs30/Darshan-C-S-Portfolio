import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 blue-heading">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about solving real-world problems through innovative technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm a final-year B.E. (AI & ML) student at ATME College of Engineering, Mysore, 
              with a passion for full-stack development, artificial intelligence, and machine learning. 
              My journey in technology has been driven by curiosity and the desire to create 
              meaningful solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              With experience in hackathons, coding contests, and open-source projects, 
              I've developed a strong foundation in building enterprise-grade software. 
              I specialize in creating end-to-end applications using modern technologies 
              and integrating AI/ML capabilities to solve complex problems.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm particularly interested in Generative AI tools and their applications 
              in software development, having worked with cutting-edge platforms like 
              Cursor and Lovable to enhance productivity and innovation.
            </p>
          </div>
          
          {/* Education Card */}
          <div className="relative">
            <Card className="bg-gradient-card border-0 shadow-medium card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Education</h3>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      B.E. in Artificial Intelligence & Machine Learning
                    </h4>
                    
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>ATME College of Engineering, Mysore</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2022 – 2026</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;