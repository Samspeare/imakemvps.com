import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "1 AI Agent",
        "Basic Automation",
        "Email Support",
        "5 Scheduled Tasks"
      ]
    },
    {
      name: "Professional",
      price: "99",
      features: [
        "3 AI Agents",
        "Advanced Automation",
        "Priority Support",
        "Unlimited Scheduled Tasks",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "249",
      features: [
        "Unlimited AI Agents",
        "Custom Solutions",
        "24/7 Support",
        "Dedicated Account Manager",
        "API Access",
        "Custom Training"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your needs and start automating your workflow today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;