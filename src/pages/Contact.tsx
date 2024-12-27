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
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { title: "Personal Information", component: PersonalInfoSection },
    { title: "Project Details", component: ProjectDetailsSection },
    { title: "Budget & Timeline", component: BudgetTimelineSection },
    { title: "Tools & Systems", component: ToolsSystemsSection },
    { title: "Communication Preferences", component: CommunicationSection },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully! 🎉",
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
      setCurrentSection(0);
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

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help bring your idea to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    currentSection === index
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {section.title}
                  {currentSection === index && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <CurrentSectionComponent
                formData={formData}
                setFormData={setFormData}
                isSubmitting={isSubmitting}
              />
            </motion.div>

            <div className="flex justify-between items-center pt-4">
              {currentSection > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentSection(currentSection - 1)}
                  className="px-6 py-2 text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors duration-200"
                >
                  Previous
                </button>
              )}
              
              {currentSection < sections.length - 1 ? (
                <button
                  type="button" // Changed from implicit submit
                  onClick={(e) => {
                    e.preventDefault(); // Prevent form submission
                    setCurrentSection(currentSection + 1);
                  }}
                  className="ml-auto px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    "Submit Consultation Request"
                  )}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
