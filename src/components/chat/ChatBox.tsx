import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ChatBoxProps {
  initialMessage: string;
  onClose: () => void;
}

export const ChatBox = ({ initialMessage, onClose }: ChatBoxProps) => {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        const { data: session, error: sessionError } = await supabase
          .from("chat_sessions")
          .insert({
            user_id: user?.id,
            title: `AI Feasibility Assessment: ${initialMessage}`,
          })
          .select()
          .single();

        if (sessionError) throw sessionError;

        setSessionId(session.id);
        
        // Add initial system message
        const initialSystemMessage = {
          role: "assistant",
          content: "Hello! I'm here to help you assess the feasibility of your AI project. Could you tell me more about what you're looking to build?"
        };
        
        await supabase
          .from("chat_messages")
          .insert({
            session_id: session.id,
            role: initialSystemMessage.role,
            content: initialSystemMessage.content,
          });
          
        setMessages([initialSystemMessage]);
        
        if (initialMessage.trim()) {
          handleSendMessage(initialMessage);
        }
      } catch (error) {
        console.error("Error initializing chat:", error);
        toast({
          title: "Error",
          description: "Failed to start chat session. Please try again.",
          variant: "destructive",
        });
      }
    };

    initializeChat();
  }, [initialMessage, toast]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || !sessionId) return;

    const newMessage = {
      role: "user",
      content: content.trim(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");

    try {
      const { data, error } = await supabase.functions.invoke("chat-completion", {
        body: { message: content, sessionId }
      });

      if (error) throw error;

      if (data?.response) {
        setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">AI Assistant</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                message.role === "assistant"
                  ? "bg-background border text-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-[80px]"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(input);
              }
            }}
          />
          <Button
            onClick={() => handleSendMessage(input)}
            disabled={!input.trim()}
            className="self-end"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};