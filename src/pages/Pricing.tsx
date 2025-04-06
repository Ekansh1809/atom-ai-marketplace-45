
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Coins, ArrowRight, Check } from "lucide-react";

const Pricing = () => {
  const [modelPrice, setModelPrice] = useState<number>(5);
  const [usageVolume, setUsageVolume] = useState<number>(100);
  
  // Calculate earnings based on the price and volume
  const calculateEarnings = () => {
    const totalRevenue = modelPrice * usageVolume;
    const developerShare = totalRevenue * 0.9; // 90% to the developer
    const platformFee = totalRevenue * 0.1; // 10% platform fee
    
    return {
      totalRevenue,
      developerShare,
      platformFee
    };
  };
  
  const earnings = calculateEarnings();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-glow text-atom">💰 How Tokens Work</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Users pay in ATOM to use your model. You keep 90%, we take 10%. Set your own prices!
              </p>
            </div>
          </div>
        </div>
        
        {/* Pricing Slabs */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Example Pricing Slabs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some popular pricing strategies developers use for different model types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Simple Text Models</CardTitle>
                <CardDescription>Text generation, classification, summarization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>Time-based rental</span>
                    <span className="font-medium">2-5 ATOM / day</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>Lifetime access</span>
                    <span className="font-medium">30-50 ATOM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Full ownership</span>
                    <span className="font-medium">500+ ATOM</span>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-muted-foreground">
                  Recommended for models with moderate computational requirements and broad applications.
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Media Generation</CardTitle>
                <CardDescription>Image, audio, and video creation models</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>Time-based rental</span>
                    <span className="font-medium">10-20 ATOM / day</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>Lifetime access</span>
                    <span className="font-medium">100-200 ATOM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Full ownership</span>
                    <span className="font-medium">2000+ ATOM</span>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-muted-foreground">
                  Recommended for compute-intensive models with high creative value and visual outputs.
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Specialized Models</CardTitle>
                <CardDescription>Domain-specific AI with unique capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>Time-based rental</span>
                    <span className="font-medium">15-30 ATOM / day</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>Lifetime access</span>
                    <span className="font-medium">200-500 ATOM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Full ownership</span>
                    <span className="font-medium">5000+ ATOM</span>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-muted-foreground">
                  Recommended for highly specialized models with industry-specific applications.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Pricing Comparison */}
        <div className="bg-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Rental vs Lifetime Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understand the different monetization strategies and which one is right for your model
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <Clock className="h-4 w-4 text-blue-500" />
                    </div>
                    Time-Based Rental
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Recurring revenue stream from regular users</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Lower entry price point for users to try your model</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ability to update pricing as your model improves</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ideal for models that require ongoing maintenance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="bg-secondary/10 text-sm text-muted-foreground">
                  Best for: Models with broad appeal and steady usage patterns
                </CardFooter>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <Infinity className="h-4 w-4 text-purple-500" />
                    </div>
                    Lifetime Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Immediate larger payment upfront</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Attractive to users who need ongoing access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Less administrative overhead tracking rentals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Good for stable, mature models that don't change often</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="bg-secondary/10 text-sm text-muted-foreground">
                  Best for: Specialized tools with high individual value
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Developer Earning Calculator */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Developer Earning Calculator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how much you could earn based on your model's price and usage volume
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Estimate Your Earnings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-sm font-medium">
                    Model Price (ATOM per day): {modelPrice} ATOM
                  </label>
                  <Slider
                    value={[modelPrice]}
                    min={1}
                    max={50}
                    step={1}
                    onValueChange={(value) => setModelPrice(value[0])}
                  />
                  <div className="text-sm text-muted-foreground">
                    Adjust the daily rental price for your model (1-50 ATOM)
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium">
                    Monthly Usage Volume: {usageVolume} rentals
                  </label>
                  <Slider
                    value={[usageVolume]}
                    min={10}
                    max={1000}
                    step={10}
                    onValueChange={(value) => setUsageVolume(value[0])}
                  />
                  <div className="text-sm text-muted-foreground">
                    Estimated number of daily rentals per month (10-1000)
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Coins className="h-5 w-5 text-atom mr-2" />
                    Projected Monthly Earnings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span>Total Revenue</span>
                      <span className="text-xl font-bold">{earnings.totalRevenue} ATOM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span>Platform Fee (10%)</span>
                      <span className="text-lg text-muted-foreground">-{earnings.platformFee} ATOM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Your Earnings (90%)</span>
                      <span className="text-2xl font-bold text-atom">{earnings.developerShare} ATOM</span>
                    </div>
                    
                    <div className="mt-4 text-sm text-muted-foreground text-right">
                      Approximately ₹{(earnings.developerShare * 10).toLocaleString()} INR
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center bg-secondary/10">
                <Button className="bg-atom hover:bg-atom-dark">
                  Start Earning Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Import at the top of the file
import { Clock, Infinity } from "lucide-react";

export default Pricing;
