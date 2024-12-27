import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    // Personal/Business Information
    fullName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    jobTitle: "",
    
    // Project Details
    projectType: "",
    projectDescription: "",
    preferredOutcome: "",
    
    // Budget and Timeline
    budgetRange: "",
    projectTimeline: "",
    
    // Tools and Systems
    existingTools: "",
    hasDataset: "",
    
    // Communication Preferences
    contactMethod: "",
    bestTimeToContact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll get back to you soon!",
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        businessName: "",
        jobTitle: "",
        projectType: "",
        projectDescription: "",
        preferredOutcome: "",
        budgetRange: "",
        projectTimeline: "",
        existingTools: "",
        hasDataset: "",
        contactMethod: "",
        bestTimeToContact: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule a Consultation</h1>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help bring your idea to life
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal/Business Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Personal/Business Information</h2>
              
              <div className="space-y-4">
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
                    placeholder="e.g., +1 555-123-4567"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
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
                    placeholder="e.g., Operations Manager, Founder, Software Engineer"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Project or Inquiry Details</h2>
              
              <div className="space-y-4">
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

                <div>
                  <Label htmlFor="projectDescription">Describe Your Challenge or Project Goals</Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="e.g., 'I need an AI tool to automate customer support tasks like answering FAQs and routing complex queries to a live agent.'"
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    disabled={isSubmitting}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="preferredOutcome">Preferred Outcome</Label>
                  <Textarea
                    id="preferredOutcome"
                    placeholder="e.g., 'I want to reduce manual work by automating repetitive tasks and improve response times for customer queries.'"
                    value={formData.preferredOutcome}
                    onChange={(e) => setFormData({ ...formData, preferredOutcome: e.target.value })}
                    disabled={isSubmitting}
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Budget and Timeline */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Budget and Timeline</h2>
              
              <div className="space-y-4">
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

            {/* Tools and Systems */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Existing Tools or Systems</h2>
              
              <div className="space-y-4">
                <div>
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

            {/* Communication Preferences */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Preferred Communication Method</h2>
              
              <div className="space-y-4">
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit Consultation Request"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;