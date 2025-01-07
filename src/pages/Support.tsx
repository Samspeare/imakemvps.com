import { motion } from "framer-motion";
import { Book, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const resources = [
    {
      icon: Book,
      title: "Knowledge Base",
      description: "Find answers to common questions in our documentation.",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team for immediate assistance.",
      link: "#",
    },
    {
      icon: Phone,
      title: "Contact Support",
      description: "Get in touch with our dedicated support team.",
      link: "/contact",
    },
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Support Center</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're here to help you succeed. Find the support you need through our various channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">{resource.description}</p>
              <Link
                to={resource.link}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Need Additional Help?</h2>
          <p className="text-muted-foreground mb-8">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <Link
            to="/contact"
            className="button-primary px-8 py-3 rounded-full"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;