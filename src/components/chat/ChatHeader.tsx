
import React from "react";

interface ChatHeaderProps {
  username: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ username }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Good afternoon, {username}.</h1>
      <h2 className="text-2xl text-gray-600 mt-1">How can I help you today?</h2>
    </div>
  );
};

export default ChatHeader;
