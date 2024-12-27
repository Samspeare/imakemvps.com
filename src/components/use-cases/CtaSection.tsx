import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to See How AI Can Work for You?</h2>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;