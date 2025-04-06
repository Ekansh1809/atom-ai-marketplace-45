
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { BarChart, Activity, Wallet, Settings, History, Edit, Star, Package, Users } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { toast } = useToast();
  const [activeRole, setActiveRole] = useState<'user' | 'developer'>('user');
  
  // Mock data - would be fetched from a backend in a real application
  const userData = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    atomBalance: 1200,
    joinDate: 'January 2025',
    usedModels: 24,
    favoriteCategory: 'Text Generation'
  };
  
  const developerData = {
    earnings: 4850,
    models: 5,
    activeModels: 3,
    totalUsage: 1265,
    averageRating: 4.7,
    topModel: 'TextGenius Pro'
  };
  
  const recentTransactions = [
    { id: 1, date: '2025-04-05', model: 'TextGenius Pro', amount: -5, type: 'expense' },
    { id: 2, date: '2025-04-04', model: 'ImageCraft AI', amount: -12, type: 'expense' },
    { id: 3, date: '2025-04-02', model: 'Atom Rewards', amount: 50, type: 'income' },
    { id: 4, date: '2025-04-01', model: 'CodeAssist', amount: -8, type: 'expense' },
  ];
  
  const [developerModels, setDeveloperModels] = useState([
    { 
      id: 1, 
      name: 'TextGenius Pro', 
      category: 'Text Generation',
      price: 5,
      active: true,
      usageCount: 8640,
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'CodeAssist+', 
      category: 'Code Generation',
      price: 8,
      active: true,
      usageCount: 3105,
      rating: 4.6
    },
    { 
      id: 3, 
      name: 'Summarizer Pro', 
      category: 'Text Generation',
      price: 3,
      active: true,
      usageCount: 2340,
      rating: 4.5
    },
    { 
      id: 4, 
      name: 'Legacy Parser', 
      category: 'Data Analysis',
      price: 6,
      active: false,
      usageCount: 1250,
      rating: 4.2
    },
    { 
      id: 5, 
      name: 'Experimental NLP', 
      category: 'Text Generation',
      price: 10,
      active: false,
      usageCount: 125,
      rating: 3.9
    },
  ]);

  // Function to toggle the active status of a model
  const toggleModelStatus = (modelId: number) => {
    setDeveloperModels(models => 
      models.map(model => 
        model.id === modelId 
          ? { ...model, active: !model.active } 
          : model
      )
    );

    // Find the model that was toggled to show in toast
    const model = developerModels.find(m => m.id === modelId);
    if (model) {
      const newStatus = !model.active;
      toast({
        title: `Model status updated`,
        description: `${model.name} is now ${newStatus ? 'active' : 'inactive'}`,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-2 border-atom">
              <AvatarImage src={userData.avatarUrl} />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <p className="text-muted-foreground">{userData.email}</p>
              <div className="flex items-center mt-2 text-sm">
                <span>Member since {userData.joinDate}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-secondary/50 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-atom animate-pulse"></div>
            <span className="font-medium">{userData.atomBalance} ATOM</span>
            <Button size="sm" className="bg-atom hover:bg-atom-dark">Add Tokens</Button>
          </div>
        </div>
        
        {/* Role Tabs */}
        <Tabs 
          defaultValue={activeRole} 
          onValueChange={(value) => setActiveRole(value as 'user' | 'developer')}
          className="mb-8"
        >
          <TabsList className="bg-secondary/30 grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger 
              value="user" 
              className="data-[state=active]:bg-atom data-[state=active]:text-white"
            >
              User Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="developer"
              className="data-[state=active]:bg-atom data-[state=active]:text-white"
            >
              Developer Dashboard
            </TabsTrigger>
          </TabsList>
          
          {/* User Dashboard */}
          <TabsContent value="user" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-secondary/10 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Activity className="mr-2 h-4 w-4 text-atom" />
                    Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userData.usedModels} models</div>
                  <p className="text-xs text-muted-foreground">Used this month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Star className="mr-2 h-4 w-4 text-atom" />
                    Favorite Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userData.favoriteCategory}</div>
                  <p className="text-xs text-muted-foreground">Based on usage patterns</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Wallet className="mr-2 h-4 w-4 text-atom" />
                    Token Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userData.atomBalance} ATOM</div>
                  <p className="text-xs text-muted-foreground">Available tokens</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Transactions */}
            <Card className="bg-secondary/10 border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <History className="mr-2 h-5 w-5 text-atom" />
                  Recent Transactions
                </CardTitle>
                <CardDescription>Your latest ATOM token activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between pb-4 last:pb-0 last:border-0 border-b border-border">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                          {transaction.type === 'income' ? 
                            <span className="text-green-500">+</span> : 
                            <span className="text-red-500">-</span>
                          }
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">{transaction.model}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className={`font-medium ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.type === 'income' ? '+' : ''}{transaction.amount} ATOM
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Additional User Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button variant="outline" className="flex items-center justify-center py-8 h-auto">
                <div className="flex flex-col items-center">
                  <Star className="h-6 w-6 mb-2 text-atom" />
                  <span>My Favorites</span>
                </div>
              </Button>
              
              <Button variant="outline" className="flex items-center justify-center py-8 h-auto">
                <div className="flex flex-col items-center">
                  <Package className="h-6 w-6 mb-2 text-atom" />
                  <span>Purchased Models</span>
                </div>
              </Button>
              
              <Button variant="outline" className="flex items-center justify-center py-8 h-auto">
                <div className="flex flex-col items-center">
                  <Settings className="h-6 w-6 mb-2 text-atom" />
                  <span>Account Settings</span>
                </div>
              </Button>
            </div>
          </TabsContent>
          
          {/* Developer Dashboard */}
          <TabsContent value="developer" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-secondary/10 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Wallet className="mr-2 h-4 w-4 text-atom" />
                    Total Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{developerData.earnings} ATOM</div>
                  <p className="text-xs text-muted-foreground">Lifetime earnings</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Package className="mr-2 h-4 w-4 text-atom" />
                    Active Models
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{developerData.activeModels}/{developerData.models}</div>
                  <p className="text-xs text-muted-foreground">Currently available</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Users className="mr-2 h-4 w-4 text-atom" />
                    Total Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{developerData.totalUsage}</div>
                  <p className="text-xs text-muted-foreground">Across all models</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Add New Model Button */}
            <div className="flex justify-end mb-4">
              <Button className="bg-atom hover:bg-atom-dark">
                Add New Model
              </Button>
            </div>
            
            {/* Developer Models */}
            <Card className="bg-secondary/10 border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Package className="mr-2 h-5 w-5 text-atom" />
                  Your AI Models
                </CardTitle>
                <CardDescription>Manage your published AI models</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <div className="grid grid-cols-12 bg-secondary/20 p-4 text-sm font-medium">
                    <div className="col-span-4">Model</div>
                    <div className="col-span-2">Category</div>
                    <div className="col-span-1">Price</div>
                    <div className="col-span-1">Rating</div>
                    <div className="col-span-2">Usage</div>
                    <div className="col-span-2">Status</div>
                  </div>
                  
                  <div className="divide-y divide-border">
                    {developerModels.map((model) => (
                      <div key={model.id} className="grid grid-cols-12 items-center p-4">
                        <div className="col-span-4 font-medium flex items-center">
                          {model.name}
                          <Button variant="ghost" size="icon" className="ml-2 h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="col-span-2 text-sm">{model.category}</div>
                        <div className="col-span-1 text-sm">{model.price} ATOM</div>
                        <div className="col-span-1 text-sm flex items-center">
                          {model.rating} <Star className="h-3 w-3 text-yellow-500 ml-1" />
                        </div>
                        <div className="col-span-2 text-sm">{model.usageCount}</div>
                        <div className="col-span-2 flex items-center gap-2">
                          <Switch 
                            checked={model.active} 
                            onCheckedChange={() => toggleModelStatus(model.id)}
                            className="data-[state=checked]:bg-green-500"
                          />
                          <Badge variant={model.active ? "default" : "outline"} className={model.active ? "bg-green-500/20 text-green-500 hover:bg-green-500/30" : ""}>
                            {model.active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Model Performance Chart Placeholder */}
            <Card className="bg-secondary/10 border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BarChart className="mr-2 h-5 w-5 text-atom" />
                  Model Performance
                </CardTitle>
                <CardDescription>Usage and earnings over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Performance chart would be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
