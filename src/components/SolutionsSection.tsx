import { FileText, Settings, TrendingUp, Package } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: FileText,
      title: "Antecipação de Recebíveis",
      description:
        "Transforme duplicatas e cheques pré-datados em dinheiro no caixa hoje. Fluxo contínuo sem criar dívidas bancárias.",
    },
    {
      icon: Settings,
      title: "Gestão Financeira & Trustee",
      description:
        "Terceirize a gestão do seu Contas a Pagar e Receber. Nós cuidamos da operação, você foca nas vendas.",
    },
    {
      icon: TrendingUp,
      title: "FIDC (Fundos de Investimento)",
      description:
        "Estrutura robusta com taxas competitivas para grandes volumes de recebíveis. Segurança e capacidade de aporte.",
    },
    {
      icon: Package,
      title: "Fomento Matéria-Prima",
      description:
        "Ajudamos na compra de insumos pagando seu fornecedor à vista, garantindo seu poder de negociação.",
    },
  ];

  return (
    <section id="solucoes" className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-6">
            Soluções financeiras para seu negócio crescer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-semibold mb-4">
                {solution.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
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
