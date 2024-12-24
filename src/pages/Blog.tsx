import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPost from "@/components/blog/BlogPost";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  published_at: string;
  categories: string[];
  tags: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, selectedTag]);

  const fetchPosts = async () => {
    let query = supabase
      .from("blog_posts")
      .select("*")
      .order("published_at", { ascending: false });

    if (selectedCategory && selectedCategory !== "all") {
      query = query.contains("categories", [selectedCategory]);
    }

    if (selectedTag && selectedTag !== "all") {
      query = query.contains("tags", [selectedTag]);
    }

    const { data, error } = await query;

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
      
      // Extract unique categories and tags
      const allCategories = new Set<string>();
      const allTags = new Set<string>();
      
      data?.forEach((post) => {
        post.categories?.forEach((category) => allCategories.add(category));
        post.tags?.forEach((tag) => allTags.add(tag));
      });
      
      setCategories(Array.from(allCategories));
      setTags(Array.from(allTags));
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHeader
          categories={categories}
          tags={tags}
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;