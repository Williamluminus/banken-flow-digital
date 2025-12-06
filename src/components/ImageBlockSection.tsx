import { useParallax } from "@/hooks/useParallax";
import portrait1 from "@/assets/portrait-1.png";
import portrait2 from "@/assets/portrait-2.png";

interface ImageBlockProps {
  image: string;
  alt: string;
  text: string;
  textPosition?: "left" | "center" | "right";
}

const ImageBlock = ({ image, alt, text, textPosition = "center" }: ImageBlockProps) => {
  const parallaxOffset = useParallax(0.3);
  
  const textAlignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[textPosition];

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
      />
      <div className="absolute inset-0 bg-background-dark/30" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className={`container mx-auto px-6 lg:px-8 flex flex-col ${textAlignClass}`}>
          <h2 className="font-merriweather text-foreground-light text-2xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
            {text}
          </h2>
        </div>
      </div>
    </section>
  );
};

export const ImageBlockFirst = () => (
  <ImageBlock
    image={portrait1}
    alt="Empresária confiante - parceria de negócios"
    text="Livre de Burocracia Bancária."
    textPosition="left"
  />
);

export const ImageBlockSecond = () => (
  <ImageBlock
    image={portrait2}
    alt="Profissional de negócios - liderança e confiança"
    text="O Fôlego Financeiro da Sua Empresa Chega Hoje."
    textPosition="right"
  />
);

export default ImageBlock;
