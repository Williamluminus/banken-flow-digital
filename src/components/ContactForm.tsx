import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length <= 2) {
    return numbers.length > 0 ? `(${numbers}` : "";
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });

    setIsSubmitting(false);
    setPhone("");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground text-sm">
            Nome Completo
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Seu nome"
            className="bg-background border-border rounded-xl h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground text-sm">
            Nome da Empresa
          </Label>
          <Input
            id="company"
            name="company"
            required
            placeholder="Sua empresa"
            className="bg-background border-border rounded-xl h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground text-sm">
            E-mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@empresa.com"
            className="bg-background border-border rounded-xl h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground text-sm">
            Telefone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(11) 99999-9999"
            value={phone}
            onChange={handlePhoneChange}
            className="bg-background border-border rounded-xl h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="revenue" className="text-foreground text-sm">
            Faturamento Mensal
          </Label>
          <Select name="revenue" required>
            <SelectTrigger className="bg-background border-border rounded-xl h-12">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="ate-50k">Até R$ 50 mil</SelectItem>
              <SelectItem value="50k-200k">R$ 50 mil a R$ 200 mil</SelectItem>
              <SelectItem value="acima-200k">Acima de R$ 200 mil</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service" className="text-foreground text-sm">
            Como podemos ajudar?
          </Label>
          <Select name="service" required>
            <SelectTrigger className="bg-background border-border rounded-xl h-12">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="antecipacao">Antecipação de Notas</SelectItem>
              <SelectItem value="gestao">Gestão Financeira</SelectItem>
              <SelectItem value="parceria">Parceria</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full rounded-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Falar com Especialista"}
      </Button>
    </form>
  );
};

export default ContactForm;
