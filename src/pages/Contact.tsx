import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PersonalInfoSection } from "@/components/contact-form/PersonalInfoSection";
import { ProjectDetailsSection } from "@/components/contact-form/ProjectDetailsSection";
import { BudgetTimelineSection } from "@/components/contact-form/BudgetTimelineSection";
import { ToolsSystemsSection } from "@/components/contact-form/ToolsSystemsSection";
import { CommunicationSection } from "@/components/contact-form/CommunicationSection";

const Contact = () => {
  const [formData, setFormData] = useState({
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help bring your idea to life
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <PersonalInfoSection
              formData={formData}
              setFormData={setFormData}
              isSubmitting={isSubmitting}
            />
            
            <ProjectDetailsSection
              formData={formData}
              setFormData={setFormData}
              isSubmitting={isSubmitting}
            />
            
            <BudgetTimelineSection
              formData={formData}
              setFormData={setFormData}
            />
            
            <ToolsSystemsSection
              formData={formData}
              setFormData={setFormData}
              isSubmitting={isSubmitting}
            />
            
            <CommunicationSection
              formData={formData}
              setFormData={setFormData}
            />

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