import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const WEBHOOK_URL = "https://mvpsnow.free.beeceptor.com"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

async function callWebhook(payload: any) {
  console.log('Attempting to call webhook with payload:', payload)
  
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_name: payload.agent_name,
        agent_type: payload.agent_type,
        settings: payload.settings,
        user_id: payload.user_id,
        action: payload.action
      }),
    })
    
    if (!response.ok) {
      console.error('Webhook response not OK:', response.status, response.statusText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    console.log('Webhook call successful')
    return { success: true }
  } catch (error) {
    console.error('Webhook error:', error)
    return { success: false, error: error.message }
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    console.log('Received request with payload:', payload)
    
    const result = await callWebhook(payload)
    
    return new Response(
      JSON.stringify(result),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  } catch (error) {
    console.error('Error in edge function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  }
})