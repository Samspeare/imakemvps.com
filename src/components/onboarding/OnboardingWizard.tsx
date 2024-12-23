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
import { AgentTypeSelector } from "../agent-setup/AgentTypeSelector";
import { TaskDefinitionForm } from "../agent-setup/TaskDefinitionForm";
import { AgentSettings } from "../agent-setup/AgentSettings";
import { useToast } from "@/components/ui/use-toast";
import { StepIndicator, steps } from "./StepIndicator";
import { ReviewStep } from "./ReviewStep";

interface OnboardingWizardProps {
  open: boolean;
  onClose: () => void;
}

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
          <ReviewStep
            agentType={agentType}
            taskConfig={taskConfig}
            settings={settings}
          />
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
        <StepIndicator currentStep={currentStep} progress={progress} />
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
      </DialogContent>
    </Dialog>
  );
}