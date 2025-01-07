import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Check, AlertOctagon } from "lucide-react";

export const ProblemSolutionSection = () => {
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
    <section className="py-16 px-4 bg-gradient-to-br from-white via-accent/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          {/* AI Wizard Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <img
              src="/lovable-uploads/0c667512-22b2-4b8a-8409-506771f81249.png"
              alt="AI Wizard"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-left pl-0">
            <h3 className="text-xl text-primary font-semibold tracking-wide uppercase mb-2">
              Your AI Partner
            </h3>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
              How I Can Help You
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Not sure where to start or what AI can do for you? Let's just have a conversation. 
              We can chat about your goals, challenges, or ideas, and I'll share some friendly advice 
              or possibilities you might not have thought of—no strings attached.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start a Conversation
                  <MessageSquare className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Problems and Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Common Challenges</h3>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-primary/10"
              >
                <AlertOctagon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">My Solutions</h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-success/10"
              >
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule A Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};