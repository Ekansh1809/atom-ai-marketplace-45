
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModelSection from "@/components/ModelSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <ModelSection 
          title="Trending Models" 
          description="Discover the most popular AI models on BrahmAIstra"
        />
        
        <div className="py-8 bg-secondary/10">
          <ModelSection 
            title="Top Rated Models" 
            description="Highest rated AI models from our community"
          />
        </div>
        
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
