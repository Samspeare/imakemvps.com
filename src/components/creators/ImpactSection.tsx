import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wand2, Users, LineChart } from "lucide-react";

export const ImpactSection = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI-Powered Content Creation",
      description: "Generate engaging posts, captions, and scripts in seconds. Save 20+ hours monthly on content creation.",
    },
    {
      icon: Users,
      title: "Enhanced Audience Engagement",
      description: "Automate personalized responses and increase engagement rates by 40% with AI-driven interactions.",
    },
    {
      icon: LineChart,
      title: "Smart Analytics & Growth",
      description: "Optimize your content strategy with AI insights and grow your audience 3x faster.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};