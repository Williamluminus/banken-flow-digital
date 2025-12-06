import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const Contato = () => {
  const whatsappNumber = "5511990054114";
  const whatsappMessage = encodeURIComponent("Tenho interesse em conhecer a Banken.");
  const parallaxOffset = useParallax(0.2);

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
            <div className="max-w-2xl">
              <h1 className="font-merriweather text-foreground-light text-4xl md:text-5xl font-bold mb-6">
                Vamos acelerar o seu negócio?
              </h1>
              <p className="font-nunito text-foreground-light/60 text-lg leading-relaxed">
                Nossa equipe está pronta para analisar sua necessidade 
                e desenhar a melhor operação para sua empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-background py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form */}
              <div>
                <h2 className="font-merriweather text-foreground text-2xl font-bold mb-8">
                  Preencha o formulário
                </h2>
                <ContactForm />
              </div>

              {/* Direct Channels */}
              <div>
                <h2 className="font-merriweather text-foreground text-2xl font-bold mb-4">
                  Atendimento imediato
                </h2>
                <p className="font-nunito text-foreground-muted mb-8 text-sm">
                  Escolha o canal mais rápido para você:
                </p>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <div className="p-6 rounded-3xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1} />
                      <div className="flex-1">
                        <h3 className="font-merriweather text-foreground font-bold mb-1">
                          WhatsApp
                        </h3>
                        <p className="font-nunito text-foreground-muted text-xs mb-4">
                          Resposta em até 10 minutos
                        </p>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="default" size="default" className="rounded-full">
                            Iniciar conversa
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-6 rounded-3xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <Phone className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1} />
                      <div>
                        <h3 className="font-merriweather text-foreground font-bold mb-1">
                          Telefone
                        </h3>
                        <a
                          href="tel:+551142083432"
                          className="font-nunito text-foreground-muted text-sm hover:text-primary transition-colors"
                        >
                          (11) 4208-3432
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-6 rounded-3xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <Mail className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1} />
                      <div>
                        <h3 className="font-merriweather text-foreground font-bold mb-1">
                          E-mail
                        </h3>
                        <a
                          href="mailto:contato@banken.com.br"
                          className="font-nunito text-foreground-muted text-sm hover:text-primary transition-colors"
                        >
                          contato@banken.com.br
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="p-6 rounded-3xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1} />
                      <div>
                        <h3 className="font-merriweather text-foreground font-bold mb-1">
                          Sede
                        </h3>
                        <p className="font-nunito text-foreground-muted text-sm">
                          Av. Cauaxi, 293, 28º andar, Alphaville<br />
                          Barueri SP - CEP 06454-020
                        </p>
                      </div>
                    </div>
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

export default Contato;
