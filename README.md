# Mindseller — Landing Page (Next.js)

Landing page da Mindseller convertida de HTML para Next.js 14 com App Router, TypeScript e CSS Modules.

## Estrutura do Projeto

```
mindseller-landingpage/
├── public/                        # Imagens estáticas
│   ├── shopee.png
│   ├── tiktok.png
│   ├── mercadolivre.png
│   └── zemauro.jpeg
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Layout raiz (metadata, font, globals)
│   │   └── page.tsx               # Página principal (composição das seções)
│   ├── components/
│   │   ├── layout/                # Componentes estruturais
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── MobileMenu.module.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── sections/              # Seções da landing page
│   │   │   ├── HeroSection.tsx / .module.css
│   │   │   ├── WhoSection.tsx / .module.css
│   │   │   ├── MentorSection.tsx / .module.css
│   │   │   ├── NumbersSection.tsx / .module.css
│   │   │   ├── TestimonialsSection.tsx / .module.css
│   │   │   ├── MethodologySection.tsx / .module.css
│   │   │   ├── HowItWorksSection.tsx / .module.css
│   │   │   ├── PricingSection.tsx / .module.css
│   │   │   ├── FaqSection.tsx / .module.css
│   │   │   └── FinalCtaSection.tsx / .module.css
│   │   └── ui/                    # Componentes reutilizáveis
│   │       ├── GsapInit.tsx       # Inicializa animações GSAP (client)
│   │       ├── SectionTag.tsx / .module.css
│   │       ├── WhatsAppFloat.tsx / .module.css
│   │       └── WhatsAppIcon.tsx
│   ├── lib/
│   │   └── constants.ts           # Todos os dados e links centralizados
│   └── styles/
│       └── globals.css            # CSS global, variáveis, reset
├── next.config.js
├── tsconfig.json
├── .eslintrc.json
└── package.json
```

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

## Imagens necessárias

Coloque as seguintes imagens na pasta `/public`:
- `shopee.png` — Logo da Shopee
- `tiktok.png` — Logo do TikTok Shop
- `mercadolivre.png` — Logo do Mercado Livre
- `zemauro.jpeg` — Foto do Zé Mauro (mentor)

## Configurações a personalizar

Edite `src/lib/constants.ts` para atualizar:
- Número do WhatsApp (`WA_BASE`)
- Textos dos planos, depoimentos, FAQ
- Links de redes sociais

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (escopo por componente)
- **GSAP + ScrollTrigger** (animações, carregamento lazy no client)
- **next/font** (Poppins otimizada)
- **next/image** (imagens otimizadas)
