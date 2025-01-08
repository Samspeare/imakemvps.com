import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleAssessment = () => {
    navigate('/assessment');
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
            <Brain className="w-4 h-4 text-primary" />
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
            <Button
              onClick={handleAssessment}
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Brain className="w-5 h-5 mr-2" />
              FREE AI Readiness Assessment
            </Button>
            
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
    </section>
  );
};
