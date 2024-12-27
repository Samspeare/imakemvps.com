import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface TaskDetails {
  task: string;
  description: string;
  solution: string[];
}

interface TaskCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  agentIcon: React.ReactNode;
  details: TaskDetails;
  index: number;
}

const TaskCard = ({ title, description, icon, agentIcon, details, index }: TaskCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 border-purple-100/50 cursor-pointer"
        onClick={() => setDialogOpen(true)}
      >
        <CardHeader className="py-2 px-3">
          <div className="flex items-center gap-1.5">
            <div className="p-1.5 rounded-md bg-primary/10">
              {icon}
            </div>
            <div className="flex flex-col">
              <CardTitle className="text-sm flex items-center gap-1">
                {title}
                <span className="inline-flex">{agentIcon}</span>
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 pb-2 px-3">
          <CardDescription className="text-xs mb-1 line-clamp-2">
            {description}
          </CardDescription>
          <span className="inline-flex items-center text-xs text-primary hover:text-primary-dark transition-colors group">
            Learn More 
            <ArrowRight className="ml-0.5 h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[725px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-primary/10">
                {icon}
              </span>
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Task</h4>
              <p className="text-sm text-muted-foreground">{details.task}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Description</h4>
              <p className="text-sm text-muted-foreground">{details.description}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Solution</h4>
              <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                {details.solution.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskCard;