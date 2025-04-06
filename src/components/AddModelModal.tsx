
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Package, ChevronDown } from "lucide-react";

// Define the form schema with zod
const formSchema = z.object({
  name: z.string().min(3, {
    message: "Model name must be at least 3 characters."
  }),
  category: z.string().min(1, {
    message: "Please select a category."
  }),
  price: z.coerce.number().min(1, {
    message: "Price must be at least 1 ATOM."
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters."
  }),
  documentation: z.string().url({
    message: "Please provide a valid URL for documentation."
  }).or(z.string().length(0)),
  usageLimit: z.coerce.number().int().min(0).optional(),
  active: z.boolean().default(true)
});

type FormValues = z.infer<typeof formSchema>;

interface AddModelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onModelAdded: (model: any) => void;
}

// List of available categories
const categories = [
  "Text Generation",
  "Code Generation",
  "Image Generation",
  "NLP",
  "Computer Vision",
  "Generative AI",
  "Finance",
  "Healthcare",
  "Data Analysis"
];

const AddModelModal = ({ open, onOpenChange, onModelAdded }: AddModelModalProps) => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = React.useState("");
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      price: 5,
      description: "",
      documentation: "",
      usageLimit: undefined,
      active: true
    }
  });

  const generateApiKey = () => {
    return 'bai_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const onSubmit = (values: FormValues) => {
    // Generate a unique API key
    const apiKey = generateApiKey();
    
    // Create the new model object
    const newModel = {
      id: Date.now(),
      name: values.name,
      category: values.category,
      price: values.price,
      description: values.description,
      documentation: values.documentation,
      usageLimit: values.usageLimit || null,
      active: values.active,
      apiKey: apiKey,
      usageCount: 0,
      rating: 0
    };
    
    // Pass the new model to the parent component
    onModelAdded(newModel);
    
    // Show success message
    toast({
      title: "Model added successfully",
      description: `${values.name} has been added to the marketplace.`,
    });
    
    // Close the modal
    onOpenChange(false);
    
    // Reset the form
    form.reset();
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    form.setValue("category", category);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Package className="h-5 w-5 text-atom" />
            Add New AI Model
          </DialogTitle>
          <DialogDescription>
            Fill in the details below to publish your AI model on the BrahmAIstra marketplace.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Model Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter model name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Category Selection */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          {selectedCategory || "Select category"}
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {categories.map((category) => (
                          <DropdownMenuItem
                            key={category}
                            onClick={() => selectCategory(category)}
                          >
                            {category}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Token Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Token Price (ATOM)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1" 
                      placeholder="5" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Cost per API call in ATOM tokens
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your AI model's capabilities and use cases" 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Documentation Link */}
            <FormField
              control={form.control}
              name="documentation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Documentation URL (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://docs.example.com" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Link to API documentation, Swagger or Postman collection
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Usage Limit */}
            <FormField
              control={form.control}
              name="usageLimit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usage Limit (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      placeholder="No limit" 
                      {...field}
                      value={field.value || ''}
                      onChange={(e) => {
                        const value = e.target.value === '' ? undefined : parseInt(e.target.value);
                        field.onChange(value);
                      }} 
                    />
                  </FormControl>
                  <FormDescription>
                    Maximum number of API calls per day (leave empty for unlimited)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Status Toggle */}
            <FormField
              control={form.control}
              name="active"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Model Status</FormLabel>
                    <FormDescription>
                      Enable to make this model available in the marketplace
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-green-500"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-atom hover:bg-atom-dark"
              >
                Publish Model
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddModelModal;
