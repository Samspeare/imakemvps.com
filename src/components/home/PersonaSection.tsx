import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, ArrowRight, Clock, Zap, Target } from "lucide-react";

export const PersonaSection = () => {
  const personas = [
    {
      title: "For Business Owners",
      description: "Streamline operations and boost efficiency with AI automation",
      icon: Building2,
      benefits: [
        { text: "Save 20+ hours per week on repetitive tasks", icon: Clock },
        { text: "Automate customer support and lead generation", icon: Users },
        { text: "Scale operations without increasing overhead", icon: Target }
      ],
      cta: "See Business Solutions"
    },
    {
      title: "For Content Creators",
      description: "Create, schedule, and manage content with AI assistance",
      icon: Zap,
      benefits: [
        { text: "Generate content ideas and schedules instantly", icon: Clock },
        { text: "Automate posting across multiple platforms", icon: Users },
        { text: "Engage with your audience more effectively", icon: Target }
      ],
      cta: "Explore Creator Tools"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the solution that best fits your needs and start transforming your workflow today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <persona.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{persona.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-8">
                {persona.description}
              </p>

              <ul className="space-y-4 mb-8">
                {persona.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/use-cases"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors group"
              >
                {persona.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};