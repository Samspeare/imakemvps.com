import { MessageSquare, Mail, Calendar, Users } from "lucide-react";

export const features = [
  {
    icons: [Users, MessageSquare],
    title: "TEAM CHAT",
    description: "Never miss important messages. Your AI assistant summarizes discussions and highlights action items.",
    bgColor: "bg-purple-50",
    iconColor: "text-primary",
    titleColor: "text-purple-600"
  },
  {
    icons: [Mail],
    title: "INBOX HELPER",
    description: "Let AI handle customer emails, draft responses, and keep your inbox organized.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
    titleColor: "text-pink-600"
  },
  {
    icons: [MessageSquare],
    title: "SOCIAL POSTS",
    description: "Create engaging content and schedule posts across all your social platforms.",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    titleColor: "text-green-600"
  },
  {
    icons: [Calendar],
    title: "SMART CALENDAR",
    description: "Book meetings, manage your schedule, and get reminders for important tasks.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    titleColor: "text-blue-600"
  }
];