import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoProps {
  formData: any;
  setFormData: (data: any) => void;
  isSubmitting: boolean;
}

export const PersonalInfoSection = ({
  formData,
  setFormData,
  isSubmitting,
}: PersonalInfoProps) => {
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const truncated = numbers.slice(0, 10);
    
    // Format with spaces: XXX XXX XXXX
    const formatted = truncated.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    
    return formatted.trim();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phoneNumber: formatted });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Personal/Business Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="e.g., John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            disabled={isSubmitting}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g., john.doe@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isSubmitting}
            required
          />
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            placeholder="999 999 9999"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            maxLength={12} // Account for spaces
            inputMode="numeric"
            pattern="[0-9 ]*"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            placeholder="e.g., ABC Tech Solutions"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="jobTitle">Job Title/Role</Label>
          <Input
            id="jobTitle"
            placeholder="e.g., Operations Manager, Founder"
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            disabled={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
};