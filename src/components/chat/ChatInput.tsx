
import React, { useState } from "react";
import { Mic, Paperclip, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WorkspaceItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const quickActions = [
  { id: "anaf", label: "ANAF" },
  { id: "invoice", label: "Create Invoice" },
  { id: "process", label: "Process Documents" },
  { id: "generate", label: "Generate" },
  { id: "analyze", label: "Analyze" },
  { id: "human", label: "Human Accountant" },
  { id: "workspace", label: "Workspace" },
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
    <div className="relative w-full bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl h-10 w-10 bg-gray-50 hover:bg-gray-100"
            >
              <ChevronDown className="h-5 w-5 text-gray-600" onClick={() => setActionsVisible(!actionsVisible)} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl h-10 w-10 bg-gray-50 hover:bg-gray-100"
            >
              <Mic className="h-5 w-5 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl h-10 w-10 bg-gray-50 hover:bg-gray-100"
            >
              <Paperclip className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
          
          <div className="flex-1 mx-4">
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
          
          <div className="flex items-center gap-3">
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[120px] h-10 bg-gray-50">
                <SelectValue>{selectedModel}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Grok 3">Grok 3</SelectItem>
                <SelectItem value="Grok 2">Grok 2</SelectItem>
                <SelectItem value="Grok 1">Grok 1</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={handleSendMessage} 
              className="rounded-xl bg-fintaxy-purple hover:bg-fintaxy-purple/90 h-10 w-10 p-0"
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
                  className="rounded-xl bg-gray-50 hover:bg-gray-100 border-gray-200"
                >
                  {action.label}
                </Button>
              ) : (
                <Popover key={action.id}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl bg-gray-50 hover:bg-gray-100 border-gray-200"
                    >
                      {action.label}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-2">
                    <div className="space-y-2">
                      {workspaces.map((workspace) => (
                        <div key={workspace.id} className="p-2 hover:bg-gray-50 rounded-md flex items-center">
                          <span className="text-green-600 mr-2">⚖</span>
                          {workspace.name}
                        </div>
                      ))}
                      <div className="flex justify-between mt-4 pt-2 border-t border-gray-100">
                        <Button variant="ghost" size="sm" className="text-xs">
                          Add new
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          See all
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
