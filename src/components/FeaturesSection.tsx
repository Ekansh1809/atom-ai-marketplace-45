
import React from 'react';
import {
  Users,
  Star,
  Coins,
  BarChart,
  Clock,
  Shield,
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="glass-card p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
      <div className="rounded-full bg-atom/10 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Discover AI Models",
      description: "Browse trending and top-rated AI models across multiple categories.",
      icon: <Star className="h-6 w-6 text-atom" />,
    },
    {
      title: "Pay Per Use",
      description: "Rent AI tools using ATOM tokens, only paying for what you actually use.",
      icon: <Coins className="h-6 w-6 text-atom" />,
    },
    {
      title: "For Developers",
      description: "Upload your AI models and earn ATOM tokens whenever users rent them.",
      icon: <Users className="h-6 w-6 text-atom" />,
    },
    {
      title: "Real-time Analytics",
      description: "Track usage, ratings, and earnings through comprehensive dashboards.",
      icon: <BarChart className="h-6 w-6 text-atom" />,
    },
    {
      title: "Usage History",
      description: "Access your complete transaction history and model usage details.",
      icon: <Clock className="h-6 w-6 text-atom" />,
    },
    {
      title: "Secure Transactions",
      description: "All token transfers are secure with automatic wallet crediting.",
      icon: <Shield className="h-6 w-6 text-atom" />,
    },
  ];

  return (
    <section className="relative py-24">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            BrahmAIstra provides a complete ecosystem for AI model discovery,
            rental, and monetization with our unique token system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
