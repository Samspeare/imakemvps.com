import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, MessageSquare, BarChart3, UserPlus, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tasks = [
  {
    title: "Tutor",
    description: "AI-powered learning that adapts to you.",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
  },
  {
    title: "Content Creator",
    description: "Generate engaging brand content instantly.",
    icon: <Bot className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
  },
  {
    title: "Personal Coach",
    description: "Smart scheduling and task prioritization.",
    icon: <Calendar className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
  },
  {
    title: "Support Agent",
    description: "24/7 instant customer assistance.",
    icon: <MessageSquare className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
  },
  {
    title: "Data Analyst",
    description: "Transform data into actionable insights.",
    icon: <BarChart3 className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
  },
  {
    title: "Recruiter",
    description: "AI-powered candidate screening.",
    icon: <UserPlus className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
  },
];

const IndustrySection = () => {
  return (
    <section className="container py-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            AI Solutions
          </h2>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Boost your productivity with our AI agents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task, index) => (
            <motion.div
              key={task.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link to={`/agent/${task.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 border-purple-100/50 cursor-pointer">
                  <CardHeader className="py-2 px-3">
                    <div className="flex items-center gap-1.5">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        {task.icon}
                      </div>
                      <div className="flex flex-col">
                        <CardTitle className="text-sm flex items-center gap-1">
                          {task.title}
                          <span className="inline-flex">{task.agentIcon}</span>
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-2 px-3">
                    <CardDescription className="text-xs mb-1 line-clamp-2">
                      {task.description}
                    </CardDescription>
                    <span className="inline-flex items-center text-xs text-primary hover:text-primary-dark transition-colors group">
                      Learn More 
                      <ArrowRight className="ml-0.5 h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;