import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Clock, TrendingUp } from "lucide-react";

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
          <span className="text-sm font-medium text-gray-600">AI-Powered Business Solutions</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Streamline Your Business <br className="hidden sm:block" />
          with Intelligent Automation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your daily operations with AI that works for you. Save time, reduce costs, and grow your business faster.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { icon: Target, text: "30% Higher Productivity" },
            { icon: Clock, text: "Save 10+ Hours Weekly" },
            { icon: TrendingUp, text: "25% Revenue Growth" }
          ].map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-2 text-gray-700"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{text}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
            View Success Stories →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;