import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BudgetTimelineProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const BudgetTimelineSection = ({
  formData,
  setFormData,
}: BudgetTimelineProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Budget and Timeline</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="budgetRange">Estimated Budget Range</Label>
          <Select
            value={formData.budgetRange}
            onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k+">$50,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="projectTimeline">Project Timeline</Label>
          <Select
            value={formData.projectTimeline}
            onValueChange={(value) => setFormData({ ...formData, projectTimeline: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3-months">1-3 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="6-12-months">6-12 months</SelectItem>
              <SelectItem value="12+months">12+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};