import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Activity, ShoppingBag, MessageSquare, BarChart3, Users } from "lucide-react";

const industries = [
  {
    title: "Real Estate",
    description: "Automate property management and enhance customer interactions with AI-powered solutions.",
    icon: <Building2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Healthcare",
    description: "Streamline patient care and administrative tasks with intelligent automation.",
    icon: <Activity className="h-6 w-6 text-primary" />,
  },
  {
    title: "Retail",
    description: "Enhance customer experience and optimize inventory management with AI.",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
  },
  {
    title: "Customer Service",
    description: "Provide 24/7 support and personalized experiences with AI chatbots.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
  {
    title: "Analytics",
    description: "Transform data into actionable insights with AI-powered analytics.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Human Resources",
    description: "Streamline recruitment and employee management with intelligent automation.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
];

const IndustrySection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
              }}
              className="p-6 rounded-2xl bg-gray-50 transform transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary hover:text-primary-dark"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;