import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageSquare, Mail, Calendar, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              ABOUT US
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              Building The Future Of Work
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I Make MVPs is building the future of work, where every interaction is improved with AI.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Meetings Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-purple-50"
            >
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-purple-600">MEETINGS</h3>
                <p className="text-gray-600">
                  AI-generated summaries, transcripts, and video highlights to make your meetings more efficient.
                </p>
              </div>
            </motion.div>

            {/* Email Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-pink-50"
            >
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Mail className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold text-pink-600">EMAIL</h3>
                <p className="text-gray-600">
                  Automated summaries, Q&A, and action items generated from your inbox with our Productivity AI.
                </p>
              </div>
            </motion.div>

            {/* Messaging Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-green-50"
            >
              <div className="space-y-4">
                <div className="flex gap-2">
                  <MessageSquare className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-green-600">MESSAGING</h3>
                <p className="text-gray-600">
                  Automated summaries, Q&A, and action items generated across your team messages.
                </p>
              </div>
            </motion.div>

            {/* Scheduling Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-blue-50"
            >
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-blue-600">SCHEDULING & MORE</h3>
                <p className="text-gray-600">
                  Go beyond better meetings with Smart Scheduler, workflow integrations, and so much more!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;