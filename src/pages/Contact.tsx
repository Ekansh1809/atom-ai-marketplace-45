
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
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
                <span className="text-glow text-atom">Contact Us</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                📩 Got questions or want to partner? Email us at support@brahmaistra.ai or fill the form below.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Form & Info */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-atom/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-atom" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@brahmaistra.ai</p>
                      <p className="text-muted-foreground">partnerships@brahmaistra.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-atom/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-atom" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91 (80) 4567-8900</p>
                      <p className="text-muted-foreground">Mon-Fri, 9am-6pm IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-atom/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-atom" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">
                        AI Innovation Park, Tech Corridor
                      </p>
                      <p className="text-muted-foreground">
                        Bengaluru 560103, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Connect With Us</h3>
                    <div className="flex space-x-3">
                      <a href="#" className="h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-atom/20 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-atom/20 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-atom/20 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-atom/20 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-atom hover:bg-atom-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about contacting us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How quickly will I get a response?</h3>
                  <p className="text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 business hours. For urgent matters, 
                    please mark your email as "Urgent" or contact us by phone.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How can I report a technical issue?</h3>
                  <p className="text-muted-foreground">
                    For technical issues, please include details such as your browser, device, and 
                    steps to reproduce the problem. Screenshots are always helpful.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I schedule a demo?</h3>
                  <p className="text-muted-foreground">
                    Yes! Please contact us through the form or email with "Demo Request" in the subject line. 
                    We'd be happy to schedule a personalized demonstration.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do you offer partnership opportunities?</h3>
                  <p className="text-muted-foreground">
                    We're always open to strategic partnerships. Please email partnerships@brahmaistra.ai 
                    with details about your organization and partnership ideas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Import at the top of the file
import { Twitter, Linkedin, Github, MessageCircle, Loader2 } from "lucide-react";

export default Contact;
