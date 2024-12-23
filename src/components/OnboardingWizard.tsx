import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
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
import { AgentTypeSelector } from "./agent-setup/AgentTypeSelector";
import { TaskDefinitionForm } from "./agent-setup/TaskDefinitionForm";
import { AgentSettings } from "./agent-setup/AgentSettings";
import { useToast } from "@/components/ui/use-toast";

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
  const [agentType, setAgentType] = useState("inbox-label-handler");
  const [taskConfig, setTaskConfig] = useState(null);
  const [settings, setSettings] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) throw new Error("No user found");

        const { error } = await supabase.from("agents").insert({
          user_id: user.id,
          name: "Inbox Label Handler",
          type: agentType,
          settings: {
            ...taskConfig,
            ...settings,
          },
          status: "active",
        });

        if (error) throw error;

        toast({
          title: "Success!",
          description: "Your AI agent has been successfully created and is ready to use!",
        });

        onClose();
        navigate("/dashboard");
      } catch (error) {
        console.error("Error creating agent:", error);
        toast({
          title: "Error",
          description: "Failed to create agent. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <AgentTypeSelector
            selectedType={agentType}
            onTypeSelect={setAgentType}
          />
        );
      case 1:
        return (
          <TaskDefinitionForm
            onSubmit={(values) => {
              setTaskConfig(values);
              handleNext();
            }}
          />
        );
      case 2:
        return (
          <AgentSettings
            onSubmit={(values) => {
              setSettings(values);
              handleNext();
            }}
          />
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Review Your Setup</h3>
            <div className="space-y-2">
              <p><strong>Agent Type:</strong> {agentType}</p>
              {taskConfig && (
                <p><strong>Categories:</strong> {taskConfig.categories}</p>
              )}
              {settings && (
                <>
                  <p><strong>Label Format:</strong> {settings.labelFormat}</p>
                  <p>
                    <strong>Auto-apply to unread:</strong>{" "}
                    {settings.autoApplyToUnread ? "Yes" : "No"}
                  </p>
                </>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Let's build your first AI Agent!
          </DialogTitle>
          <DialogDescription>
            Follow these steps to create your custom AI agent. You can skip this
            setup and come back to it later.
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
          <div className="mt-6">
            {renderStepContent()}
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={onClose}>
                Skip Setup for Now
              </Button>
              {currentStep === steps.length - 1 ? (
                <Button onClick={handleNext}>Launch Agent</Button>
              ) : (
                <Button onClick={handleNext}>Next Step</Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}