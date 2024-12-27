import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProblemSolutionSection />
      <FeaturesGrid />
    </div>
  );
};

export default Index;