import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-purple-100 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-gray-600">AI-Powered Solutions</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Transform Your Daily Tasks <br className="hidden sm:block" />
          with Intelligent Automation
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover how our AI solutions can streamline your workflow, boost productivity, 
          and help you achieve more in less time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
            Read Success Stories →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;