import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icons: LucideIcon[];
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  titleColor: string;
  delay?: number;
}

export const FeatureCard = ({
  icons,
  title,
  description,
  bgColor,
  iconColor,
  titleColor,
  delay = 0
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
      }}
      transition={{ duration: 0.3, delay }}
      className={`p-6 rounded-2xl ${bgColor} transform transition-all duration-300`}
    >
      <div className="space-y-4">
        <div className="flex gap-2">
          {icons.map((Icon, index) => (
            <Icon key={index} className={`w-6 h-6 ${iconColor}`} />
          ))}
        </div>
        <h3 className={`text-lg font-semibold ${titleColor}`}>{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
};