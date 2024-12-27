import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ToolsSystemsProps {
  formData: any;
  setFormData: (data: any) => void;
  isSubmitting: boolean;
}

export const ToolsSystemsSection = ({
  formData,
  setFormData,
  isSubmitting,
}: ToolsSystemsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Existing Tools or Systems</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Label htmlFor="existingTools">What Tools or Systems Do You Currently Use?</Label>
          <Textarea
            id="existingTools"
            placeholder="e.g., Slack, Salesforce, Google Workspace, Microsoft Teams."
            value={formData.existingTools}
            onChange={(e) => setFormData({ ...formData, existingTools: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label>Do You Have an Existing Dataset?</Label>
          <RadioGroup
            value={formData.hasDataset}
            onValueChange={(value) => setFormData({ ...formData, hasDataset: value })}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="dataset-yes" />
              <Label htmlFor="dataset-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="dataset-no" />
              <Label htmlFor="dataset-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};