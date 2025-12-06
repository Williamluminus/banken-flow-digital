import { Banknote, Clock, Users } from "lucide-react";

const TrustSection = () => {
  const stats = [
    {
      icon: Banknote,
      value: "+ R$ 50 Milhões",
      label: "fomentados",
    },
    {
      icon: Clock,
      value: "Dinheiro Rápido",
      label: "Crédito na conta no mesmo dia da aprovação",
    },
    {
      icon: Users,
      value: "Atendimento Humano",
      label: "Fale com especialistas reais",
    },
  ];

  return (
    <section className="bg-background-light-secondary py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-lg mb-1">
                  {stat.value}
                </p>
                <p className="text-foreground-muted text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
