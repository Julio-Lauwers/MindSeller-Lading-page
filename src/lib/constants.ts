// ===================================
// MINDSELLER — App Constants & Data
// ===================================

export const WA_BASE = 'https://wa.me/5531999999999'

export const WA_LINKS = {
  default: `${WA_BASE}?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Mindseller!`,
  hero: `${WA_BASE}?text=Quero%20escalar%20minhas%20vendas!`,
  specialist: `${WA_BASE}?text=Quero%20falar%20com%20um%20especialista%20da%20Mindseller!`,
  lightPlan: `${WA_BASE}?text=Quero%20a%20Mentoria%20Light!`,
  intensivePlan: `${WA_BASE}?text=Quero%20a%20Mentoria%20Intensiva!`,
  fullService: `${WA_BASE}?text=Quero%20a%20Assessoria%20Completa!`,
}

export const NAV_LINKS = [
  { label: 'Sobre', href: '#who' },
  { label: 'Mentor', href: '#mentor' },
  { label: 'Soluções', href: '#problems' },
  { label: 'Planos', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO_BULLETS = [
  '+R$20M faturados pelos nossos alunos',
  'Suporte próximo com acompanhamento direto',
  'Crescimento escalável com método comprovado',
  'Prática, sem enrolação, com resultados reais',
]

export const PLATFORMS = [
  {
    name: 'Shopee',
    logo: '/shopee.png',
    description: 'Estratégias de anúncios, posicionamento e escala na maior plataforma de crescimento do Brasil.',
    colorClass: 'shopee',
  },
  {
    name: 'TikTok Shop',
    logo: '/tiktok.png',
    description: 'Vendas com conteúdo e live commerce. O canal que mais cresce no país agora.',
    colorClass: 'tiktok',
  },
  {
    name: 'Mercado Livre',
    logo: '/mercadolivre.png',
    description: 'Reputação, anúncios premium e estratégias para dominar no marketplace líder da América Latina.',
    colorClass: 'ml',
  },
]

export const WHO_FEATURES = [
  {
    icon: '⚙️',
    title: 'Estruturação de Operações',
    description: 'Organizamos do zero ou reestruturamos sua operação para crescer com eficiência.',
  },
  {
    icon: '🎯',
    title: 'Posicionamento Estratégico',
    description: 'Você vende o produto certo, para o público certo, no canal certo.',
  },
  {
    icon: '📈',
    title: 'Escala com Previsibilidade',
    description: 'Método comprovado para crescer sem depender da sorte ou do algoritmo.',
  },
]

export const MENTOR_MILESTONES = [
  { num: 'R$488', label: 'Com o que começou a jornada nos marketplaces' },
  { num: '+R$20M', label: 'Faturamento total gerado pelo método' },
  { num: '+300', label: 'Alunos transformados em vendedores de alto nível' },
  { num: '#1', label: 'Reconhecido pela Shopee como Top Seller' },
]

export const NUMBERS = [
  { prefix: '+', target: 300, suffix: '', label: 'Alunos alavancados' },
  { prefix: 'R$', target: 20, suffix: 'M+', label: 'Faturados pelos alunos' },
  { prefix: '', target: 3, suffix: '', label: 'Marketplaces dominados' },
]

export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Em 3 meses com a Mindseller, tripling meu faturamento na Shopee. O método é diferente de tudo que já vi — prático, direto e com resultados reais. Recomendo demais!',
    name: 'Ana Paula M.',
    role: 'Vendedora Shopee · MG',
    initials: 'A',
  },
  {
    stars: 5,
    text: 'Entrei zerado nos marketplaces e em 6 meses já estava faturando R$50k/mês. O suporte pelo WhatsApp é incrível — respondem rápido e resolvem de verdade.',
    name: 'Carlos Eduardo S.',
    role: 'Lojista · SP',
    initials: 'C',
  },
  {
    stars: 5,
    text: 'A Assessoria Completa foi transformadora. O time da Mindseller assumiu a operação e escalou do jeito que eu nunca conseguiria sozinho. Vale cada centavo.',
    name: 'Fernanda L.',
    role: 'Empresária · RJ',
    initials: 'F',
  },
  {
    stars: 5,
    text: 'Já tentei outros cursos e mentorias antes. A Mindseller é a única que entrega resultado de verdade. Zé Mauro conhece os marketplaces como ninguém.',
    name: 'Ricardo T.',
    role: 'Revendedor · RS',
    initials: 'R',
  },
  {
    stars: 5,
    text: 'Com o método de importação aprendi a comprar certo e vender com margem. Em 4 meses recuperei o investimento e ainda estou crescendo todo mês.',
    name: 'Marcos A.',
    role: 'Importador · GO',
    initials: 'M',
  },
  {
    stars: 5,
    text: 'O que mais me surpreendeu foi a atenção individual. Não é só uma mentoria em grupo — eles olham para o meu negócio especificamente e resolvem os meus gargalos.',
    name: 'Juliana R.',
    role: 'Empreendedora · BA',
    initials: 'J',
  },
]

export const METHODOLOGY_STEPS = [
  {
    num: 1,
    side: 'right',
    title: 'Diagnóstico & Produto',
    description:
      'Análise profunda do mercado, escolha de produtos vencedores e estruturação inicial da loja com base em dados reais.',
  },
  {
    num: 2,
    side: 'left',
    title: 'Otimização de Anúncios',
    description:
      'Títulos, fotos, descrições e SEO interno calibrados para rankear no topo e converter mais visitantes em compradores.',
  },
  {
    num: 3,
    side: 'right',
    title: 'Central de Marketing',
    description:
      'Ativação completa das ferramentas de marketing interno dos marketplaces para máxima visibilidade orgânica.',
  },
  {
    num: 4,
    side: 'left',
    title: 'Tráfego Pago',
    description:
      'Estratégia de ADS com otimização contínua para ROAS máximo dentro dos marketplaces e canais externos.',
  },
  {
    num: 5,
    side: 'right',
    title: 'Escala Sustentável',
    description:
      'Processos, automações e estrutura operacional para crescer sem perder qualidade e margem de lucro.',
  },
]

export const HOW_IT_WORKS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Análise Estratégica',
    description:
      'Fazemos um diagnóstico completo da sua operação atual: produtos, anúncios, precificação, métricas e concorrência. Identificamos onde está o gargalo e o potencial não explorado.',
  },
  {
    num: '02',
    icon: '📋',
    title: 'Consultoria Personalizada',
    description:
      'Com base no diagnóstico, criamos um plano de ação sob medida para o seu momento. Não existe receita genérica aqui. Cada estratégia é construída para o seu negócio.',
  },
  {
    num: '03',
    icon: '💬',
    title: 'Acompanhamento Contínuo',
    description:
      'Suporte direto via WhatsApp com o time Mindseller. Acompanhamos os resultados, ajustamos a estratégia e estamos sempre ao lado para garantir sua evolução.',
  },
]

export const PLANS = [
  {
    id: 'light',
    name: 'Light',
    title: 'Mentoria Light',
    price: '2.250',
    period: 'à vista · ou 12x',
    featured: false,
    features: [
      '5 aulas online ao vivo',
      'Foco em escalar na Shopee',
      'Prazo de 3 meses',
      'Material de apoio exclusivo',
      'Suporte por WhatsApp',
    ],
    cta: 'Começar Agora',
    ctaStyle: 'ghost',
    waLink: 'lightPlan' as const,
  },
  {
    id: 'intensivo',
    name: 'Intensivo',
    title: 'Mentoria Intensiva',
    price: '7.200',
    period: 'à vista · ou 12x',
    featured: true,
    popularBadge: '⭐ Mais Popular',
    features: [
      'Aulas durante 6 meses',
      'Shopee + TikTok Shop + Mercado Livre',
      'Acesso ao treinamento de importação',
      'Comunidade exclusiva de alunos',
      'Gravações de todas as aulas',
      'Suporte prioritário por WhatsApp',
      'Planilhas e ferramentas exclusivas',
    ],
    cta: 'Quero Escalar Agora →',
    ctaStyle: 'primary',
    waLink: 'intensivePlan' as const,
  },
  {
    id: 'premium',
    name: 'Premium',
    title: 'Assessoria Completa',
    price: '10.800',
    period: 'à vista · ou 12x',
    featured: false,
    features: [
      'Time da Mindseller faz toda operação',
      'Pesquisa e escolha de produtos',
      'Escala de vendas com ADS gerenciado',
      'Relatórios mensais de performance',
      'Gestão de estoque e precificação',
      'Acesso à rede de fornecedores',
    ],
    cta: 'Falar com Especialista',
    ctaStyle: 'ghost',
    waLink: 'fullService' as const,
  },
]

export const FAQS = [
  {
    question: 'Preciso ter experiência prévia com marketplaces?',
    answer:
      'Não! Nosso método foi desenvolvido para funcionar tanto para quem está começando agora quanto para quem já vende e quer escalar. Na Mentoria Light e Intensiva partimos do zero e evoluímos no seu ritmo.',
  },
  {
    question: 'Quanto preciso investir além da mentoria?',
    answer:
      'Depende do seu momento. Para iniciantes, recomendamos começar com um capital de estoque a partir de R$2.000 a R$5.000. Ensinamos exatamente como usar esse capital da forma mais inteligente possível desde o início.',
  },
  {
    question: 'A mentoria funciona para quem vende produtos físicos?',
    answer:
      'Sim, 100%. Nossa especialidade são produtos físicos vendidos nos marketplaces. Trabalhamos com estratégias de produto, anúncio, logística e escala para quem vende produtos reais.',
  },
  {
    question: 'Como funciona o suporte durante a mentoria?',
    answer:
      'O suporte é feito diretamente via WhatsApp com nosso time. Respondemos dúvidas, revisamos anúncios, analisamos métricas e orientamos as decisões estratégicas durante todo o período contratado.',
  },
  {
    question: 'O acompanhamento é individual ou em grupo?',
    answer:
      'As mentorias têm aulas em grupo para gerar troca entre os alunos, mas o suporte via WhatsApp e a análise do seu negócio são personalizados. Na Assessoria Completa, o acompanhamento é 100% individual e dedicado.',
  },
]

export const FOOTER_SOCIAL = [
  { label: 'Instagram', icon: '📷', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
  { label: 'TikTok', icon: '🎵', href: '#' },
  { label: 'WhatsApp', icon: '💬', href: WA_BASE },
]

export const FOOTER_SOLUTIONS = [
  { label: 'Mentoria Light', href: '#pricing' },
  { label: 'Mentoria Intensiva', href: '#pricing' },
  { label: 'Assessoria Completa', href: '#pricing' },
  { label: 'Metodologia', href: '#methodology' },
]

export const FOOTER_COMPANY = [
  { label: 'Sobre Nós', href: '#who' },
  { label: 'Zé Mauro', href: '#mentor' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: WA_BASE, external: true },
]
