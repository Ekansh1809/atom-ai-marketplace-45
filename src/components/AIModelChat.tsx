
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface AIModelChatProps {
  isOpen: boolean;
  onClose: () => void;
  isRented: boolean;
}

const AI_SYSTEM_PROMPT = "You are Code Assist, an AI coding assistant on BrahmAIstra. You help users with coding questions in Python, JavaScript, and C++. Only respond if the user has successfully rented this AI model. If the user tries to use the tool without renting, politely tell them to rent the model first to access this feature. Once rented, answer coding questions with helpful code, explanations, and debugging tips. Be friendly, helpful, and beginner-friendly.";

const AIModelChat: React.FC<AIModelChatProps> = ({ isOpen, onClose, isRented }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // If not rented, show rental message
    if (!isRented) {
      setMessages([
        ...messages, 
        { role: 'user', text: inputMessage },
        { 
          role: 'assistant', 
          text: "Please rent this AI model first to access the Code Assist feature. Click 'Rent Now' to get started!" 
        }
      ]);
      setInputMessage('');
      return;
    }

    // Normal chat logic would go here
    const newMessages = [
      ...messages, 
      { role: 'user', text: inputMessage },
      { 
        role: 'assistant', 
        text: "I'm your Code Assist AI. How can I help you with your coding problem today?" 
      }
    ];

    setMessages(newMessages);
    setInputMessage('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Code Assist AI</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-secondary/10 rounded-lg">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg max-w-[80%] ${
                message.role === 'user' 
                  ? 'bg-primary text-primary-foreground self-end ml-auto' 
                  : 'bg-secondary text-secondary-foreground self-start'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        
        <div className="flex items-center space-x-2 mt-4">
          <Input 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your coding question..."
            className="flex-1"
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIModelChat;
