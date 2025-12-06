import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);

  return (
    <section className="bg-background-dark min-h-screen flex items-center pt-20 overflow-hidden">
      <div 
        className="container mx-auto px-6 lg:px-8 py-24 lg:py-32"
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      >
        <div className="max-w-4xl">
          <h1 className="font-sora text-foreground-light text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 animate-fade-up">
            Transforme suas vendas a prazo em{" "}
            <span className="text-primary">capital de giro</span> à vista.
          </h1>
          
          <p className="text-foreground-light/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Antecipação de recebíveis, gestão financeira e crédito estruturado 
            para empresas que não podem parar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/contato">
              <Button variant="hero" size="xl" className="group rounded-full">
                Quero Simular Antecipação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <p className="text-foreground-light/40 text-sm animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Resposta ágil • Taxas transparentes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
