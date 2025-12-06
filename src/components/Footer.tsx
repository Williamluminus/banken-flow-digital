import { Link } from "react-router-dom";
const Footer = () => {
  const links = [{
    name: "Home",
    href: "/"
  }, {
    name: "Soluções",
    href: "/#solucoes"
  }, {
    name: "Sobre",
    href: "/sobre"
  }, {
    name: "Contato",
    href: "/contato"
  }, {
    name: "Privacidade",
    href: "#"
  }];
  return <footer className="bg-background-dark py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                
              </div>
              <span className="text-foreground-light font-merriweather font-bold text-xl tracking-tight">
                Banken
              </span>
            </Link>
            <div className="font-nunito text-foreground-light/50 text-sm space-y-1">
              <p>(11) 4208-3432</p>
              <p>Av. Cauaxi, 293, 28º andar, Alphaville</p>
              <p>Barueri SP - CEP 06454-020</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {links.map(link => <Link key={link.name} to={link.href} className="font-nunito text-foreground-light/50 hover:text-foreground-light text-sm transition-colors">{link.name}
              </Link>)}
          </nav>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-foreground-light/10">
          <p className="font-nunito text-foreground-light/30 text-sm text-center">
            © 2025 Banken Fomento Mercantil
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;