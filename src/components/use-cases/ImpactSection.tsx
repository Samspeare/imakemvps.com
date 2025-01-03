import { motion } from "framer-motion";
import { Rocket, Heart, Computer, Trophy } from "lucide-react";

const impacts = [
  {
    title: "Productivity Boosts",
    description: "Streamline workflows and automate repetitive tasks to maximize team efficiency",
    icon: <Rocket className="h-8 w-8 text-primary" />,
    label: "productivity"
  },
  {
    title: "Reduced Burnout",
    description: "Eliminate manual workload and create a more balanced work environment",
    icon: <Heart className="h-8 w-8 text-primary" />,
    label: "wellbeing"
  },
  {
    title: "Digitization",
    description: "Transform manual processes into seamless digital workflows",
    icon: <Computer className="h-8 w-8 text-primary" />,
    label: "digital"
  },
  {
    title: "Competitive Advantages",
    description: "Stay ahead of the curve with cutting-edge AI solutions",
    icon: <Trophy className="h-8 w-8 text-primary" />,
    label: "competitive"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Transform Your Business</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of AI-driven automation and see real results in your business operations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 ring-1 ring-primary/20">
                  {impact.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{impact.title}</h3>
                <p className="text-gray-600 leading-relaxed">{impact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;