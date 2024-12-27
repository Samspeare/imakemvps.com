import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, MessageSquare, BarChart3, UserPlus, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tasks = [
  {
    title: "Study Assistant",
    description: "AI-powered study tools that adapt to your learning style.",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    category: "Personal Productivity",
  },
  {
    title: "Content Creation",
    description: "Generate engaging content with AI that maintains brand voice.",
    icon: <Bot className="h-5 w-5 text-primary" />,
    category: "Business Automation",
  },
  {
    title: "Time Management",
    description: "Optimize workflow with smart task prioritization and scheduling.",
    icon: <Calendar className="h-5 w-5 text-primary" />,
    category: "Personal Productivity",
  },
  {
    title: "Customer Support",
    description: "24/7 instant responses with intelligent chatbots.",
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    category: "Customer Engagement",
  },
  {
    title: "Data Insights",
    description: "Transform complex data into actionable insights.",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    category: "Data Analysis",
  },
  {
    title: "Recruitment",
    description: "Streamline hiring with AI-powered candidate screening.",
    icon: <UserPlus className="h-5 w-5 text-primary" />,
    category: "Business Automation",
  },
];

const categories = [
  "Personal Productivity",
  "Business Automation",
  "Data Analysis",
  "Customer Engagement",
];

const IndustrySection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            Tasks We Simplify
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI solutions boost your productivity
          </p>
        </div>
        
        {categories.map((category, categoryIndex) => {
          const categoryTasks = tasks.filter(task => task.category === category);
          if (categoryTasks.length === 0) return null;
          
          return (
            <div 
              key={category} 
              className={`mb-6 ${
                categoryIndex % 2 === 0 ? 'bg-background' : 'bg-purple-50'
              } py-6 rounded-xl`}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {categoryTasks.map((task, index) => (
                  <motion.div
                    key={task.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-purple-100/50">
                      <CardHeader className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {task.icon}
                          </div>
                          <CardTitle className="text-lg">{task.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 pb-4">
                        <CardDescription className="text-sm mb-2">
                          {task.description}
                        </CardDescription>
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors group"
                        >
                          Learn More 
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustrySection;