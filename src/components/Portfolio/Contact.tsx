import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Code, Award } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "darshancs008@gmail.com",
      href: "mailto:darshancs008@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8660733408",
      href: "tel:+918660733408",
      color: "text-green-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/darshancs30",
      color: "text-gray-700",
      bgColor: "bg-gray-50"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/darshan-c-s-07235b377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/DarshanCS30/",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Award,
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/darshancs008",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities to work together
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-gradient-card border-0 shadow-medium card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                          <p className="text-lg font-semibold text-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="bg-gradient-card border-0 shadow-medium card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Connect Online</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 rounded-lg hover:bg-primary/5 transition-all duration-300 group hover:scale-105"
                      >
                        <div className={`p-4 ${social.bgColor} rounded-full mb-3 group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`w-6 h-6 ${social.color}`} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-hero border-0 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to collaborate?</h3>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to create impactful solutions together.
                </p>
                <Button
                  asChild
                  className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  <a href="mailto:darshancs008@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send me an email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;