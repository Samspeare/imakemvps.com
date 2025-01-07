import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

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
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Start Your AI Journey Today</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to See How AI Can <br className="hidden sm:block" />
            Work for You?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Book a free consultation and discover how our AI solutions can transform your workflow
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors shadow-xl shadow-black/10 group"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;