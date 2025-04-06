
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface CodeAssistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

const CodeAssistDialog: React.FC<CodeAssistDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi! I'm Code Assist, an AI coding assistant. Ask me any coding question about Python or C++, and I'll help you with code snippets, explanations, or debugging tips."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      role: "user",
      text: inputValue
    };
    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsSubmitting(true);
    
    // Simulate AI response
    setTimeout(() => {
      // This is where you would normally call an API
      const aiResponse: ChatMessage = {
        role: "assistant",
        text: generateAIResponse(inputValue)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsSubmitting(false);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    // This is a very basic simulation - in a real app, you'd call an AI API
    if (userInput.toLowerCase().includes("python")) {
      return "```python\n# Here's a simple Python example\ndef hello_world():\n    print('Hello, World!')\n\nhello_world()\n```\n\nThis is a basic Python function that prints 'Hello, World!' when called.";
    } else if (userInput.toLowerCase().includes("c++")) {
      return "```cpp\n// Here's a simple C++ example\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}\n```\n\nThis is a basic C++ program that prints 'Hello, World!' to the console.";
    } else {
      return "I can help with Python and C++ questions. Could you provide more details about what you're trying to code?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Code Assist</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-4 border rounded-md">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-atom text-white' 
                    : 'bg-secondary/40 text-foreground'
                }`}
              >
                <div className="whitespace-pre-wrap" style={{ overflowWrap: 'break-word' }}>
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          {isSubmitting && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-secondary/40">
                <div className="animate-pulse">Thinking...</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Textarea 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask a coding question..."
            className="flex-1 min-h-[60px] max-h-[120px]"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isSubmitting || !inputValue.trim()}
            size="icon"
            className="bg-atom hover:bg-atom-dark"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CodeAssistDialog;
