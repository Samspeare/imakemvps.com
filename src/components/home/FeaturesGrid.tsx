import { motion } from "framer-motion";
import { MessageSquare, Mail, Calendar, Users } from "lucide-react";

export const FeaturesGrid = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-square bg-gradient-to-br from-purple-50 via-white to-purple-50 rounded-3xl p-4 shadow-lg">
          <div className="h-full grid grid-cols-2 gap-4">
            {/* Meetings Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col justify-center items-center p-6 rounded-2xl bg-white shadow-sm"
            >
              <div className="flex gap-2 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">MEETINGS</h3>
              <p className="text-sm text-gray-600 text-center">
                AI-generated summaries, transcripts, and video highlights to make your meetings more efficient.
              </p>
            </motion.div>

            {/* Email Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col justify-center items-center p-6 rounded-2xl bg-white shadow-sm"
            >
              <div className="mb-4">
                <Mail className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">EMAIL</h3>
              <p className="text-sm text-gray-600 text-center">
                Automated summaries, Q&A, and action items generated from your inbox with our Productivity AI.
              </p>
            </motion.div>

            {/* Messaging Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="relative flex flex-col justify-center items-center p-6 rounded-2xl bg-white shadow-sm"
            >
              <div className="mb-4">
                <MessageSquare className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">MESSAGING</h3>
              <p className="text-sm text-gray-600 text-center">
                Automated summaries, Q&A, and action items generated across your team messages.
              </p>
            </motion.div>

            {/* Scheduling Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="relative flex flex-col justify-center items-center p-6 rounded-2xl bg-white shadow-sm"
            >
              <div className="mb-4">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">SCHEDULING & MORE</h3>
              <p className="text-sm text-gray-600 text-center">
                Go beyond better meetings with Smart Scheduler, workflow integrations, and so much more!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};