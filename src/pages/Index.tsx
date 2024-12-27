import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesGrid />
    </div>
  );
};

export default Index;