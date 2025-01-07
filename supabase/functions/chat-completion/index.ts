import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Configuration, OpenAIApi } from "https://esm.sh/openai@3.2.1"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, sessionId } = await req.json()

    // Create a Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Initialize OpenAI
    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    })
    const openai = new OpenAIApi(configuration)

    // Get chat history
    const { data: messages } = await supabaseClient
      .from('chat_messages')
      .select('content, role')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })

    // Format messages for OpenAI
    const formattedMessages = messages?.map(msg => ({
      role: msg.role,
      content: msg.content,
    })) || []

    // Add system message
    formattedMessages.unshift({
      role: 'system',
      content: 'You are an AI consultant specializing in feasibility assessments for AI projects. Your goal is to help users understand if their project can benefit from AI, what technologies might be suitable, potential challenges, and estimated costs. Be thorough but concise in your analysis.',
    })

    // Add user's new message
    formattedMessages.push({
      role: 'user',
      content: message,
    })

    // Get completion from OpenAI
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 1000,
    })

    const aiResponse = completion.data.choices[0].message?.content || ''

    // Store the messages in the database
    await supabaseClient.from('chat_messages').insert([
      {
        session_id: sessionId,
        content: message,
        role: 'user',
      },
      {
        session_id: sessionId,
        content: aiResponse,
        role: 'assistant',
      },
    ])

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})