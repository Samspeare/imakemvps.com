import { motion } from "framer-motion";
import { Mail, MessageSquare, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Support = () => {
  const resources = [
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides and tutorials to help you get started",
      link: "/docs"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get real-time assistance from our support team",
      link: "/contact"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions and we'll get back to you",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the support you need through our various help channels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">{resource.description}</p>
              <Link to={resource.link}>
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-primary/5 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is ready to assist you with any questions or concerns
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contact Support
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;