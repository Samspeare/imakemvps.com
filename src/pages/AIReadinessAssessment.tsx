import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AIReadinessAssessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    employeeCount: "",
    currentChallenges: "",
    aiGoals: "",
    existingTechnology: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-assessment-email', {
        body: {
          ...formData,
          to: "sam@imakemvps.com",
          subject: `New AI Readiness Assessment: ${formData.businessName}`,
        }
      });

      if (error) throw error;

      toast({
        title: "Assessment Submitted Successfully!",
        description: "We'll review your information and get back to you soon.",
      });
      
      navigate('/');
    } catch (error) {
      console.error('Error submitting assessment:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your assessment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            AI Readiness Assessment
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Business Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="employeeCount">Number of Employees</Label>
                  <Input
                    id="employeeCount"
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="currentChallenges">Current Business Challenges</Label>
                <Textarea
                  id="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
                  required
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="aiGoals">What do you hope to achieve with AI?</Label>
                <Textarea
                  id="aiGoals"
                  value={formData.aiGoals}
                  onChange={(e) => setFormData({ ...formData, aiGoals: e.target.value })}
                  required
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="existingTechnology">Current Technology Stack</Label>
                <Textarea
                  id="existingTechnology"
                  value={formData.existingTechnology}
                  onChange={(e) => setFormData({ ...formData, existingTechnology: e.target.value })}
                  placeholder="List any relevant software, tools, or systems you currently use"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="budget">Estimated Budget Range</Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Expected Timeline</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Assessment"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIReadinessAssessment;