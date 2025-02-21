import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  jobTitle: string;
  projectType: string;
  projectDescription: string;
  preferredOutcome: string;
  budgetRange: string;
  projectTimeline: string;
  existingTools: string;
  hasDataset: string;
  contactMethod: string;
  bestTimeToContact: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Create a machine-readable version with clear delimiters
    const machineReadableContent = `
---START_CONTACT_FORM---
SECTION:PERSONAL
FULL_NAME:${formData.fullName || 'Not provided'}
EMAIL:${formData.email || 'Not provided'}
PHONE:${formData.phoneNumber || 'Not provided'}
BUSINESS:${formData.businessName || 'Not provided'}
JOB_TITLE:${formData.jobTitle || 'Not provided'}

SECTION:PROJECT
TYPE:${formData.projectType || 'Not provided'}
DESCRIPTION:${formData.projectDescription || 'Not provided'}
OUTCOME:${formData.preferredOutcome || 'Not provided'}

SECTION:BUDGET
RANGE:${formData.budgetRange || 'Not provided'}
TIMELINE:${formData.projectTimeline || 'Not provided'}

SECTION:TOOLS
EXISTING_TOOLS:${formData.existingTools || 'Not provided'}
HAS_DATASET:${formData.hasDataset || 'Not provided'}

SECTION:COMMUNICATION
CONTACT_METHOD:${formData.contactMethod || 'Not provided'}
BEST_TIME:${formData.bestTimeToContact || 'Not provided'}
---END_CONTACT_FORM---
`;

    // Create a human-readable HTML version
    const humanReadableContent = `
      <h2>New Contact Form Submission</h2>
      
      <h3>Personal/Business Information</h3>
      <ul>
        <li><strong>Full Name:</strong> ${formData.fullName || 'Not provided'}</li>
        <li><strong>Email:</strong> ${formData.email || 'Not provided'}</li>
        <li><strong>Phone Number:</strong> ${formData.phoneNumber || 'Not provided'}</li>
        <li><strong>Business Name:</strong> ${formData.businessName || 'Not provided'}</li>
        <li><strong>Job Title:</strong> ${formData.jobTitle || 'Not provided'}</li>
      </ul>
      
      <h3>Project Details</h3>
      <ul>
        <li><strong>Project Type:</strong> ${formData.projectType || 'Not provided'}</li>
        <li><strong>Project Description:</strong> ${formData.projectDescription || 'Not provided'}</li>
        <li><strong>Preferred Outcome:</strong> ${formData.preferredOutcome || 'Not provided'}</li>
      </ul>
      
      <h3>Budget & Timeline</h3>
      <ul>
        <li><strong>Budget Range:</strong> ${formData.budgetRange || 'Not provided'}</li>
        <li><strong>Project Timeline:</strong> ${formData.projectTimeline || 'Not provided'}</li>
      </ul>
      
      <h3>Tools & Systems</h3>
      <ul>
        <li><strong>Existing Tools:</strong> ${formData.existingTools || 'Not provided'}</li>
        <li><strong>Has Dataset:</strong> ${formData.hasDataset || 'Not provided'}</li>
      </ul>
      
      <h3>Communication Preferences</h3>
      <ul>
        <li><strong>Preferred Contact Method:</strong> ${formData.contactMethod || 'Not provided'}</li>
        <li><strong>Best Time to Contact:</strong> ${formData.bestTimeToContact || 'Not provided'}</li>
      </ul>

      <hr>
      <pre style="font-family: monospace; background-color: #f5f5f5; padding: 15px; margin-top: 20px;">
${machineReadableContent}
      </pre>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "I Make MVPs <onboarding@resend.dev>",
        to: ["sam@imakemvps.com"],
        subject: "New Contact Form Submission",
        html: humanReadableContent,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Email sent successfully:", data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);