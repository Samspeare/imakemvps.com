import { motion } from "framer-motion";
import { AlertOctagon, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ProblemSolutionSection = () => {
  const navigate = useNavigate();

  const problems = [
    "Struggling to manage repetitive tasks?",
    "Need better tools for studying or business automation?",
    "Want to understand how AI can simplify your life?"
  ];

  const solutions = [
    "I design AI agents that handle the busy work for you, so you can focus on what truly matters.",
    "I help individuals and teams take control of their time with smart technology that simplifies daily tasks and boosts productivity.",
    "I create tailored AI tools that solve your unique challenges—whether it's automating processes, improving decision-making, or saving you hours every day."
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How I Can Help You</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Not sure where to start or what AI can do for you? Let's just have a conversation. 
            We can chat about your goals, challenges, or ideas, and I'll share some friendly advice 
            or possibilities you might not have thought of—no strings attached. You can take what 
            we discuss and run with it, or we can explore working together to bring those ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Common Challenges</h3>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <AlertOctagon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">My Solutions</h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Centered Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            onClick={() => navigate("/contact")}
            className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            Schedule a Consult
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};