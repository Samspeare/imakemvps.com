import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AssessmentData {
  businessName: string;
  industry: string;
  employeeCount: string;
  currentChallenges: string;
  aiGoals: string;
  existingTechnology: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  to: string;
  subject: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: AssessmentData = await req.json();
    
    const htmlContent = `
      <h1>New AI Readiness Assessment</h1>
      
      <h2>Business Information</h2>
      <p><strong>Business Name:</strong> ${data.businessName}</p>
      <p><strong>Industry:</strong> ${data.industry}</p>
      <p><strong>Employee Count:</strong> ${data.employeeCount}</p>
      
      <h2>Assessment Details</h2>
      <p><strong>Current Challenges:</strong><br>${data.currentChallenges}</p>
      <p><strong>AI Goals:</strong><br>${data.aiGoals}</p>
      <p><strong>Existing Technology:</strong><br>${data.existingTechnology}</p>
      <p><strong>Budget Range:</strong> ${data.budget}</p>
      <p><strong>Timeline:</strong> ${data.timeline}</p>
      
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AI Assessment <onboarding@resend.dev>",
        to: [data.to],
        subject: data.subject,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to send email: ${await res.text()}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
};

serve(handler);