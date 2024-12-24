import { motion } from "framer-motion";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string | null;
    published_at: string;
    categories: string[];
    tags: string[];
  };
  index: number;
}

const BlogPost = ({ post, index }: BlogPostProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <span>{format(new Date(post.published_at), "MMMM d, yyyy")}</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <a
          href="#"
          className="text-primary hover:text-primary-dark transition-colors duration-200"
        >
          Read more →
        </a>
      </div>
    </motion.article>
  );
};

export default BlogPost;