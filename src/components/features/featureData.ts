import { 
  ArrowRightLeft, 
  Bot, 
  Brain, 
  ChartBar, 
  Clock, 
  FileSpreadsheet, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  Users 
} from "lucide-react";

export const features = [
  {
    icons: [ArrowRightLeft, Sparkles],
    title: "SYSTEM INTEGRATION",
    description: "Connect your CRM, email, and accounting tools into one seamless workflow. Save 15+ hours monthly on manual data entry.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    titleColor: "text-blue-600"
  },
  {
    icons: [Clock, Bot],
    title: "SMART AUTOMATION",
    description: "Automate repetitive tasks like invoice processing and payment reminders. Reclaim 10+ hours every week.",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    titleColor: "text-green-600"
  },
  {
    icons: [Brain, ChartBar],
    title: "DATA INSIGHTS",
    description: "Get actionable insights from your business data. Increase revenue by 25% with AI-driven recommendations.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    titleColor: "text-purple-600"
  },
  {
    icons: [MessageSquare, Users],
    title: "CUSTOMER SUPPORT",
    description: "Provide 24/7 personalized support with AI chatbots. Boost customer satisfaction by 30%.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
    titleColor: "text-pink-600"
  },
  {
    icons: [Share2, FileSpreadsheet],
    title: "CONTENT AUTOMATION",
    description: "Schedule and optimize social media posts automatically. Generate engaging content in minutes, not hours.",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
    titleColor: "text-amber-600"
  }
];

export const integrationExamples = [
  {
    title: "Before AI Integration",
    points: [
      "Hours spent manually entering data across platforms",
      "Delayed responses to customer inquiries",
      "Inconsistent social media presence",
      "Manual report generation taking days"
    ]
  },
  {
    title: "After AI Integration",
    points: [
      "Automatic data sync across all platforms",
      "Instant 24/7 customer support",
      "Scheduled and optimized content delivery",
      "Real-time reporting and analytics"
    ]
  }
];