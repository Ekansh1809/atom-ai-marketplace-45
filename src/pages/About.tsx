
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Code, Coins, Shield } from "lucide-react";

const About = () => {
  // Sample team data - in a real app this would be fetched from a database
  const teamMembers = [
    {
      name: "Arjun Patel",
      role: "Founder & CEO",
      bio: "AI researcher with 10+ years experience in machine learning and a vision to democratize AI.",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300"
    },
    {
      name: "Priya Singh",
      role: "CTO",
      bio: "Former lead engineer at a major AI company with expertise in building scalable AI platforms.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300"
    },
    {
      name: "Vikram Mehta",
      role: "Head of Product",
      bio: "Background in UX and product management with a passion for creating user-friendly AI tools.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
    },
    {
      name: "Neha Reddy",
      role: "Chief AI Officer",
      bio: "PhD in computer science, specializing in natural language processing and generative AI.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1F0F33] to-background z-0"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-atom/20 blur-[100px] animate-pulse"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-atom/10 border border-atom/20 mb-6">
                <span className="text-sm font-medium text-atom">About Our Platform</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-glow text-atom">🚀 BrahmAIstra</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                BrahmAIstra is the AI-as-a-Service hub where developers and users meet. 
                Empowering model monetization for the next-gen AI economy.
              </p>
              
              <Button 
                size="lg" 
                className="bg-atom hover:bg-atom-dark text-white"
              >
                Join Our Community <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We're building a future where AI is accessible, monetizable, and beneficial for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-xl font-semibold">For Developers</h3>
                  <p className="text-muted-foreground">
                    We provide a platform for AI developers to showcase their innovations, 
                    monetize their models, and connect with users worldwide. Our fair revenue 
                    sharing model ensures that creators are properly compensated for their work.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-atom/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-atom" />
                  </div>
                  <h3 className="text-xl font-semibold">For Users</h3>
                  <p className="text-muted-foreground">
                    We enable easy access to cutting-edge AI capabilities without the need for 
                    technical expertise or expensive infrastructure. Our token-based system lets 
                    users pay only for what they need, making advanced AI affordable for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="bg-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our platform and community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-atom/20 flex items-center justify-center mx-auto">
                  <Code className="h-8 w-8 text-atom" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We push the boundaries of what's possible with AI and create new opportunities for developers and users.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-atom/20 flex items-center justify-center mx-auto">
                  <Coins className="h-8 w-8 text-atom" />
                </div>
                <h3 className="text-xl font-semibold">Fairness</h3>
                <p className="text-muted-foreground">
                  We ensure that developers are fairly compensated for their work and users get value for their tokens.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-atom/20 flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-atom" />
                </div>
                <h3 className="text-xl font-semibold">Security</h3>
                <p className="text-muted-foreground">
                  We prioritize the security of user data, model intellectual property, and financial transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind BrahmAIstra
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-atom text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Timeline / Story */}
        <div className="bg-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The story of how BrahmAIstra came to be
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-atom/30 transform md:translate-x-px"></div>
              
              {/* Timeline Events */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="flex md:flex-col items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                    <div className="w-4 h-4 rounded-full bg-atom absolute left-0 md:left-auto md:right-0 transform translate-x-[-50%] md:translate-x-[50%] z-10"></div>
                    <div className="pl-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">2023</h3>
                      <h4 className="text-atom font-medium">BrahmAIstra Founded</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Our team of AI researchers and entrepreneurs came together to create a platform for AI democratization.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                  <div className="flex md:flex-col items-center md:w-1/2 md:pl-8 md:text-left order-1 md:order-2">
                    <div className="w-4 h-4 rounded-full bg-atom absolute left-0 md:left-1/2 transform translate-x-[-50%] z-10"></div>
                    <div className="pl-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">Q3 2023</h3>
                      <h4 className="text-atom font-medium">Beta Launch</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Our beta platform launched with 50 AI models and a small community of early adopters.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="flex md:flex-col items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                    <div className="w-4 h-4 rounded-full bg-atom absolute left-0 md:left-auto md:right-0 transform translate-x-[-50%] md:translate-x-[50%] z-10"></div>
                    <div className="pl-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">Q1 2024</h3>
                      <h4 className="text-atom font-medium">ATOM Token System</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        We introduced our token-based economy to facilitate fair compensation for AI developers.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                  <div className="flex md:flex-col items-center md:w-1/2 md:pl-8 md:text-left order-1 md:order-2">
                    <div className="w-4 h-4 rounded-full bg-atom absolute left-0 md:left-1/2 transform translate-x-[-50%] z-10"></div>
                    <div className="pl-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">Q2 2024</h3>
                      <h4 className="text-atom font-medium">Public Launch</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Full public launch with 300+ models and a comprehensive developer platform.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="flex md:flex-col items-center md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                    <div className="w-4 h-4 rounded-full bg-atom absolute left-0 md:left-auto md:right-0 transform translate-x-[-50%] md:translate-x-[50%] z-10"></div>
                    <div className="pl-8 md:pl-0">
                      <h3 className="font-bold text-lg mb-1">Today</h3>
                      <h4 className="text-atom font-medium">Expanding Horizons</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Continuously growing our community, adding new features, and improving the platform.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
