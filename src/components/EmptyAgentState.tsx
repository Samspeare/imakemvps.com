import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyAgentStateProps {
  onStartSetup: () => void;
}

export function EmptyAgentState({ onStartSetup }: EmptyAgentStateProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardContent className="flex flex-col items-center text-center p-12 space-y-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Add Your First Agent</h2>
          <p className="text-muted-foreground max-w-md">
            Create an AI agent to automate tasks, answer questions, and help you be
            more productive. Get started with our guided setup process.
          </p>
        </div>
        <Button onClick={onStartSetup} className="mt-6">
          Start Agent Setup <ArrowRight className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}