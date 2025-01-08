import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChatBox } from "@/components/chat/ChatBox";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Please enter a query",
        description: "Describe your project or challenge to get started.",
        variant: "destructive",
      });
      return;
    }

    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to start a chat session.",
        variant: "destructive",
      });
      return;
    }

    setIsDialogOpen(true);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent via-background to-accent/50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-purple-100 rounded-full px-4 py-2"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-600">AI-Powered Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="magical-text-gradient text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
          >
            Empowering Businesses and <br className="hidden sm:block" />
            Individuals with AI-Powered Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discover if AI can transform your business. Get a detailed feasibility assessment tailored to your needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <form onSubmit={handleSearch} className="w-full max-w-2xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Describe your project or challenge..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-6 text-lg rounded-full shadow-lg"
                />
                <Button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  size="icon"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </form>
            
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl h-[80vh]">
          <ChatBox initialMessage={query} onClose={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};