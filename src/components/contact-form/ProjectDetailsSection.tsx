import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectDetailsProps {
  formData: any;
  setFormData: (data: any) => void;
  isSubmitting: boolean;
}

export const ProjectDetailsSection = ({
  formData,
  setFormData,
  isSubmitting,
}: ProjectDetailsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Project or Inquiry Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="projectType">What Are You Looking For?</Label>
          <Select
            value={formData.projectType}
            onValueChange={(value) => setFormData({ ...formData, projectType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai-automation">AI Automation</SelectItem>
              <SelectItem value="custom-development">Custom Development</SelectItem>
              <SelectItem value="integration">System Integration</SelectItem>
              <SelectItem value="consulting">Technical Consulting</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="projectDescription">Describe Your Challenge or Project Goals</Label>
          <Textarea
            id="projectDescription"
            placeholder="e.g., 'I need an AI tool to automate customer support tasks...'"
            value={formData.projectDescription}
            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            disabled={isSubmitting}
            className="min-h-[100px]"
          />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="preferredOutcome">Preferred Outcome</Label>
          <Textarea
            id="preferredOutcome"
            placeholder="e.g., 'I want to reduce manual work by automating repetitive tasks...'"
            value={formData.preferredOutcome}
            onChange={(e) => setFormData({ ...formData, preferredOutcome: e.target.value })}
            disabled={isSubmitting}
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};