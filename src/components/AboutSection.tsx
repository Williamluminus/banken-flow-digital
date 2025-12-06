import { useParallax } from "@/hooks/useParallax";

const AboutSection = () => {
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="sobre" className="bg-background py-24 lg:py-32 overflow-hidden">
      <div 
        className="container mx-auto px-6 lg:px-8"
        style={{ transform: `translateY(${parallaxOffset * -0.1}px)` }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-sora text-foreground text-3xl md:text-4xl font-semibold mb-8">
            O parceiro que faltava
          </h2>
          
          <p className="text-foreground-muted text-lg leading-relaxed">
            Não somos apenas uma factoring. Somos o motor financeiro do seu negócio. 
            Agilidade de fintech, segurança de quem tem mercado. 
            Na Banken, você fala com quem decide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
