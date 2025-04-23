
import React, { useState } from "react";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage = {
      role: "user" as const,
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response (in real app, call your API here)
    setTimeout(() => {
      const aiResponse = {
        role: "assistant" as const,
        content: "I'm processing your request. Let me help you with that.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto px-4">
      <div className="pt-12">
        <ChatHeader username="Denis" />
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-2">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            role={msg.role}
            content={msg.content}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
      
      <div className="pb-8 pt-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;
