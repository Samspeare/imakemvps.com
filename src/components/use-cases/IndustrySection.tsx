import { motion } from "framer-motion";
import { BookOpen, Calendar, MessageSquare, BarChart3, UserPlus, Bot } from "lucide-react";
import TaskCard from "./TaskCard";

const tasks = [
  {
    title: "Tutor",
    description: "AI-powered learning that adapts to you.",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
    details: {
      task: "Streamline CPA exam preparation with customized AI tools.",
      description: "Automate study schedules, track progress, and simulate test environments using AI-powered systems.",
      solution: [
        "Recommends resources based on weak areas.",
        "Sends reminders for study sessions.",
        "Analyzes performance on practice tests."
      ]
    }
  },
  {
    title: "Content Creator",
    description: "Generate engaging brand content instantly.",
    icon: <Bot className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
    details: {
      task: "Generate and schedule social media content effortlessly.",
      description: "Create AI tools to draft engaging posts, design visuals, and optimize scheduling for better reach.",
      solution: [
        "Generate captions and hashtags using AI.",
        "Create on-brand image templates.",
        "Automate multi-platform posting."
      ]
    }
  },
  {
    title: "Personal Coach",
    description: "Smart scheduling and task prioritization.",
    icon: <Calendar className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
    details: {
      task: "Organize tasks and optimize daily workflows.",
      description: "An AI assistant that prioritizes tasks, schedules meetings, and sends reminders.",
      solution: [
        "Integrates with calendars.",
        "Suggests the best times to work based on productivity patterns.",
        "Automates follow-ups for overdue tasks."
      ]
    }
  },
  {
    title: "Support Agent",
    description: "24/7 instant customer assistance.",
    icon: <MessageSquare className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
    details: {
      task: "Provide instant, personalized responses to customers.",
      description: "AI chatbots tailored for customer support and lead nurturing.",
      solution: [
        "Answer FAQs intelligently.",
        "Capture and manage leads automatically.",
        "Provide 24/7 support."
      ]
    }
  },
  {
    title: "Data Analyst",
    description: "Transform data into actionable insights.",
    icon: <BarChart3 className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
    details: {
      task: "Turn raw data into actionable insights.",
      description: "Use AI to analyze complex datasets and generate reports.",
      solution: [
        "Visualize trends and outliers.",
        "Provide predictions based on historical data.",
        "Offer automated reports with insights."
      ]
    }
  },
  {
    title: "Recruiter",
    description: "AI-powered candidate screening.",
    icon: <UserPlus className="h-4 w-4 text-primary" />,
    agentIcon: <Bot className="h-3 w-3 text-primary-light" />,
    details: {
      task: "Streamline hiring processes.",
      description: "Automate resume filtering and candidate communication.",
      solution: [
        "Screens resumes based on job criteria.",
        "Sends automated interview invitations.",
        "Tracks hiring pipeline progress."
      ]
    }
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
              <TaskCard {...task} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
