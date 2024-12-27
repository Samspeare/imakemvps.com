import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, MessageSquare, BarChart3, UserPlus, Bot } from "lucide-react";

const tasks = [
  {
    title: "Personal Study Assistance",
    description: "AI-powered study tools that adapt to your learning style and schedule, tracking progress and providing personalized recommendations.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "Content Creation Automation",
    description: "Generate engaging content and schedule posts automatically with AI-powered tools that maintain your brand voice.",
    icon: <Bot className="h-6 w-6 text-primary" />,
  },
  {
    title: "Time Management",
    description: "Optimize your daily workflow with AI that prioritizes tasks, schedules meetings, and sends smart reminders.",
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    title: "Customer Interaction",
    description: "Provide instant, personalized responses to customers 24/7 with intelligent chatbots and automation.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
  {
    title: "Data Analysis",
    description: "Transform complex data into actionable insights with AI-powered analytics and automated reporting.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Recruitment Assistance",
    description: "Streamline your hiring process with AI that screens resumes, automates communication, and tracks candidates.",
    icon: <UserPlus className="h-6 w-6 text-primary" />,
  },
];

const IndustrySection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tasks We Simplify</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task, index) => (
            <motion.div
              key={task.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
              }}
              className="p-6 rounded-2xl bg-gray-50 transform transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  {task.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                  <p className="text-gray-600 mb-4">{task.description}</p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary hover:text-primary-dark"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;