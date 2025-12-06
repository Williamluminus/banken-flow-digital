import { FileText, Settings, TrendingUp, Package } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const SolutionsSection = () => {
  const parallaxOffset = useParallax(0.1);

  const solutions = [
    {
      icon: FileText,
      title: "Antecipação de Recebíveis",
      description:
        "Transforme duplicatas e cheques em dinheiro hoje. Fluxo contínuo sem dívidas bancárias.",
    },
    {
      icon: Settings,
      title: "Gestão Financeira & Trustee",
      description:
        "Terceirize a gestão do seu Contas a Pagar e Receber. Foco total nas vendas.",
    },
    {
      icon: TrendingUp,
      title: "FIDC",
      description:
        "Estrutura robusta com taxas competitivas para grandes volumes de recebíveis.",
    },
    {
      icon: Package,
      title: "Fomento Matéria-Prima",
      description:
        "Pagamos seu fornecedor à vista, garantindo seu poder de negociação.",
    },
  ];

  return (
    <section id="solucoes" className="bg-background py-24 lg:py-32 overflow-hidden">
      <div 
        className="container mx-auto px-6 lg:px-8"
        style={{ transform: `translateY(${parallaxOffset * -0.1}px)` }}
      >
        <div className="max-w-2xl mb-16">
          <h2 className="font-sora text-foreground text-3xl md:text-4xl font-semibold mb-4">
            Soluções para crescer
          </h2>
          <p className="text-foreground-muted">
            Tudo que sua empresa precisa para ter fluxo de caixa saudável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-border bg-background hover:bg-background-light-secondary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sora text-foreground text-xl font-semibold mb-3">
                {solution.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
