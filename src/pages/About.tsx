import { motion } from "framer-motion";
import { Users2, Shield, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users2,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your data security and privacy is our top priority.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with reliable infrastructure.",
    },
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make cloud hosting accessible, reliable, and 
            scalable for businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-4xl mx-auto"
        >
          <h2>Our Story</h2>
          <p>
            Founded with a vision to simplify cloud hosting, we've grown from a small
            team of enthusiasts to a global provider of VPS solutions. Our journey
            has been driven by continuous innovation and an unwavering commitment to
            customer success.
          </p>
          <h2>Our Mission</h2>
          <p>
            To provide reliable, scalable, and secure hosting solutions that empower
            businesses to grow and succeed in the digital world. We believe in
            making advanced technology accessible to everyone.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;