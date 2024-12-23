import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export type AgentType = {
  id: string;
  name: string;
  description: string;
};

const agentTypes: AgentType[] = [
  {
    id: "inbox-label-handler",
    name: "Inbox Label Handler",
    description: "This AI will help categorize emails by adding labels based on content.",
  },
  {
    id: "customer-support",
    name: "Customer Support Agent",
    description: "Handles customer inquiries and provides automated responses.",
  },
  {
    id: "data-analyzer",
    name: "Data Analyzer",
    description: "Analyzes data and provides insights based on patterns.",
  },
];

interface AgentTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

export function AgentTypeSelector({ selectedType, onTypeSelect }: AgentTypeSelectorProps) {
  return (
    <RadioGroup
      value={selectedType}
      onValueChange={onTypeSelect}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {agentTypes.map((type) => (
        <Label
          key={type.id}
          htmlFor={type.id}
          className="cursor-pointer [&:has([data-state=checked])]:border-primary"
        >
          <Card className="border-2 transition-colors hover:border-primary/50">
            <CardContent className="pt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={type.id} id={type.id} />
                <span className="font-medium">{type.name}</span>
                {selectedType === type.id && (
                  <Check className="w-4 h-4 text-primary ml-auto" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        </Label>
      ))}
    </RadioGroup>
  );
}