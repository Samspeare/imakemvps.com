import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bot, Wand2, Settings, Target } from "lucide-react";

interface OnboardingWizardProps {
  open: boolean;
  onClose: () => void;
}

const steps = [
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

export function OnboardingWizard({ open, onClose }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Let's build your first AI Agent!</DialogTitle>
          <DialogDescription>
            Follow these steps to create your custom AI agent. You can skip this setup and
            come back to it later.
          </DialogDescription>
        </DialogHeader>
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
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={onClose}>
              Skip Setup for Now
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? "Finish" : "Next Step"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}