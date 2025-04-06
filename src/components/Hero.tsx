
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1F0F33] to-background z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-atom/20 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-[#22D3EE]/20 blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-atom/10 border border-atom/20 mb-6">
            <span className="text-sm font-medium text-atom">Discover AI like never before</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gradient bg-gradient-to-r from-white via-atom-light to-[#22D3EE] bg-clip-text text-transparent">
              Rent AI Tools with
            </span>
            <br />
            <span className="text-glow text-atom">ATOM Tokens</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12">
            BrahmAIstra is the premier marketplace for AI models. Discover trending models, 
            rent per use with ATOM tokens, and build your own AI empire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-atom hover:bg-atom-dark text-white">
              Explore Models <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="neon-border">
              Become a Developer
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-atom mb-1">300+</div>
              <div className="text-sm text-muted-foreground">AI Models</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-atom mb-1">10k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-atom mb-1">₹1.2M+</div>
              <div className="text-sm text-muted-foreground">Total Earned</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-atom mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
