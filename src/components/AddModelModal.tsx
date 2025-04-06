
import React from 'react';
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

type ModelMonetizationType = 'time-based' | 'lifetime' | 'ownership';

interface AddModelFormValues {
  name: string;
  category: string;
  monetizationType: ModelMonetizationType;
  price: number;
  description: string;
  usageLimit?: number;
  active: boolean;
}

interface AddModelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onModelAdded: (model: any) => void;
}

const generateApiKey = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'bai_';
  for (let i = 0; i < 24; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const AddModelModal: React.FC<AddModelModalProps> = ({ open, onOpenChange, onModelAdded }) => {
  const { toast } = useToast();
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<AddModelFormValues>({
    defaultValues: {
      name: '',
      category: 'Text Generation',
      monetizationType: 'time-based',
      price: 5,
      description: '',
      usageLimit: undefined,
      active: true
    }
  });
  
  const monetizationType = watch('monetizationType');
  
  const categories = [
    "Text Generation",
    "Image Generation",
    "Code Generation",
    "Audio Generation",
    "Data Analysis",
    "Music Generation",
    "NLP",
    "Finance",
    "Healthcare",
    "Computer Vision"
  ];
  
  const onSubmit = (data: AddModelFormValues) => {
    const apiKey = generateApiKey();
    
    const newModel = {
      id: Date.now(),
      name: data.name,
      category: data.category,
      monetizationType: data.monetizationType,
      price: data.price,
      description: data.description,
      apiKey: apiKey,
      usageLimit: data.usageLimit,
      active: data.active,
      usageCount: 0,
      rating: 0
    };
    
    onModelAdded(newModel);
    reset();
    
    toast({
      title: "Model added successfully",
      description: "Your new AI model has been published to the marketplace",
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add New AI Model</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Model Name</Label>
            <Input 
              id="name" 
              placeholder="e.g., TextGenius Pro" 
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-sm text-red-500">Model name is required</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select 
              onValueChange={(value) => setValue("category", value)} 
              defaultValue="Text Generation"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="monetizationType">Monetization Type</Label>
            <Select 
              onValueChange={(value) => setValue("monetizationType", value as ModelMonetizationType)} 
              defaultValue="time-based"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select monetization type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="time-based">Time-Based Rental</SelectItem>
                <SelectItem value="lifetime">Lifetime Rental</SelectItem>
                <SelectItem value="ownership">Complete Ownership Sale</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">
              {monetizationType === 'time-based' 
                ? 'Rental Price (ATOM per 24 hours)' 
                : monetizationType === 'lifetime' 
                  ? 'Lifetime Access Price (ATOM)' 
                  : 'Sale Price (ATOM)'}
            </Label>
            <Input 
              id="price" 
              type="number" 
              {...register("price", { required: true, min: 1 })}
            />
            {errors.price && <p className="text-sm text-red-500">Valid price is required</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description & Documentation</Label>
            <Textarea 
              id="description" 
              placeholder="Describe your model's capabilities and documentation links..."
              rows={4}
              {...register("description", { required: true })}
            />
            {errors.description && <p className="text-sm text-red-500">Description is required</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="usageLimit">Usage Limit (Optional)</Label>
            <Input 
              id="usageLimit" 
              type="number" 
              placeholder="Daily call limit (leave empty for unlimited)"
              {...register("usageLimit", { min: 0 })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="active">Model Status (Active)</Label>
            <Switch 
              id="active" 
              defaultChecked={true}
              onCheckedChange={(checked) => setValue("active", checked)}
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-atom hover:bg-atom-dark">
              Publish Model
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddModelModal;
