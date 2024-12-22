import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building Your Next
              <span className="text-primary"> AI-Powered MVP</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your ideas into reality with our rapid MVP development services.
              We combine AI expertise with development excellence.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver high-quality MVPs that help validate your ideas quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rapid Development",
                description: "Get your MVP up and running in weeks, not months.",
              },
              {
                title: "AI Integration",
                description: "Leverage the latest AI technologies in your product.",
              },
              {
                title: "Scalable Architecture",
                description: "Built to grow with your business needs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;