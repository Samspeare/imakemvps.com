import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Activity, ShoppingBag, MessageSquare, BarChart3, Users } from "lucide-react";

const UseCases = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-white to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Discover How Our Solutions Transform Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore real-world applications tailored to your industry and goals
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Contact Us to Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Industry Sections */}
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

      {/* Statistics Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Proven Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

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

const stats = [
  {
    value: "85%",
    label: "Reduction in Manual Work",
  },
  {
    value: "24/7",
    label: "Customer Support Coverage",
  },
  {
    value: "50%",
    label: "Faster Response Times",
  },
  {
    value: "30%",
    label: "Increase in Productivity",
  },
];

export default UseCases;