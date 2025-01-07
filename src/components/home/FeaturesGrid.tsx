import { motion } from "framer-motion";
import { MessageSquare, Mail, Calendar, Users } from "lucide-react";

export const FeaturesGrid = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-purple-50 transform transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex gap-2">
                <Users className="w-6 h-6 text-primary" />
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-purple-600">TEAM CHAT</h3>
              <p className="text-gray-600">
                Never miss important messages. Your AI assistant summarizes discussions and highlights action items.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 rounded-2xl bg-pink-50 transform transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex gap-2">
                <Mail className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-pink-600">INBOX HELPER</h3>
              <p className="text-gray-600">
                Let AI handle customer emails, draft responses, and keep your inbox organized.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-6 rounded-2xl bg-green-50 transform transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex gap-2">
                <MessageSquare className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-green-600">SOCIAL POSTS</h3>
              <p className="text-gray-600">
                Create engaging content and schedule posts across all your social platforms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="p-6 rounded-2xl bg-blue-50 transform transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex gap-2">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-blue-600">SMART CALENDAR</h3>
              <p className="text-gray-600">
                Book meetings, manage your schedule, and get reminders for important tasks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};