import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { integrationExamples } from "../features/featureData";

const ComparisonSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Transform Your Business Operations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {integrationExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 rounded-xl ${
                index === 0 ? "bg-gray-100" : "bg-primary text-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
              <ul className="space-y-3">
                {example.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            See How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;