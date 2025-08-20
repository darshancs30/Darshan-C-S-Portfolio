import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code2, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Grand Finalist – SAH Hackfest 2025",
      description: "Cleared regional, state hub, and SAP rounds at PGS ITech, reaching the grand finale of this prestigious hackathon.",
      icon: Trophy,
      type: "Hackathon",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "20+ National Coding Contests",
      description: "Active participant in competitive programming contests across LeetCode and HackerRank platforms.",
      icon: Code2,
      type: "Competitive Programming",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to various open-source projects and maintained personal repositories with innovative solutions.",
      icon: Users,
      type: "Open Source",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 blue-heading">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and competitive spirit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft card-hover group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 ${achievement.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className="mb-3 bg-primary/5 text-primary hover:bg-primary/10"
                    >
                      {achievement.type}
                    </Badge>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;