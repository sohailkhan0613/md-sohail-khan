
import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Types for chat messages
interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Initial greeting message
const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    content: "👋 Hi there! I'm Sohail's virtual assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

// Common questions and responses
const faqs = [
  {
    question: "What is your experience with no-code tools?",
    answer: "I have extensive experience with tools like Kore.ai, Airtable, and Zapier. I've built over 10 conversational chatbots and various automation systems for enterprise clients."
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes! I'm currently available for both full-time roles and freelance projects. You can check my availability status on the 'For Recruiters' page or contact me directly."
  },
  {
    question: "What kind of projects have you worked on?",
    answer: "I've developed enterprise-level chatbots, automation systems, and internal tools for major clients. You can explore my portfolio page to see detailed case studies of my projects."
  },
  {
    question: "What programming languages do you know?",
    answer: "I specialize in JavaScript, Python, and Node.js, with expertise in building conversational AI and automation solutions."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me through the contact form on this website, email me directly at sk581470@gmail.com, or connect with me on LinkedIn."
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Play sound effect when opening chat
    if (!isOpen) {
      const audio = new Audio("/message-sound.mp3");
      audio.volume = 0.3;
      audio.play().catch(error => console.error("Audio playback error:", error));
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI thinking with typing indicator
    setTimeout(() => {
      const botResponse = generateResponse(input.trim());
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  // Simple response generation based on input matching
  const generateResponse = (userInput: string): string => {
    const normalizedInput = userInput.toLowerCase();
    
    // Check for matching FAQ
    for (const faq of faqs) {
      if (normalizedInput.includes(faq.question.toLowerCase())) {
        return faq.answer;
      }
    }
    
    // Handle common greetings
    if (normalizedInput.match(/^(hi|hello|hey|howdy)/i)) {
      return "Hello! How can I assist you today? Feel free to ask about Sohail's experience, skills, or availability.";
    }
    
    // Handle goodbye
    if (normalizedInput.match(/(bye|goodbye|see you|farewell)/i)) {
      return "Thank you for chatting! Feel free to reach out anytime you have questions.";
    }
    
    // Handle thanks
    if (normalizedInput.match(/(thanks|thank you|thx)/i)) {
      return "You're welcome! Is there anything else I can help with?";
    }
    
    // Handle availability inquiries
    if (normalizedInput.match(/(available|hire|hiring|work with|employ|job)/i)) {
      return "Sohail is currently available for both full-time roles and freelance projects. You can find more details on the 'For Recruiters' page or schedule a call through the contact page.";
    }
    
    // Handle skills inquiries
    if (normalizedInput.match(/(skills|technologies|tech stack|tools|languages)/i)) {
      return "Sohail specializes in no-code development, conversational AI, and automation. His tech stack includes JavaScript, Python, Node.js, Kore.ai, and various cloud platforms. Check out the Skills section for more details!";
    }
    
    // Default response
    return "That's an interesting question! While I'm just a simple assistant, Sohail would be happy to discuss this in detail. Would you like to contact him directly or explore specific sections of his portfolio?";
  };

  return (
    <>
      {/* Chat toggle button - fixed at bottom right */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-luxury-gold text-luxury-navy p-3 rounded-full shadow-lg hover:bg-luxury-gold/90 transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 md:w-96 shadow-lg border border-luxury-gold/30 bg-luxury-navy/95 backdrop-blur-sm text-white animate-slide-in-right">
          <CardHeader className="bg-gradient-to-r from-luxury-gold to-luxury-purple p-4 text-luxury-navy font-bold flex flex-row justify-between items-center">
            <span>Chat with Sohail's Assistant</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-6 w-6 rounded-full p-0 text-luxury-navy hover:bg-luxury-gold/20"
            >
              <X size={16} />
            </Button>
          </CardHeader>
          
          <CardContent className="p-4 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-luxury-gold/30 scrollbar-track-luxury-navy/20">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-luxury-gold text-luxury-navy"
                        : "bg-luxury-navy/80 border border-luxury-gold/20 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-luxury-navy/80 border border-luxury-gold/20 text-white rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-luxury-gold animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-luxury-gold animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-luxury-gold animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-2 border-t border-luxury-gold/20">
            <form onSubmit={handleSend} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-luxury-navy/80 border-luxury-gold/30 text-white focus-visible:ring-luxury-gold/50"
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy"
              >
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
