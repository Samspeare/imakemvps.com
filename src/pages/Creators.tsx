import { HeroSection } from "@/components/creators/HeroSection";
import { ImpactSection } from "@/components/creators/ImpactSection";
import { CtaSection } from "@/components/creators/CtaSection";

const Creators = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20">
        <HeroSection />
        <ImpactSection />
        <CtaSection />
      </div>
    </div>
  );
};

export default Creators;