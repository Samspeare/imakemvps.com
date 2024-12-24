import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface BlogPostFormData {
  title: string;
  content: string;
  excerpt: string;
}

const BlogPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const form = useForm<BlogPostFormData>({
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
    },
  });

  // Get the current user when component mounts
  useState(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const onSubmit = async (data: BlogPostFormData) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create or edit blog posts",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const postData = {
      ...data,
      author_id: user.id,
    };

    const { error } = id
      ? await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", id)
      : await supabase
          .from("blog_posts")
          .insert([postData]);

    setLoading(false);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to save blog post",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Blog post saved successfully",
      });
      navigate("/admin/blog");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {id ? "Edit Blog Post" : "Create New Blog Post"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Excerpt</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea className="min-h-[300px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Post"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/blog")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BlogPostEditor;