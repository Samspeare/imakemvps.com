import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background with subtle animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100"
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
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
          >
            Empowering Businesses and Individuals with AI-Powered Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed"
          >
            From helping friends find better ways to study, to creating tailored AI agents for businesses, my passion is solving problems with technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/use-cases">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-medium text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20"
              >
                Explore Use Cases
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
    </section>
  );
};