import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { PersonaSection } from "@/components/home/PersonaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PersonaSection />
      <AboutSection />
      <ProblemSolutionSection />
      <FeaturesGrid />
    </div>
  );
};

export default Index;