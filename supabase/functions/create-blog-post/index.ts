import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const formData = await req.formData()
    const title = formData.get('title')?.toString()
    const content = formData.get('content')?.toString()
    const excerpt = formData.get('excerpt')?.toString()
    const image = formData.get('image') as File | null
    
    // Validate required fields
    if (!title?.trim() || !content?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Title and content are required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    let imageUrl = null
    
    // Handle image upload if present
    if (image) {
      const fileExt = image.name.split('.').pop()
      const fileName = `${crypto.randomUUID()}.${fileExt}`
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog_images')
        .upload(fileName, image, {
          contentType: image.type,
          upsert: false
        })

      if (uploadError) {
        console.error('Image upload error:', uploadError)
        return new Response(
          JSON.stringify({ error: 'Failed to upload image', details: uploadError }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
      }

      // Get the public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('blog_images')
        .getPublicUrl(fileName)
      
      imageUrl = publicUrl
    }

    // Create blog post with optional image URL in content
    const finalContent = imageUrl 
      ? `${content}\n\n![Blog Image](${imageUrl})`
      : content

    const { data: post, error: postError } = await supabase
      .from('blog_posts')
      .insert([
        {
          title: title.trim(),
          content: finalContent.trim(),
          excerpt: excerpt?.trim() || null,
          published_at: new Date().toISOString(),
          author_id: (await supabase.auth.getUser()).data.user?.id
        }
      ])
      .select()
      .single()

    if (postError) {
      console.error('Blog post creation error:', postError)
      return new Response(
        JSON.stringify({ error: 'Failed to create blog post', details: postError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ 
        message: 'Blog post created successfully', 
        post,
        imageUrl 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred', details: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})