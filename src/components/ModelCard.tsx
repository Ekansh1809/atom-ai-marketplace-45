
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Tag, Users } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

export type ModelType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price: number;
  rating: number;
  usageCount: number;
  developer: {
    name: string;
    id: string;
  };
};

interface ModelCardProps {
  model: ModelType;
  featured?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, featured = false }) => {
  const { toast } = useToast();
  
  const handleRentModel = () => {
    toast({
      title: "Rental request processed",
      description: `You've rented ${model.title} for ${model.price} ATOM tokens`,
    });
  };

  return (
    <Card className={`cyberpunk-card transition-all duration-300 hover:-translate-y-1 overflow-hidden ${featured ? 'border-atom/50' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={model.imageUrl} 
          alt={model.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-3 left-3 bg-atom text-white text-xs font-bold px-2 py-1 rounded-md">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
          <Star className="h-3 w-3 text-yellow-400 mr-1" />
          {model.rating.toFixed(1)}
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg line-clamp-1">{model.title}</h3>
          <div className="px-2 py-1 rounded bg-secondary/50 text-sm font-medium text-atom">
            {model.price} ATOM
          </div>
        </div>
        <div className="text-xs text-muted-foreground">by {model.developer.name}</div>
      </CardHeader>
      
      <CardContent className="p-4 py-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {model.description}
        </p>
        
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Tag className="h-3 w-3 mr-1" />
            {model.category}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Users className="h-3 w-3 mr-1" />
            {model.usageCount.toLocaleString()} uses
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-atom hover:bg-atom-dark" 
          size="sm"
          onClick={handleRentModel}
        >
          Rent Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModelCard;
