import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Code } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    // Open Google Drive resume link
    window.open('https://drive.google.com/file/d/14yi5DpL1Ol8hS2f6LjKvnbq56ogUo3ef/view?usp=sharing', '_blank');
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary rounded-full text-sm font-medium mb-4 glass">
            Final-year AI & ML Engineering Student
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text drop-shadow-lg">
          Darshan C S
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Full-stack & AI Developer | Problem Solver | Building enterprise-grade software solutions
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/darshancs30"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-glow"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/darshan-c-s-07235b377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-glow"
            style={{ animationDelay: '0.5s' }}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/u/DarshanCS30/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-glow"
            style={{ animationDelay: '1s' }}
          >
            <Code className="w-6 h-6" />
          </a>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleDownloadResume}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            onClick={handleContactMe}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;