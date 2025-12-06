import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, FileUp, Zap } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const HowItWorksSection = () => {
  const parallaxOffset = useParallax(0.15);

  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Cadastro",
      description: "Preencha os dados da sua empresa.",
    },
    {
      icon: FileUp,
      number: "02",
      title: "Envio",
      description: "Envie suas notas ou duplicatas.",
    },
    {
      icon: Zap,
      number: "03",
      title: "Liberação",
      description: "Dinheiro na conta via TED/PIX.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-background-dark-secondary py-24 lg:py-32 overflow-hidden">
      <div 
        className="container mx-auto px-6 lg:px-8"
        style={{ transform: `translateY(${parallaxOffset * -0.15}px)` }}
      >
        <div className="max-w-2xl mb-16">
          <h2 className="font-merriweather text-foreground-light text-3xl md:text-4xl font-bold mb-4">
            Crédito em 3 passos
          </h2>
          <p className="font-nunito text-foreground-light/60">
            Simples, rápido e sem burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-background-dark/50 border border-foreground-light/5"
            >
              <step.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1} />
              <span className="font-nunito text-primary font-medium text-sm mb-3 block">
                Passo {step.number}
              </span>
              <h3 className="font-merriweather text-foreground-light text-xl font-bold mb-2">
                {step.title}
              </h3>
              <p className="font-nunito text-foreground-light/50 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contato">
            <Button variant="hero" size="xl" className="rounded-full">
              Iniciar Cadastro
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
