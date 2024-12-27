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
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:px-8 text-center"
          >
            <h3 className="text-xl text-primary font-semibold tracking-wide uppercase">
              About Me
            </h3>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Building The Future of Work
            </h2>
            <p className="text-xl text-gray-600">
              I Make MVPs is building the future of work, where every interaction is improved with Artificial Intelligence and Agentic Designs.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-4">
              "Any sufficiently advanced technology is indistinguishable from magic." – Arthur C. Clarke, Profiles of the Future: An Inquiry into the Limits of the Possible.
            </blockquote>
            <p className="text-lg text-gray-600">
              I didn't have a background in coding or years of technical experience, but that didn't matter. AI sparked something in me—a fascination with its limitless potential. The deeper I went, the more I saw it wasn't just about generating text. It was about building solutions, automating the mundane, and transforming the way we live and work.
            </p>
            <p className="text-lg text-gray-600">
              Peeking behind the curtain, I didn't find mystery—I found opportunity. AI isn't just technology; it's the magic of possibility, waiting to be explored.
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
                  Get started
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
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