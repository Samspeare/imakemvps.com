import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Magical gradient background */}
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
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            <span className="magical-text-gradient">
              Empowering Businesses and Individuals with AI-Powered Solutions
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed"
          >
            From helping friends find better ways to study, to creating tailored AI agents for businesses, 
            my passion is solving problems with technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/use-cases">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-primary text-white font-medium text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20 magical-border-gradient"
              >
                Explore Use Cases
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-medium text-lg hover:bg-secondary-dark transition-colors duration-200 shadow-lg shadow-secondary/20"
              >
                Schedule a Consult
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* AI Character Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -z-10 opacity-20"
      >
        <img
          src="/lovable-uploads/7a7938ce-61ea-4018-a362-c8f81272bd5b.png"
          alt="AI Assistant Character"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};