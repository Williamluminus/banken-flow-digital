import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useParallax } from "@/hooks/useParallax";
import { CheckCircle } from "lucide-react";

const Sobre = () => {
  const parallaxOffset = useParallax(0.2);

  const highlights = [
    "Expertise sólida com visão de futuro.",
    "Localizados no centro de inovação de Alphaville.",
    "Comprometimento com a transparência e agilidade total.",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-background-dark py-24 lg:py-32 overflow-hidden">
          <div 
            className="container mx-auto px-6 lg:px-8"
            style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
          >
            <div className="max-w-3xl">
              <h1 className="font-merriweather text-foreground-light text-4xl md:text-5xl font-bold mb-6">
                O motor financeiro que a sua empresa precisa
              </h1>
              <p className="font-nunito text-foreground-light/60 text-lg leading-relaxed">
                A Banken nasceu da necessidade de desburocratizar o acesso ao capital de giro no mercado B2B. Nossa missão é clara: transformar o tempo de espera em tempo de crescimento.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {/* Main Text */}
                <div>
                  <p className="font-nunito text-foreground-muted text-lg leading-relaxed mb-8">
                    Combinamos a segurança de uma factoring tradicional, com anos de expertise em crédito e risco, com a agilidade e transparência de uma fintech de ponta. Isso significa que sua empresa obtém as melhores taxas e a análise mais rápida, sem abrir mão da consultoria humana e especializada. Na Banken, seu negócio é estratégico, e não apenas um número no sistema.
                  </p>
                </div>

                {/* Sede Section */}
                <div className="pt-8 border-t border-border">
                  <h2 className="font-merriweather text-foreground text-2xl md:text-3xl font-bold mb-6">
                    Nossa Sede: O Coração de Alphaville
                  </h2>
                  <p className="font-nunito text-foreground-muted text-lg leading-relaxed">
                    Estamos localizados em Alphaville, Barueri (SP), um dos principais polos financeiros e tecnológicos do país. Estar em um ambiente que respira inovação e alta performance reflete o nosso compromisso: oferecer soluções financeiras dinâmicas e de alto valor, acompanhando o ritmo acelerado das empresas que atendemos. Venha nos visitar e conhecer a estrutura que impulsiona centenas de CNPJs todos os meses.
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-8 border-t border-border">
                  <div className="space-y-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <p className="font-nunito text-foreground text-lg font-medium">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
