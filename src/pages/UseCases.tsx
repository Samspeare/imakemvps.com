import HeroSection from "@/components/use-cases/HeroSection";
import IndustrySection from "@/components/use-cases/IndustrySection";
import ComparisonSection from "@/components/use-cases/ComparisonSection";
import ImpactSection from "@/components/use-cases/ImpactSection";
import CtaSection from "@/components/use-cases/CtaSection";

const UseCases = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IndustrySection />
      <ComparisonSection />
      <ImpactSection />
      <CtaSection />
    </div>
  );
};

export default UseCases;