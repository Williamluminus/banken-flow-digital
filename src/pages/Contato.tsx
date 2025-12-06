import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Contato = () => {
  const whatsappNumber = "5511942083432";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções da Banken.");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-background-dark py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-foreground-light text-4xl md:text-5xl font-bold mb-6">
                Vamos acelerar o seu negócio?
              </h1>
              <p className="text-foreground-light/70 text-lg md:text-xl leading-relaxed">
                Nossa equipe de especialistas está pronta para analisar sua necessidade 
                e desenhar a melhor operação de crédito para sua empresa.
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
                <h2 className="text-foreground text-2xl font-semibold mb-8">
                  Preencha o formulário
                </h2>
                <ContactForm />
              </div>

              {/* Direct Channels */}
              <div>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  Prefere um atendimento imediato?
                </h2>
                <p className="text-foreground-muted mb-8">
                  A burocracia passa longe daqui. Escolha o canal mais rápido para você:
                </p>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="p-6 rounded-xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-foreground font-semibold mb-1">
                          WhatsApp Comercial
                        </h3>
                        <p className="text-foreground-muted text-sm mb-4">
                          Tempo médio de resposta: 10 minutos
                        </p>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="default" size="default">
                            Iniciar conversa no WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-6 rounded-xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold mb-1">
                          Telefone
                        </h3>
                        <a
                          href="tel:+551142083432"
                          className="text-foreground-muted hover:text-primary transition-colors"
                        >
                          (11) 4208-3432
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-6 rounded-xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold mb-1">
                          E-mail
                        </h3>
                        <a
                          href="mailto:contato@banken.com.br"
                          className="text-foreground-muted hover:text-primary transition-colors"
                        >
                          contato@banken.com.br
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="p-6 rounded-xl border border-border bg-background">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold mb-1">
                          Onde Estamos
                        </h3>
                        <p className="text-foreground-muted text-sm">
                          Sede Banken<br />
                          Venha tomar um café conosco e conhecer nossa estrutura.
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
    </div>
  );
};

export default Contato;
