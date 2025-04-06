
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Code, Coins, LifeBuoy, Settings, Users, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AddModelModal from "@/components/AddModelModal";

const Developers = () => {
  const [addModelModalOpen, setAddModelModalOpen] = useState(false);

  const handleAddModelClick = () => {
    setAddModelModalOpen(true);
  };

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
                <span className="text-sm font-medium text-atom">Developer Platform</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-glow text-atom">👨‍💻 Welcome, Developer!</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Now you can monetize your AI Models using our token-based system. 
                Earn with every API call or sell your model outright! 🎯
              </p>
              
              <Button 
                size="lg" 
                className="bg-atom hover:bg-atom-dark text-white"
                onClick={handleAddModelClick}
              >
                Add Your Model <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Monetization Guide */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Monetization Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how to effectively monetize your AI models on BrahmAIstra
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coins className="h-5 w-5 text-atom mr-2" />
                  Choose Your Pricing Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Time-Based Rental: Charge per 24 hours of access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lifetime Access: One-time fee for permanent access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Complete Ownership: Transfer full rights to the buyer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 text-atom mr-2" />
                  API Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Get a unique API key for each model you publish</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integration with popular AI frameworks and platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive API documentation and SDKs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 text-atom mr-2" />
                  Manage & Optimize
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Track usage statistics and earnings in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Adjust pricing based on market demand and usage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Set usage limits and monitor performance metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16 bg-secondary/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Common questions about selling your AI models on BrahmAIstra
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I receive payments for my models?</AccordionTrigger>
                <AccordionContent>
                  Earnings from your models are automatically credited to your ATOM wallet in real-time. 
                  You can withdraw your ATOM tokens to your bank account or cryptocurrency wallet at any time, 
                  with a minimum withdrawal amount of 100 ATOM.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the revenue split between developers and BrahmAIstra?</AccordionTrigger>
                <AccordionContent>
                  Developers receive 90% of all revenue generated from their models. BrahmAIstra retains 10% 
                  as a platform fee to cover hosting, marketing, and payment processing costs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I limit how users access my model?</AccordionTrigger>
                <AccordionContent>
                  Yes, you have full control over your model's access parameters. You can set daily usage limits,
                  restrict certain features, or make your model available only to specific user groups. All models
                  have built-in rate limiting to prevent abuse.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I ensure my model isn't copied or stolen?</AccordionTrigger>
                <AccordionContent>
                  BrahmAIstra implements several security measures to protect your intellectual property:
                  encrypted API calls, secure model hosting, and contractual agreements with users. For "Ownership Sale"
                  models, legal transfer documents are automatically generated.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>What types of AI models are accepted?</AccordionTrigger>
                <AccordionContent>
                  BrahmAIstra accepts a wide range of AI models including text generation, image creation, 
                  code generation, data analysis, audio processing, and more. All models undergo a brief review 
                  process to ensure they meet our community guidelines and technical requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start earning with your AI models?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of AI developers who are already monetizing their models on BrahmAIstra.
              Our platform makes it easy to publish, price, and profit from your AI innovations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-atom hover:bg-atom-dark text-white"
                onClick={handleAddModelClick}
              >
                Publish Your First Model
              </Button>
              <Button size="lg" variant="outline" className="neon-border">
                Learn More in Docs
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Add Model Modal */}
      <AddModelModal 
        open={addModelModalOpen} 
        onOpenChange={setAddModelModalOpen}
        onModelAdded={(model) => console.log("Model added:", model)}
      />
    </div>
  );
};

export default Developers;
