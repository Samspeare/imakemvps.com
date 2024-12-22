import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in MVP Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we build and validate MVPs.",
      date: "2024-02-20",
      readTime: "5 min read",
    },
    {
      title: "Building Scalable MVPs",
      excerpt: "Learn the best practices for creating MVPs that can grow with your business.",
      date: "2024-02-15",
      readTime: "4 min read",
    },
    {
      title: "From Idea to MVP in 4 Weeks",
      excerpt: "A step-by-step guide to rapidly developing your minimum viable product.",
      date: "2024-02-10",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights and updates from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  Read more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;