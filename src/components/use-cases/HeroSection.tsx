import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Discover How Our Solutions Transform Businesses
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore real-world applications tailored to your industry and goals
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Contact Us to Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;