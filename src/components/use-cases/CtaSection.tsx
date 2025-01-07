import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Book Your Free Consultation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to Transform Your <br className="hidden sm:block" />
            Business with AI?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join successful businesses that have increased productivity by 30% and saved 10+ hours weekly with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors shadow-xl shadow-black/10 group"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                View Case Studies
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;