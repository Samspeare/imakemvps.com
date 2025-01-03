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

    const emailContent = `
      New Contact Form Submission:
      
      Personal/Business Information:
      ----------------------------
      Full Name: ${formData.fullName || 'Not provided'}
      Email: ${formData.email || 'Not provided'}
      Phone Number: ${formData.phoneNumber || 'Not provided'}
      Business Name: ${formData.businessName || 'Not provided'}
      Job Title: ${formData.jobTitle || 'Not provided'}
      
      Project Details:
      ---------------
      Project Type: ${formData.projectType || 'Not provided'}
      Project Description: ${formData.projectDescription || 'Not provided'}
      Preferred Outcome: ${formData.preferredOutcome || 'Not provided'}
      
      Budget & Timeline:
      ----------------
      Budget Range: ${formData.budgetRange || 'Not provided'}
      Project Timeline: ${formData.projectTimeline || 'Not provided'}
      
      Tools & Systems:
      --------------
      Existing Tools: ${formData.existingTools || 'Not provided'}
      Has Dataset: ${formData.hasDataset || 'Not provided'}
      
      Communication Preferences:
      -----------------------
      Preferred Contact Method: ${formData.contactMethod || 'Not provided'}
      Best Time to Contact: ${formData.bestTimeToContact || 'Not provided'}
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
        html: `<pre>${emailContent}</pre>`,
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