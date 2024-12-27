import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, MessageSquare, BarChart3, UserPlus, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tasks = [
  {
    title: "Personal Study Assistance",
    description: "AI-powered study tools that adapt to your learning style and schedule, tracking progress and providing personalized recommendations.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    category: "Personal Productivity",
  },
  {
    title: "Content Creation Automation",
    description: "Generate engaging content and schedule posts automatically with AI-powered tools that maintain your brand voice.",
    icon: <Bot className="h-6 w-6 text-primary" />,
    category: "Business Automation",
  },
  {
    title: "Time Management",
    description: "Optimize your daily workflow with AI that prioritizes tasks, schedules meetings, and sends smart reminders.",
    icon: <Calendar className="h-6 w-6 text-primary" />,
    category: "Personal Productivity",
  },
  {
    title: "Customer Interaction",
    description: "Provide instant, personalized responses to customers 24/7 with intelligent chatbots and automation.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    category: "Customer Engagement",
  },
  {
    title: "Data Analysis",
    description: "Transform complex data into actionable insights with AI-powered analytics and automated reporting.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    category: "Data Analysis",
  },
  {
    title: "Recruitment Assistance",
    description: "Streamline your hiring process with AI that screens resumes, automates communication, and tracks candidates.",
    icon: <UserPlus className="h-6 w-6 text-primary" />,
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
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            Tasks We Simplify
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI solutions can help you tackle everyday challenges and boost your productivity.
          </p>
        </div>
        
        {categories.map((category, categoryIndex) => {
          const categoryTasks = tasks.filter(task => task.category === category);
          if (categoryTasks.length === 0) return null;
          
          return (
            <div 
              key={category} 
              className={`mb-16 ${
                categoryIndex % 2 === 0 ? 'bg-background' : 'bg-purple-50'
              } py-12 rounded-2xl`}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {categoryTasks.map((task, index) => (
                  <motion.div
                    key={task.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-purple-100/50">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            {task.icon}
                          </div>
                          <CardTitle className="text-xl">{task.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-6">
                          {task.description}
                        </CardDescription>
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group"
                        >
                          Learn More 
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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