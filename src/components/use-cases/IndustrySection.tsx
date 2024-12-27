import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, MessageSquare, BarChart3, UserPlus, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

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
  const [selectedTask, setSelectedTask] = useState<typeof tasks[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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
              <Card 
                className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 border-purple-100/50 cursor-pointer"
                onClick={() => {
                  setSelectedTask(task);
                  setDialogOpen(true);
                }}
              >
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
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {selectedTask && selectedTask.details && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-primary/10">
                  {selectedTask.icon}
                </span>
                {selectedTask.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Task</h4>
                <p className="text-sm text-muted-foreground">{selectedTask.details.task}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Description</h4>
                <p className="text-sm text-muted-foreground">{selectedTask.details.description}</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Solution</h4>
                <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                  {selectedTask.details.solution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default IndustrySection;