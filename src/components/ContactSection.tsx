import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contato" className="bg-background-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="font-merriweather text-foreground-light text-3xl md:text-4xl font-bold mb-6">
              Vamos acelerar o seu negócio?
            </h2>
            <p className="font-nunito text-foreground-light/60 text-lg leading-relaxed">
              Nossa equipe está pronta para analisar sua necessidade 
              e desenhar a melhor operação para sua empresa.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-3xl p-8 lg:p-10">
            <h3 className="font-merriweather text-foreground text-xl font-bold mb-6">
              Preencha o formulário
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
