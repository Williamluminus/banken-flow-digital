# Banken - Site Estático (HTML/CSS/JS)

Este é o site da Banken convertido para HTML, CSS e JavaScript puro.

## Estrutura de Arquivos

```
static-site/
├── index.html          # Página inicial
├── contato.html        # Página de contato
├── sobre.html          # Página sobre nós
├── css/
│   └── styles.css      # Estilos CSS (baseado em Tailwind)
├── js/
│   └── main.js         # JavaScript (menu mobile, parallax, form)
└── images/             # Pasta para imagens (você precisa adicionar)
    ├── hero-handshake.jpg
    ├── portrait-1.png
    └── portrait-2.png
```

## Como Usar

1. **Copie a pasta `static-site`** para o seu ambiente de desenvolvimento

2. **Adicione as imagens** na pasta `images/`:
   - `hero-handshake.jpg` - Imagem do hero principal
   - `portrait-1.png` - Primeira imagem de bloco
   - `portrait-2.png` - Segunda imagem de bloco

3. **Abra no navegador** - Basta abrir o arquivo `index.html` em qualquer navegador moderno

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos com variáveis CSS (design tokens)
- **JavaScript** - Menu mobile, scroll suave, parallax, máscara de telefone

## Design System

As cores e estilos são definidos via CSS Variables no início do arquivo `styles.css`:

```css
:root {
  --background: hsl(40, 20%, 89%);         /* Cream/Beige */
  --background-dark: hsl(150, 12%, 11%);   /* Dark Green */
  --primary: hsl(68, 79%, 61%);            /* Lime Green */
  --foreground: hsl(150, 10%, 15%);        /* Dark text */
  --foreground-light: hsl(0, 0%, 98%);     /* Light text */
}
```

## Fontes

As fontes são carregadas do Google Fonts:
- **Merriweather** - Títulos (serif)
- **Nunito Sans** - Corpo de texto (sans-serif)

## Responsividade

O site é totalmente responsivo com breakpoints em:
- Mobile: < 640px
- Tablet: 640px - 1023px
- Desktop: ≥ 1024px

## Hospedagem

Este site pode ser hospedado em qualquer servidor web estático, como:
- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Qualquer servidor Apache/Nginx

## Notas

- O formulário de contato atualmente exibe um alerta simples. Para funcionar com backend, integre com seu serviço preferido (Formspree, EmailJS, etc.)
- O botão WhatsApp já está configurado com o número correto
- Os links para âncoras (#solucoes, #como-funciona) funcionam apenas na página index.html
