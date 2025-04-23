
import React, { useState } from "react";
import { Mic, Paperclip, Eye, EyeOff, Send, FileText, FilePlus, FileSearch, Zap, Search, User, Folder, Plus, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface WorkspaceItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const quickActions = [
  { id: "anaf", label: "ANAF", icon: <FileText className="h-4 w-4 mr-2" /> },
  { id: "invoice", label: "Create Invoice", icon: <FilePlus className="h-4 w-4 mr-2" /> },
  { id: "process", label: "Process Documents", icon: <FileSearch className="h-4 w-4 mr-2" /> },
  { id: "generate", label: "Generate", icon: <Zap className="h-4 w-4 mr-2" /> },
  { id: "analyze", label: "Analyze", icon: <Search className="h-4 w-4 mr-2" /> },
  { id: "human", label: "Human Accountant", icon: <User className="h-4 w-4 mr-2" /> },
  { id: "workspace", label: "Workspace", icon: <Folder className="h-4 w-4 mr-2" /> },
];

const workspaces: WorkspaceItem[] = [
  { id: "front-dev", name: "Fintaxy FrontDevelopment" }
];

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [actionsVisible, setActionsVisible] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Grok 3");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="relative w-full bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
              <Mic className="h-5 w-5 text-fintaxy-gray" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
              <Paperclip className="h-5 w-5 text-fintaxy-gray" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full h-8 w-8"
              onClick={() => setActionsVisible(!actionsVisible)}
            >
              {actionsVisible ? 
                <EyeOff className="h-5 w-5 text-fintaxy-gray" /> : 
                <Eye className="h-5 w-5 text-fintaxy-gray" />
              }
            </Button>
          </div>
          
          <div className="flex-1 mx-2">
            <textarea
              className="w-full h-10 py-2 px-1 resize-none border-0 focus:ring-0 focus:outline-none text-base"
              placeholder="What do you want to know?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative inline-block text-left">
              <Button
                variant="outline"
                size="sm"
                className="text-sm font-medium flex items-center gap-1"
              >
                <span>{selectedModel}</span>
                <span className="ml-1">▼</span>
              </Button>
            </div>
            <Button 
              onClick={handleSendMessage} 
              className="rounded-full bg-fintaxy-purple hover:bg-fintaxy-purple/90"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {actionsVisible && (
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              action.id !== "workspace" ? (
                <Button
                  key={action.id}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 text-sm"
                >
                  {action.icon}
                  {action.label}
                </Button>
              ) : (
                <Popover key={action.id}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 text-sm"
                    >
                      {action.icon}
                      {action.label}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-2 z-50 bg-white">
                    <div className="space-y-2">
                      {workspaces.map((workspace) => (
                        <div key={workspace.id} className="p-2 hover:bg-gray-100 rounded-md flex items-center">
                          <span className="text-green-600 mr-2">⚖</span>
                          {workspace.name}
                        </div>
                      ))}
                      <div className="flex justify-between mt-4 pt-2 border-t">
                        <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                          <Plus className="h-3.5 w-3.5" /> Add new
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                          <List className="h-3.5 w-3.5" /> See all
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
