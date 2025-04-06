
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModelCard, { ModelType } from './ModelCard';

// Sample model data
const sampleModels: ModelType[] = [
  {
    id: '1',
    title: 'TextGenius Pro',
    description: 'Advanced text generation model with creative writing capabilities',
    imageUrl: 'https://images.unsplash.com/photo-1655720406483-fd769f9f5bbc?q=80&w=800',
    category: 'Text Generation',
    price: 5,
    rating: 4.8,
    usageCount: 12648,
    developer: {
      name: 'AI Labs Inc.',
      id: 'dev1'
    }
  },
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
];

const categories = [
  "All",
  "Text Generation",
  "Image Generation",
  "Code Generation",
  "Audio Generation",
  "Data Analysis", 
  "Music Generation"
];

interface ModelSectionProps {
  title: string;
  description?: string;
}

const ModelSection: React.FC<ModelSectionProps> = ({ 
  title, 
  description 
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredModels = activeCategory === "All" 
    ? sampleModels 
    : sampleModels.filter(model => model.category === activeCategory);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button variant="outline" className="neon-border">
            View All
          </Button>
        </div>
      </div>
      
      {/* Category Filter */}
      <div className="mb-8 overflow-x-auto scrollbar-none">
        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="bg-secondary/30 border border-border">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-atom data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      {/* Model Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model, index) => (
          <ModelCard 
            key={model.id} 
            model={model} 
            featured={index === 0} 
          />
        ))}
      </div>
    </section>
  );
};

export default ModelSection;
