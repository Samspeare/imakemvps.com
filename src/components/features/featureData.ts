import { 
  Sparkles, 
  PenTool, 
  MessageCircle, 
  BarChart2, 
  Calendar, 
  Palette,
  Users,
  TrendingUp,
  Bot,
  LineChart
} from "lucide-react";

export const features = [
  {
    icons: [PenTool, Sparkles],
    title: "CONTENT CREATION",
    description: "Generate blog posts, video scripts, and social media content in minutes. Save 20+ hours monthly on content creation.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    titleColor: "text-purple-600"
  },
  {
    icons: [MessageCircle, Bot],
    title: "AUDIENCE ENGAGEMENT",
    description: "Automate responses to comments and DMs. Increase engagement rates by 40% with personalized interactions.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    titleColor: "text-blue-600"
  },
  {
    icons: [BarChart2, TrendingUp],
    title: "ANALYTICS & INSIGHTS",
    description: "Get AI-powered recommendations for content strategy. Grow your audience 3x faster with data-driven decisions.",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    titleColor: "text-green-600"
  },
  {
    icons: [Calendar, Palette],
    title: "CONTENT SCHEDULING",
    description: "Plan and schedule content across all platforms automatically. Maintain consistent posting with zero effort.",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
    titleColor: "text-amber-600"
  },
  {
    icons: [Users, LineChart],
    title: "AUDIENCE ANALYSIS",
    description: "Understand your audience better with AI-powered insights. Optimize content for maximum engagement.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
    titleColor: "text-pink-600"
  }
];

export const integrationExamples = [
  {
    title: "Before AI Tools",
    points: [
      "Hours spent brainstorming content ideas",
      "Manual response to every comment",
      "Guessing the best time to post",
      "Basic analytics with no actionable insights"
    ]
  },
  {
    title: "After AI Tools",
    points: [
      "Generate month's worth of content in minutes",
      "Automated, personalized engagement",
      "Data-driven posting schedule",
      "Predictive analytics and trend forecasting"
    ]
  }
];