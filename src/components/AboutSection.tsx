const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-8">
            O parceiro que a sua empresa precisava
          </h2>
          
          <p className="text-foreground-muted text-lg md:text-xl leading-relaxed">
            Não somos apenas uma factoring. Somos o motor financeiro para o seu negócio. 
            Combinamos a agilidade das fintechs com a segurança de quem tem anos de mercado. 
            Na Banken, você não fala com robôs, fala com quem decide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
