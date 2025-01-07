import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$10",
      features: [
        "1 vCPU Core",
        "2GB RAM",
        "20GB SSD Storage",
        "1TB Bandwidth",
        "24/7 Support",
      ],
    },
    {
      name: "Professional",
      price: "$25",
      features: [
        "2 vCPU Cores",
        "4GB RAM",
        "50GB SSD Storage",
        "2TB Bandwidth",
        "24/7 Priority Support",
        "Free Domain",
      ],
    },
    {
      name: "Enterprise",
      price: "$50",
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "100GB SSD Storage",
        "5TB Bandwidth",
        "24/7 Priority Support",
        "Free Domain",
        "DDoS Protection",
      ],
    },
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Choose Your Perfect VPS Plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Scalable solutions for every business need. All plans include 99.9% uptime guarantee
            and expert support.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-base font-normal text-muted-foreground">/month</span></div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full button-primary py-3">Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;