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
      label: "Crédito no mesmo dia",
    },
    {
      icon: Users,
      value: "Atendimento Humano",
      label: "Fale com especialistas",
    },
  ];

  return (
    <section className="bg-background-light-secondary py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-4 rounded-full bg-background"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-sora font-semibold text-sm">
                  {stat.value}
                </p>
                <p className="text-foreground-muted text-xs">
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
