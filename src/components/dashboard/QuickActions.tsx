import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Upload } from "lucide-react";

interface QuickActionsProps {
  onTestAgent: () => void;
  onAddData: () => void;
}

export function QuickActions({ onTestAgent, onAddData }: QuickActionsProps) {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <Button
          variant="outline"
          className="h-24 flex flex-col items-center justify-center gap-2"
          onClick={onTestAgent}
        >
          <Play className="h-6 w-6" />
          Test AI Agent
        </Button>
        <Button
          variant="outline"
          className="h-24 flex flex-col items-center justify-center gap-2"
          onClick={onAddData}
        >
          <Upload className="h-6 w-6" />
          Add Data
        </Button>
      </CardContent>
    </Card>
  );
}