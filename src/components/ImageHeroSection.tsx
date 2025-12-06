import { useParallax } from "@/hooks/useParallax";
import heroImage from "@/assets/hero-handshake.jpg";

const ImageHeroSection = () => {
  const parallaxOffset = useParallax(0.5);
  
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={heroImage}
        alt="Parceria empresarial - aperto de mãos simbolizando confiança"
        className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
      />
      <div className="absolute inset-0 bg-background-dark/40" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-merriweather text-foreground-light text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            O Capital de Giro que Acelera Sua Próxima Meta.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageHeroSection;
