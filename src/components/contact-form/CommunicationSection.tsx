import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CommunicationProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const CommunicationSection = ({
  formData,
  setFormData,
}: CommunicationProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Preferred Communication Method</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>How Would You Like Us to Contact You?</Label>
          <RadioGroup
            value={formData.contactMethod}
            onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <Label htmlFor="contact-email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="contact-phone" />
              <Label htmlFor="contact-phone">Phone</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="video-call" id="contact-video" />
              <Label htmlFor="contact-video">Video Call</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="bestTimeToContact">Best Time to Contact</Label>
          <Select
            value={formData.bestTimeToContact}
            onValueChange={(value) => setFormData({ ...formData, bestTimeToContact: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select preferred time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
              <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};