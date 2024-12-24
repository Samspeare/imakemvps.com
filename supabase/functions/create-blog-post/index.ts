import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET')

interface BlogPost {
  title: string;
  content: string;
  excerpt?: string;
  published_at?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Verify webhook secret
    const authHeader = req.headers.get('authorization')
    if (!authHeader || authHeader !== `Bearer ${WEBHOOK_SECRET}`) {
      console.error('Unauthorized request: Invalid webhook secret')
      return new Response(
        JSON.stringify({ 
          error: 'Unauthorized', 
          message: 'Invalid or missing webhook secret'
        }),
        { 
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parse and validate request body
    const requestData: BlogPost = await req.json()
    console.log('Received blog post data:', requestData)

    // Validate required fields
    if (!requestData.title?.trim()) {
      console.error('Missing or empty title field')
      return new Response(
        JSON.stringify({ 
          error: 'Validation Error', 
          message: 'Title is required and cannot be empty' 
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!requestData.content?.trim()) {
      console.error('Missing or empty content field')
      return new Response(
        JSON.stringify({ 
          error: 'Validation Error', 
          message: 'Content is required and cannot be empty' 
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get the admin user's ID (sam@imakemvps.com)
    const { data: adminUser, error: userError } = await supabaseClient
      .from('auth.users')
      .select('id')
      .eq('email', 'sam@imakemvps.com')
      .single()

    if (userError || !adminUser) {
      console.error('Error finding admin user:', userError)
      return new Response(
        JSON.stringify({ 
          error: 'Server Error', 
          message: 'Could not find admin user' 
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Prepare blog post data with defaults
    const blogPostData = {
      title: requestData.title.trim(),
      content: requestData.content.trim(),
      excerpt: requestData.excerpt?.trim() || null,
      published_at: requestData.published_at || new Date().toISOString(),
      author_id: adminUser.id
    }

    // Create the blog post
    const { data, error } = await supabaseClient
      .from('blog_posts')
      .insert([blogPostData])
      .select()
      .single()

    if (error) {
      console.error('Error creating blog post:', error)
      return new Response(
        JSON.stringify({ 
          error: 'Database Error', 
          message: 'Failed to create blog post',
          details: error.message 
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Successfully created blog post:', data)

    return new Response(
      JSON.stringify({ 
        success: true, 
        data,
        message: 'Blog post created successfully' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Server Error', 
        message: 'An unexpected error occurred',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})