import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="relative py-8 px-4 bg-gradient-to-b from-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:px-8 text-center"
          >
            <h3 className="text-xl text-primary font-semibold tracking-wide uppercase text-left pl-0">
              Why Choose Us
            </h3>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Your Success, Simplified
            </h2>
            <p className="text-xl text-gray-600">
              We help small businesses and creators work smarter, not harder, by putting the power of AI in your hands.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-4">
              "Stop drowning in tasks. Start focusing on growth."
            </blockquote>
            <p className="text-lg text-gray-600">
              Running a business or managing your online presence shouldn't be overwhelming. 
              Our AI tools handle the day-to-day work so you can focus on the big picture - 
              growing your business and connecting with your audience.
            </p>
            <p className="text-lg text-gray-600">
              From scheduling posts to answering customer questions, we make it simple to get more done 
              without hiring a full team.
            </p>
            <div className="mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
                >
                  Start Your Free Trial
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:px-8"
          >
            <img
              src="/lovable-uploads/b16aee30-907d-45ca-8374-e544613306dd.png"
              alt="AI Assistant Character"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};