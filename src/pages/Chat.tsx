import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Paperclip } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Chat = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const initializeChat = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to use the AI chat feature.",
          variant: "destructive",
        });
        navigate("/contact");
        return;
      }

      if (initialQuery) {
        const { data: { user } } = await supabase.auth.getUser();
        
        const { data: session, error: sessionError } = await supabase
          .from("chat_sessions")
          .insert({
            user_id: user?.id,
            title: `AI Feasibility Assessment: ${initialQuery}`,
          })
          .select()
          .single();

        if (sessionError) {
          console.error("Error creating chat session:", sessionError);
          return;
        }

        setSessionId(session.id);
        
        // Add initial system message
        const initialMessage = {
          role: "assistant",
          content: "Hello! I'm here to help you assess the feasibility of your AI project. Could you tell me more about what you're looking to build?"
        };
        
        await supabase
          .from("chat_messages")
          .insert({
            session_id: session.id,
            role: initialMessage.role,
            content: initialMessage.content,
          });
          
        setMessages([initialMessage]);
        
        if (initialQuery.trim()) {
          handleSendMessage(initialQuery);
        }
      }
    };

    initializeChat();
  }, [initialQuery, navigate, toast]);

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

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !sessionId) return;

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${sessionId}/${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('chat_documents')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      await supabase
        .from('chat_documents')
        .insert({
          session_id: sessionId,
          file_path: filePath,
          file_name: file.name,
          file_type: file.type,
        });

      toast({
        title: "File uploaded successfully",
        description: "Your document has been uploaded and will be analyzed.",
      });

      // Notify the AI about the uploaded document
      handleSendMessage(`I've uploaded a document named ${file.name} for analysis.`);
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
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
                  ? "bg-white text-gray-800 shadow-sm"
                  : "bg-primary text-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t bg-white p-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              disabled={isUploading}
            >
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                />
                {isUploading ? (
                  <Upload className="h-4 w-4 animate-spin" />
                ) : (
                  <Paperclip className="h-4 w-4" />
                )}
              </label>
            </Button>
            
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
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
              disabled={!input.trim() || isUploading}
              className="shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;