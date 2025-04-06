
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Code, Key, BarChart, Coins, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Documentation = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, description: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: description,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-glow text-atom">📘 Developer Documentation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Learn how to upload, price, and manage your AI models, access API keys, and monitor usage.
              </p>
            </div>
          </div>
        </div>
        
        {/* Documentation Tabs */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="bg-secondary/30 grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger 
                value="getting-started" 
                className="data-[state=active]:bg-atom data-[state=active]:text-white"
              >
                Getting Started
              </TabsTrigger>
              <TabsTrigger 
                value="api-integration"
                className="data-[state=active]:bg-atom data-[state=active]:text-white"
              >
                API Integration
              </TabsTrigger>
              <TabsTrigger 
                value="token-system"
                className="data-[state=active]:bg-atom data-[state=active]:text-white"
              >
                Token System
              </TabsTrigger>
              <TabsTrigger 
                value="model-management"
                className="data-[state=active]:bg-atom data-[state=active]:text-white"
              >
                Model Management
              </TabsTrigger>
            </TabsList>
            
            {/* Getting Started Tab */}
            <TabsContent value="getting-started" className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>How to Add Your First Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Step 1: Create your developer account</h3>
                    <p className="text-muted-foreground">
                      Sign up for a BrahmAIstra account and select "Developer" during registration, 
                      or convert your existing user account to a developer account in settings.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Step 2: Add your model details</h3>
                    <p className="text-muted-foreground">
                      Click the "Add Your Model" button on the developer dashboard. Fill in your model's name, 
                      description, category, and capabilities. Accurate details help users find your model.
                    </p>
                    
                    <div className="rounded-md bg-secondary/30 p-4 my-4">
                      <h4 className="font-medium mb-2">Required Information:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Model name and description</li>
                        <li>Category and subcategories</li>
                        <li>Example inputs and outputs</li>
                        <li>Technical specifications</li>
                        <li>Usage instructions</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Step 3: Set up monetization</h3>
                    <p className="text-muted-foreground">
                      Choose between time-based rental, lifetime access, or ownership sale. Set your prices in 
                      ATOM tokens and specify any usage limits you want to enforce.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Step 4: Connect your model</h3>
                    <p className="text-muted-foreground">
                      Integrate your model using our API endpoints. You can either host your model with us or 
                      provide an API endpoint to your externally hosted model.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Step 5: Publish and promote</h3>
                    <p className="text-muted-foreground">
                      Review and publish your model to make it available in the marketplace. Use our promotional 
                      tools to increase visibility and attract more users.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* API Integration Tab */}
            <TabsContent value="api-integration" className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>API Structure & Integration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">API Endpoints</h3>
                    <p className="text-muted-foreground mb-4">
                      All BrahmAIstra API endpoints are accessed through our base URL. Each model is assigned a 
                      unique identifier and authentication is handled via API keys.
                    </p>
                    
                    <div className="rounded-md bg-secondary/20 p-4 font-mono text-sm mb-2">
                      https://api.brahmaistra.ai/v1/models/{'{model_id}'}/predict
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => copyToClipboard(
                        "https://api.brahmaistra.ai/v1/models/{model_id}/predict",
                        "API endpoint copied to clipboard"
                      )}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Authentication</h3>
                    <p className="text-muted-foreground mb-4">
                      All API requests require authentication using your API key in the request header.
                    </p>
                    
                    <div className="rounded-md bg-secondary/20 p-4 font-mono text-sm">
                      {`Authorization: Bearer bai_YOUR_API_KEY`}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Example Request</h3>
                    <p className="text-muted-foreground mb-4">
                      Here's an example of how to make a request to your model:
                    </p>
                    
                    <div className="rounded-md bg-secondary/20 p-4 font-mono text-sm overflow-auto">
                      {`curl -X POST https://api.brahmaistra.ai/v1/models/model_id/predict \\
  -H "Authorization: Bearer bai_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"inputs": "Your input text or data here"}'`}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => copyToClipboard(
                        `curl -X POST https://api.brahmaistra.ai/v1/models/model_id/predict \\\n  -H "Authorization: Bearer bai_YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{"inputs": "Your input text or data here"}'`,
                        "cURL command copied to clipboard"
                      )}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Integration Libraries</h3>
                    <p className="text-muted-foreground">
                      We provide official client libraries for common programming languages:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <Card className="bg-secondary/20">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm flex items-center">
                            <Code className="h-4 w-4 mr-2" />
                            Python
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-3 px-4">
                          <div className="font-mono text-xs">
                            pip install brahmaistra
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-secondary/20">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm flex items-center">
                            <Code className="h-4 w-4 mr-2" />
                            JavaScript
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-3 px-4">
                          <div className="font-mono text-xs">
                            npm install brahmaistra-js
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Token Wallet System Tab */}
            <TabsContent value="token-system" className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Token Wallet System</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Understanding ATOM Tokens</h3>
                    <p className="text-muted-foreground">
                      ATOM tokens are the currency used within the BrahmAIstra ecosystem. They are used to pay for 
                      model usage, and developers earn ATOM tokens when their models are used.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Developer Earnings</h3>
                    <p className="text-muted-foreground">
                      When users pay to use your model, 90% of the ATOM tokens go directly to your wallet. 
                      Earnings are calculated and credited in real-time with each API call.
                    </p>
                    
                    <div className="bg-secondary/20 rounded-lg p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <Coins className="h-4 w-4 mr-2 text-atom" />
                        Revenue Split Example
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>User pays for model usage</span>
                          <span className="font-medium">100 ATOM</span>
                        </div>
                        <div className="flex justify-between items-center text-green-500">
                          <span>Developer receives (90%)</span>
                          <span className="font-medium">90 ATOM</span>
                        </div>
                        <div className="flex justify-between items-center text-muted-foreground">
                          <span>Platform fee (10%)</span>
                          <span className="font-medium">10 ATOM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Withdrawals</h3>
                    <p className="text-muted-foreground">
                      You can withdraw your earned ATOM tokens to your bank account or cryptocurrency wallet at any time. 
                      The minimum withdrawal amount is 100 ATOM, and processing typically takes 1-2 business days.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Token Value & Pricing Strategy</h3>
                    <p className="text-muted-foreground">
                      1 ATOM is approximately equivalent to ₹10 INR. When pricing your models, consider the 
                      complexity of your model, compute resources required, and market demand. Our pricing analytics 
                      can help you optimize your pricing strategy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Model Management Tab */}
            <TabsContent value="model-management" className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Model Management Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Monetization Types</h3>
                    <p className="text-muted-foreground mb-4">
                      BrahmAIstra offers three primary ways to monetize your AI models:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-secondary/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Time-Based Rental</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm">
                          <p>Users pay for access to your model for a limited time period (hourly, daily, weekly, etc).</p>
                          <p className="mt-2 text-atom font-medium">Best for: General-purpose models with ongoing value</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-secondary/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Lifetime Access</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm">
                          <p>Users pay a one-time fee for perpetual access to your model.</p>
                          <p className="mt-2 text-atom font-medium">Best for: Specialized models with evergreen value</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-secondary/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Ownership Sale</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm">
                          <p>Transfer complete ownership and rights of your model to the buyer.</p>
                          <p className="mt-2 text-atom font-medium">Best for: Premium, unique models with high value</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Usage Controls</h3>
                    <p className="text-muted-foreground">
                      Set limits and controls on how your model can be used:
                    </p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Set maximum daily API calls per user</li>
                      <li>Implement rate limiting to prevent abuse</li>
                      <li>Set input/output size restrictions</li>
                      <li>Define allowed use cases and prohibited uses</li>
                      <li>Implement IP restrictions for enterprise clients</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Analytics & Reporting</h3>
                    <p className="text-muted-foreground mb-4">
                      Track your model's performance and usage with our comprehensive analytics dashboard:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center bg-secondary/20 p-4 rounded-lg">
                        <BarChart className="h-8 w-8 text-atom mb-2" />
                        <h4 className="font-medium">Usage Statistics</h4>
                        <p className="text-sm text-center text-muted-foreground">Track API calls, user growth, and usage patterns</p>
                      </div>
                      
                      <div className="flex flex-col items-center bg-secondary/20 p-4 rounded-lg">
                        <Coins className="h-8 w-8 text-atom mb-2" />
                        <h4 className="font-medium">Revenue Tracking</h4>
                        <p className="text-sm text-center text-muted-foreground">Monitor earnings, sales trends, and projections</p>
                      </div>
                      
                      <div className="flex flex-col items-center bg-secondary/20 p-4 rounded-lg">
                        <Package className="h-8 w-8 text-atom mb-2" />
                        <h4 className="font-medium">Performance Metrics</h4>
                        <p className="text-sm text-center text-muted-foreground">View response times, error rates, and more</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Versioning & Updates</h3>
                    <p className="text-muted-foreground">
                      BrahmAIstra supports model versioning, allowing you to push updates to your models without 
                      disrupting existing users. You can publish new versions with improvements while maintaining 
                      backward compatibility.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
