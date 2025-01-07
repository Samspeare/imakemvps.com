import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isClient, setIsClient] = useState(false);

  // Hydration optimization
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Optimized gradient background - only animate when in view and on client */}
      {isClient && isInView && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent via-background to-accent/50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            opacity: { duration: 0.3 },
            backgroundPosition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }
          }}
        />
      )}
      
      {/* Decorative elements */}
      <div 
        className="absolute inset-0 bg-grid-black/[0.02] -z-10" 
        style={{ willChange: 'transform' }}
      />
      
      {/* Content with enhanced visual hierarchy */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-dark">AI-Powered Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary-dark via-primary to-secondary bg-clip-text text-transparent"
          >
            Empowering Businesses and <br className="hidden sm:block" />
            Individuals with AI-Powered Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            MVP (Minimum Valuable Product) is about creating the simplest version of your product
            that delivers real value to users while minimizing development time and costs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/use-cases" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-[2px] overflow-hidden rounded-full group"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-magical-gradient bg-[length:200%_auto]"
                  style={{ willChange: 'background-position' }}
                />
                <button className="relative px-8 py-4 rounded-full bg-background font-semibold text-lg text-primary hover:text-primary-dark transition-colors duration-200">
                  Explore Use Cases
                </button>
              </motion.div>
            </Link>
            <Link 
              to="/contact" 
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
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