import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, FileUp, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Cadastro Digital",
      description: "Preencha os dados da sua empresa.",
    },
    {
      icon: FileUp,
      number: "02",
      title: "Envio de Títulos",
      description: "Envie suas notas (XML) ou duplicatas para análise.",
    },
    {
      icon: Zap,
      number: "03",
      title: "Liberação",
      description: "Aprovou? O dinheiro cai na conta via TED/PIX.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-background-dark-secondary py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-foreground-light text-3xl md:text-4xl font-bold mb-6">
            Do cadastro ao crédito em 3 passos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <span className="text-primary font-semibold text-sm mb-2 block">
                    Passo {step.number}
                  </span>
                  <h3 className="text-foreground-light text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground-light/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contato">
            <Button variant="hero" size="xl">
              Iniciar Cadastro
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
