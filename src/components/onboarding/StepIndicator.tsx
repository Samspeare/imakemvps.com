import { Bot, Target, Settings, Wand2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const steps = [
  {
    title: "Choose Agent Type",
    description: "Select the type of AI agent that best fits your needs",
    icon: Bot,
  },
  {
    title: "Define Task",
    description: "Specify what tasks your AI agent should handle",
    icon: Target,
  },
  {
    title: "Configure Settings",
    description: "Customize your agent's behavior and preferences",
    icon: Settings,
  },
  {
    title: "Review & Launch",
    description: "Review your setup and launch your AI agent",
    icon: Wand2,
  },
];

interface StepIndicatorProps {
  currentStep: number;
  progress: number;
}

export function StepIndicator({ currentStep, progress }: StepIndicatorProps) {
  return (
    <div className="mt-4">
      <Progress value={progress} className="mb-4" />
      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-colors ${
                index === currentStep
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}