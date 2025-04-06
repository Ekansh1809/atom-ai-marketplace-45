import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ModelCard, { ModelType } from "@/components/ModelCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal, X } from "lucide-react";

const sampleModels: ModelType[] = [
  {
    id: '2',
    title: 'ImageCraft AI',
    description: 'Create stunning images from text prompts with fine details',
    imageUrl: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=800',
    category: 'Image Generation',
    price: 12,
    rating: 4.9,
    usageCount: 23140,
    developer: {
      name: 'PixelMinds',
      id: 'dev2'
    }
  },
  {
    id: '3',
    title: 'CodeAssist',
    description: 'AI-powered coding assistant that helps you write clean code',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800',
    category: 'Code Generation',
    price: 8,
    rating: 4.7,
    usageCount: 9821,
    developer: {
      name: 'DevAI Solutions',
      id: 'dev3'
    }
  },
  {
    id: '4',
    title: 'VoiceClone Master',
    description: 'Clone voices with just a 5-second sample for natural TTS',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800',
    category: 'Audio Generation',
    price: 15,
    rating: 4.6,
    usageCount: 6248,
    developer: {
      name: 'SoundAI',
      id: 'dev4'
    }
  },
  {
    id: '5',
    title: 'DataAnalyst Pro',
    description: 'AI-powered data analysis tool for business intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    category: 'Data Analysis',
    price: 10,
    rating: 4.5,
    usageCount: 4567,
    developer: {
      name: 'DataMinds',
      id: 'dev5'
    }
  },
  {
    id: '6',
    title: 'MusicComposer',
    description: 'Create original music compositions in any style',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800',
    category: 'Music Generation',
    price: 7,
    rating: 4.4,
    usageCount: 5897,
    developer: {
      name: 'HarmonyAI',
      id: 'dev6'
    }
  },
  {
    id: '7',
    title: 'VideoGenAI',
    description: 'Generate short video clips from text descriptions',
    imageUrl: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=800',
    category: 'Video Generation',
    price: 20,
    rating: 4.3,
    usageCount: 3245,
    developer: {
      name: 'VideoLabs',
      id: 'dev7'
    }
  },
  {
    id: '8',
    title: '3D Model Creator',
    description: 'Create 3D models from text descriptions or 2D images',
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800',
    category: '3D Generation',
    price: 18,
    rating: 4.2,
    usageCount: 2145,
    developer: {
      name: '3D Minds',
      id: 'dev8'
    }
  },
  {
    id: '9',
    title: 'ChatExpert',
    description: 'Advanced conversational AI for customer service applications',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800',
    category: 'Text Generation',
    price: 6,
    rating: 4.7,
    usageCount: 7823,
    developer: {
      name: 'Chat Labs',
      id: 'dev9'
    }
  },
];

const categories = [
  "All",
  "Text Generation",
  "Image Generation",
  "Video Generation",
  "Audio Generation",
  "Code Generation",
  "Data Analysis", 
  "Music Generation",
  "3D Generation"
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "rated", label: "Highest Rated" },
  { value: "price_low", label: "Price: Low to High" },
  { value: "price_high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredModels = sampleModels.filter((model) => {
    const matchesSearch = model.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          model.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || model.category === selectedCategory;
    const matchesPrice = model.price >= priceRange[0] && model.price <= priceRange[1];
    const matchesRating = model.rating >= minRating;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });
  
  const sortedModels = [...filteredModels].sort((a, b) => {
    switch (sortBy) {
      case "popular": return b.usageCount - a.usageCount;
      case "rated": return b.rating - a.rating;
      case "price_low": return a.price - b.price;
      case "price_high": return b.price - a.price;
      case "newest": return a.id > b.id ? -1 : 1;
      default: return 0;
    }
  });
  
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("popular");
    setPriceRange([0, 20]);
    setMinRating(0);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore AI Models</h1>
              <p className="text-muted-foreground mb-8">
                Find the perfect AI model for your needs from our vast marketplace
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search for AI models..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-6 bg-background/50 backdrop-blur-sm border-border"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="md:max-w-md overflow-x-auto flex-shrink-0">
              <Tabs 
                value={selectedCategory} 
                onValueChange={setSelectedCategory}
                className="w-max md:w-full"
              >
                <TabsList className="bg-secondary/30 h-10">
                  {categories.slice(0, 5).map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="data-[state=active]:bg-atom data-[state=active]:text-white"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                  <TabsTrigger 
                    value="more"
                    onClick={() => setShowFilters(true)}
                  >
                    More...
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-secondary/30 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-atom"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className={showFilters ? "border-atom text-atom" : ""}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {sortedModels.length} results
              </span>
            </div>
          </div>
          
          {showFilters && (
            <div className="mb-8 glass-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Advanced Filters</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowFilters(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-secondary/30 border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-atom"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range: {priceRange[0]} - {priceRange[1]} ATOM
                  </label>
                  <Slider
                    defaultValue={[0, 20]}
                    min={0}
                    max={20}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Minimum Rating: {minRating}★
                  </label>
                  <Slider
                    defaultValue={[0]}
                    min={0}
                    max={5}
                    step={0.5}
                    value={[minRating]}
                    onValueChange={([value]) => setMinRating(value)}
                    className="py-4"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button variant="outline" size="sm" onClick={handleResetFilters} className="mr-2">
                  Reset Filters
                </Button>
                <Button size="sm" className="bg-atom hover:bg-atom-dark" onClick={() => setShowFilters(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
          
          {sortedModels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No models found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
              <Button onClick={handleResetFilters}>Reset Filters</Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
