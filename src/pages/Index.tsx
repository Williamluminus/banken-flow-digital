import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageHeroSection from "@/components/ImageHeroSection";
import ImageBlockSection from "@/components/ImageBlockSection";
import TrustSection from "@/components/TrustSection";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ImageHeroSection />
        <TrustSection />
        <SolutionsSection />
        <ImageBlockSection />
        <HowItWorksSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
