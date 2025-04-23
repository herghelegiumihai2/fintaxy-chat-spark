
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, role, timestamp }) => {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex ${role === "user" ? "flex-row-reverse" : "flex-row"} max-w-[80%]`}>
        <div className="flex-shrink-0">
          <Avatar className={role === "user" ? "ml-2" : "mr-2"}>
            <AvatarFallback>
              {role === "user" ? "U" : "AI"}
            </AvatarFallback>
            {role === "assistant" && (
              <AvatarImage src="/lovable-uploads/9d8274fd-e2f4-48a3-8078-f4fe79e69880.png" />
            )}
          </Avatar>
        </div>
        <div
          className={`rounded-lg p-3 ${
            role === "user"
              ? "bg-fintaxy-purple text-white"
              : "bg-white text-gray-800 border border-gray-200"
          }`}
        >
          <p className="text-sm">{content}</p>
          {timestamp && <p className="text-xs mt-1 opacity-70">{timestamp}</p>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
