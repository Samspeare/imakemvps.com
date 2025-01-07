import { motion } from "framer-motion";
import { Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize our customers' success and satisfaction in everything we do."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge AI solutions."
    },
    {
      icon: Heart,
      title: "Quality",
      description: "We maintain the highest standards in our products and services."
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
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make AI technology accessible and practical for businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to democratize AI technology, we've been helping businesses 
              automate their workflows and enhance productivity. Our team of experts combines 
              technical excellence with a deep understanding of business needs to deliver 
              solutions that make a real difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to empower businesses with intelligent automation solutions that save 
              time, reduce costs, and drive growth. By making AI technology accessible and 
              user-friendly, we help organizations of all sizes compete in the digital age.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white shadow-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;