import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageHeroSection from "@/components/ImageHeroSection";
import { ImageBlockFirst, ImageBlockSecond } from "@/components/ImageBlockSection";
import TrustSection from "@/components/TrustSection";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ImageHeroSection />
        <TrustSection />
        <SolutionsSection />
        <ImageBlockFirst />
        <HowItWorksSection />
        <ImageBlockSecond />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
