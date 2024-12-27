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
            MVP (Minimum Valuable Product) is about creating the simplest version of your product
            that delivers real value to users while minimizing development time and costs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <Link to="/use-cases">
              <div className="relative p-[2px] overflow-hidden rounded-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-magical-gradient bg-[length:200%_auto]"></div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 rounded-full bg-background text-primary hover:text-primary-dark font-medium text-lg transition-colors duration-200"
                >
                  Explore Use Cases
                </motion.button>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};