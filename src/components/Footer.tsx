import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Soluções", href: "/#solucoes" },
    { name: "Contato", href: "/contato" },
    { name: "Política de Privacidade", href: "#" },
  ];

  return (
    <footer className="bg-background-dark py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="flex flex-col gap-[3px]">
                  <div className="w-5 h-[3px] bg-primary rounded-full" />
                  <div className="w-4 h-[3px] bg-primary rounded-full" />
                  <div className="w-3 h-[3px] bg-primary rounded-full" />
                </div>
              </div>
              <span className="text-foreground-light font-outfit font-bold text-2xl tracking-tight">
                Banken
              </span>
            </Link>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground-light/60 hover:text-foreground-light text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Security Badge */}
          <div className="flex items-center gap-2 text-foreground-light/60">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Site Seguro (SSL)</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-foreground-light/10">
          <p className="text-foreground-light/40 text-sm text-center lg:text-left">
            © 2025 Banken Fomento Mercantil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
