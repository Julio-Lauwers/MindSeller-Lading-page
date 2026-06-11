'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './QuizSection.module.css'

// ── CONFIG (altere antes de publicar) ────────────────────────
const VSL_URL = '#vsl'           // TODO: URL real da VSL
const WPP_NUMBER = '5527998211465'

// ── TYPES ────────────────────────────────────────────────────
type Screen = 'intro' | 'quiz' | 'collect' | 'result'
type Temp   = 'Colérico' | 'Sanguíneo' | 'Melancólico' | 'Fleumático'
type Ptype  = 'Indutor'  | 'Sonhador'  | 'Analisador'  | 'Controlador'
type Learn  = 'Visual'   | 'Auditivo'  | 'Cinestésico' | 'Leitura'

interface Option {
  text: string; s: number; xp: number
  temp?: Temp; ptype?: Ptype; learn?: Learn
  motiv?: string; block?: string; attrVal?: number
}
interface Question { eyebrow: string; text: string; options: Option[] }
interface ResultData {
  temp: Temp; ptype: Ptype; learn: Learn; motiv: string; block: string
  totalScore: number; totalXP: number
  estrutura: number; disponibilidade: number
  resiliencia: number; mentalidade: number
}

// ── QUESTIONS ────────────────────────────────────────────────
const QS: Question[] = [
  {
    eyebrow: '🧬 temperamento',
    text: 'Ao descobrir uma nova oportunidade de ganhar dinheiro online, como você reage?',
    options: [
      { text: 'Já começo a pensar em como executar o mais rápido possível', s: 3, xp: 30, temp: 'Colérico',    ptype: 'Indutor'     },
      { text: 'Fico animado, imagino as possibilidades e quero contar para todo mundo', s: 2, xp: 20, temp: 'Sanguíneo',   ptype: 'Sonhador'    },
      { text: 'Pesquiso tudo, leio reviews e só avanço quando tenho dados suficientes', s: 2, xp: 15, temp: 'Melancólico', ptype: 'Analisador'  },
      { text: 'Espero ver resultados reais de outras pessoas antes de me mover',         s: 1, xp: 10, temp: 'Fleumático',  ptype: 'Controlador' },
    ],
  },
  {
    eyebrow: '💪 resiliência',
    text: 'Você tentou algo novo e não funcionou como esperado. O que você faz?',
    options: [
      { text: 'Analiso o que deu errado e tento de novo mais rápido do que antes',          s: 3, xp: 30, block: 'Nenhum bloqueio relevante'         },
      { text: 'Fico paralisado tentando entender tudo antes de agir novamente',             s: 1, xp: 10, block: 'Paralisia por análise'              },
      { text: 'Preciso que alguém confirme que estou no caminho certo para continuar',      s: 1, xp: 10, block: 'Dependência de validação externa'   },
      { text: 'Começo a questionar se realmente vale a pena continuar',                     s: 0, xp: 5,  block: 'Tendência à desistência precoce'    },
    ],
  },
  {
    eyebrow: '🏪 visão de negócio',
    text: 'É possível vender todos os dias na Shopee sem ter produto em estoque. Sua primeira reação:',
    options: [
      { text: '"Que liberdade! Quero entender como isso funciona na prática"',           s: 3, xp: 25, motiv: 'Liberdade operacional' },
      { text: '"Parece bom, mas preciso ver resultados concretos antes de acreditar"',   s: 2, xp: 15, motiv: 'Segurança com resultado' },
      { text: '"Tenho dúvidas — parece bom demais para ser verdade"',                    s: 1, xp: 10, motiv: 'Ceticismo racional' },
      { text: '"Interessante, mas não quero me arriscar a perder dinheiro"',             s: 0, xp: 5,  motiv: 'Proteção financeira' },
    ],
  },
  {
    eyebrow: '🔗 estrutura atual',
    text: 'Como está sua relação com fornecedores ou importadores hoje?',
    options: [
      { text: 'Já tenho contatos e sei como negociar com fornecedores',           s: 3, xp: 30, attrVal: 90 },
      { text: 'Não tenho contatos, mas já pesquisei bastante sobre o assunto',    s: 2, xp: 20, attrVal: 65 },
      { text: 'Nunca pensei nisso, mas estou disposto a aprender do zero',        s: 1, xp: 15, attrVal: 40 },
      { text: 'Zero ideia — precisaria começar completamente do zero',            s: 0, xp: 10, attrVal: 20 },
    ],
  },
  {
    eyebrow: '⏱️ ritmo de vida',
    text: 'Qual é a sua disponibilidade real de tempo para trabalhar no negócio hoje?',
    options: [
      { text: 'Tenho mais de 3 horas por dia para dedicar',              s: 3, xp: 30, attrVal: 90 },
      { text: 'Consigo reservar de 1 a 2 horas por dia',                 s: 2, xp: 20, attrVal: 65 },
      { text: 'Tenho apenas alguns minutos, mas quero mudar isso',       s: 1, xp: 10, attrVal: 35 },
      { text: 'Estou completamente lotado, mas preciso de uma saída',    s: 0, xp: 5,  attrVal: 15 },
    ],
  },
  {
    eyebrow: '💰 mentalidade financeira',
    text: 'Se encontrasse um método comprovado para faturar nos marketplaces, quanto investiria em aprendizado?',
    options: [
      { text: 'Acima de R$1.000 — resultado é o que importa pra mim',             s: 3, xp: 30 },
      { text: 'Entre R$300 e R$1.000 — desde que o retorno seja claro',           s: 2, xp: 20 },
      { text: 'Até R$300 — ainda preciso testar antes de investir mais',          s: 1, xp: 10 },
      { text: 'Prefiro começar de graça por agora',                               s: 0, xp: 5  },
    ],
  },
  {
    eyebrow: '📚 estilo de aprendizado',
    text: 'Quando precisa aprender algo novo do zero, como você prefere absorver?',
    options: [
      { text: 'Assistindo vídeos com exemplos visuais e demonstrações práticas',   s: 2, xp: 20, learn: 'Visual'      },
      { text: 'Ouvindo explicações detalhadas e claras em áudio',                  s: 2, xp: 20, learn: 'Auditivo'    },
      { text: 'Colocando a mão na massa desde o primeiro momento',                 s: 3, xp: 25, learn: 'Cinestésico' },
      { text: 'Lendo guias escritos, checklists e passo a passo detalhado',        s: 1, xp: 15, learn: 'Leitura'     },
    ],
  },
  {
    eyebrow: '🎯 motivação real',
    text: 'Qual é seu principal motivo para querer ter uma renda própria online?',
    options: [
      { text: 'Quero liberdade total — horário, lugar e estilo de vida',           s: 3, xp: 30, motiv: 'Liberdade total'     },
      { text: 'Quero uma renda paralela para ter mais segurança financeira',       s: 2, xp: 20, motiv: 'Segurança paralela'  },
      { text: 'Quero provar para mim mesmo que sou capaz de empreender',           s: 2, xp: 20, motiv: 'Autoconfiança'       },
      { text: 'Preciso de renda agora — a situação é urgente',                     s: 1, xp: 15, motiv: 'Urgência financeira' },
    ],
  },
]

// ── TEMPERAMENT & PERSONALITY META ──────────────────────────
const TEMP_META: Record<Temp, { icon: string; key: string; desc: string }> = {
  Colérico:    { icon: '🔴', key: 'Domínio',      desc: 'Líder assertivo que age rápido e gera resultados'              },
  Sanguíneo:   { icon: '🟡', key: 'Influência',   desc: 'Carismático, comunicativo e cheio de ideias'                  },
  Melancólico: { icon: '🔵', key: 'Profundidade', desc: 'Analítico, perfeccionista e orientado a detalhes'             },
  Fleumático:  { icon: '🟢', key: 'Estabilidade', desc: 'Calmo, consistente e extremamente paciente'                   },
}

const PTYPE_META: Record<Ptype, { icon: string; desc: string }> = {
  Indutor:     { icon: '⚡', desc: 'Age antes de ter certeza absoluta — a velocidade é seu combustível'           },
  Sonhador:    { icon: '✨', desc: 'Vê o futuro com clareza e inspira outros a acreditar'                         },
  Analisador:  { icon: '🔬', desc: 'Constrói processos sólidos — a lógica é sua vantagem competitiva'            },
  Controlador: { icon: '🎯', desc: 'Exige qualidade e adora processos bem definidos antes de avançar'            },
}

const LEARN_META: Record<Learn, { icon: string; desc: string; tip: string }> = {
  Visual:      { icon: '👁️', desc: 'Aprende com vídeos, exemplos e demonstrações visuais',         tip: 'Assista do início ao fim e faça anotações visuais dos pontos-chave — isso fixa 3x mais rápido.' },
  Auditivo:    { icon: '👂', desc: 'Absorve melhor ouvindo explicações claras e conversas',        tip: 'Use fones em ambiente silencioso e explique em voz alta depois da aula — consolida tudo.' },
  Cinestésico: { icon: '🤲', desc: 'Aprende fazendo — a ação é seu melhor professor',              tip: 'Não espere terminar a aula. Pause, abra o marketplace e aplique cada passo na hora.' },
  Leitura:     { icon: '📖', desc: 'Prefere guias escritos, checklists e passo a passo detalhado', tip: 'Tenha papel e caneta. Anote os passos em sequência e crie seu próprio checklist.' },
}

// ── FAMOUS PEOPLE (16 combinações Temp + Ptype) ──────────────
const FAMOSOS: Record<string, { nome: string; why: string; quote: string; match: string }> = {
  'Colérico+Indutor':     { nome: 'Elon Musk',               why: 'Age antes de ter certeza, quebra regras com velocidade extrema e assume riscos que outros consideram impossíveis.',                  quote: '"Se as coisas não estão falhando, você não está inovando o suficiente."',                                                   match: '✨ Você e Elon compartilham a mesma urgência de transformar ideias em realidade — sem esperar pela hora perfeita.' },
  'Colérico+Sonhador':    { nome: 'Steve Jobs',              why: 'Combinava visão extraordinária com a força de vontade de dobrar a realidade ao seu redor.',                                         quote: '"As pessoas loucas o suficiente para pensar que podem mudar o mundo são as que de fato mudam."',                              match: '✨ Como Jobs, você vê o que ainda não existe e tem energia para fazer acontecer.' },
  'Colérico+Analisador':  { nome: 'Jack Welch',              why: 'Implacável nos resultados, mas metódico na análise — combinava dados com decisões firmes e sem hesitação.',                         quote: '"Controle seu próprio destino ou alguém o controlará."',                                                                      match: '✨ Como Welch, você une assertividade com profundidade — tornando suas decisões quase irrefutáveis.' },
  'Colérico+Controlador': { nome: 'Silvio Santos',           why: 'Construiu um império mantendo controle absoluto, com carisma e determinação colérica únicos no Brasil.',                            quote: '"Quem não arrisca não petisca."',                                                                                             match: '✨ Como Silvio, você domina o ambiente e garante que tudo saia do jeito certo — na sua velocidade.' },
  'Sanguíneo+Indutor':    { nome: 'Gary Vaynerchuk',         why: 'Energia transbordante, voz alta no mercado e execução acelerada — nunca espera aprovação de ninguém para agir.',                   quote: '"Pare de viver para o fim de semana e comece a trabalhar naquilo que te move."',                                              match: '✨ Como Gary Vee, você tem o combustível certo para fazer barulho e construir rápido.' },
  'Sanguíneo+Sonhador':   { nome: 'Richard Branson',         why: 'Viu oportunidades onde outros viam impossibilidade — usou o carisma para atrair pessoas e recursos.',                               quote: '"Oportunidades de negócios são como ônibus — sempre vem outro."',                                                             match: '✨ Como Branson, você enxerga o futuro com otimismo e tem o charme para construí-lo com outros.' },
  'Sanguíneo+Analisador': { nome: 'Jeff Bezos',              why: 'Comunicativo e visionário, mas obcecado com dados, processos e escalabilidade de longo prazo.',                                     quote: '"Seja teimoso na visão e flexível nos detalhes."',                                                                            match: '✨ Como Bezos, você combina entusiasmo com rigor analítico — uma dupla que constrói impérios.' },
  'Sanguíneo+Controlador':{ nome: 'Oprah Winfrey',           why: 'Conecta-se emocionalmente com milhões, mas gerencia seu império com padrões altíssimos de qualidade.',                              quote: '"A maior aventura que você pode correr é viver a vida dos seus sonhos."',                                                     match: '✨ Como Oprah, você inspira e mantém o nível — um líder que as pessoas seguem de verdade.' },
  'Melancólico+Indutor':  { nome: 'Flávio Augusto da Silva', why: 'Analítico e estratégico, mas age com decisão — criou o Wise Up e Geração de Valor com método e coragem.',                           quote: '"Não existe janela de oportunidade aberta para sempre."',                                                                    match: '✨ Como Flávio Augusto, você pensa fundo antes de agir — mas quando decide, vai com tudo.' },
  'Melancólico+Sonhador': { nome: 'Walt Disney',             why: 'Criou mundos impossíveis com detalhismo obsessivo e uma visão que ninguém mais conseguia enxergar.',                                quote: '"Todos os seus sonhos podem se tornar realidade se você tiver coragem de persegui-los."',                                    match: '✨ Como Disney, você constrói com profundidade e visão — os resultados falam por si mesmos.' },
  'Melancólico+Analisador':{ nome: 'Bill Gates',             why: 'Perfeccionismo analítico ao extremo — construiu a Microsoft em cima de sistemas, dados e precisão máxima.',                        quote: '"O sucesso é um professor ruim. Seduz pessoas inteligentes a pensar que não podem perder."',                                 match: '✨ Como Gates, você tem profundidade intelectual e rigor para construir algo que realmente funciona.' },
  'Melancólico+Controlador':{ nome: 'Warren Buffett',        why: 'Paciente, analítico e metódico — espera a oportunidade certa e age com precisão cirúrgica.',                                       quote: '"Regra nº 1: nunca perca dinheiro. Regra nº 2: nunca esqueça a regra nº 1."',                                                match: '✨ Como Buffett, você não se deixa levar pela emoção — e isso é uma vantagem competitiva enorme.' },
  'Fleumático+Indutor':   { nome: 'Carlos Slim',             why: 'Calmo e paciente, mas decisivo nas jogadas certas — construiu um dos maiores patrimônios do mundo com método.',                     quote: '"Com disciplina e trabalho constante, tudo pode ser alcançado."',                                                            match: '✨ Como Slim, você une estabilidade com oportunismo certeiro — e isso cria riqueza consistente.' },
  'Fleumático+Sonhador':  { nome: 'Santos Dumont',           why: 'Sonhador persistente, paciente e metódico — inventou o impossível com calma, dedicação e determinação.',                           quote: '"Há homens que lutam sempre — esses são os imprescindíveis."',                                                               match: '✨ Como Santos Dumont, você tem a paciência de construir o que parece impossível — e chega lá.' },
  'Fleumático+Analisador':{ nome: 'Jorge Paulo Lemann',      why: 'Discreto, analítico e disciplinado — construiu Ambev e 3G Capital com método silencioso e resultados consistentes.',              quote: '"Um sonho grande custa o mesmo tempo que um sonho pequeno."',                                                                match: '✨ Como Lemann, você constrói com solidez — seus resultados são duradouros porque são baseados em sistema.' },
  'Fleumático+Controlador':{ nome: 'Tim Cook',               why: 'Rigoroso, consistente e focado em processos — transformou a Apple com precisão total sem perder qualidade.',                       quote: '"Não se trata de dinheiro. Trata-se de pessoas e do que você constrói com elas."',                                          match: '✨ Como Tim Cook, você executa com excelência — e é exatamente esse perfil que escala de verdade.' },
}

// ── PROFILE LEVELS ───────────────────────────────────────────
interface ProfileLevel {
  level: number; medal: string; stars: number; badgeText: string
  lvBg: string; lvColor: string; barColor: string; mainMsg: string
  elogio(n: string, t: Temp, p: Ptype): string
  subtitle(p: Ptype, l: Learn, m: string): string
  vslTitle(l: Learn): string
  vslSub(t: Temp, p: Ptype, l: Learn): string
  cta(n: string): string
}

const VSL_TITLES: Record<number, Record<Learn, string>> = {
  1: { Visual: 'Assista: como começar do zero com uma loja sem estoque', Auditivo: 'Aula passo a passo: do zero à primeira venda explicada', Cinestésico: 'Aula prática: execute sua primeira venda ainda hoje', Leitura: 'Guia em vídeo: o passo a passo completo para começar' },
  2: { Visual: 'Veja na prática como montar sua loja sem estoque hoje', Auditivo: 'A aula que explica o método completo em menos de 1 hora', Cinestésico: 'Mão na massa: sua loja funcionando em 24 horas', Leitura: 'O manual visual para escalar nos marketplaces' },
  3: { Visual: 'Aula exclusiva: a estratégia avançada para quem está pronto', Auditivo: 'Masterclass: o método que gerou +R$20M nos marketplaces', Cinestésico: 'Aula ação: do diagnóstico ao lucro em tempo recorde', Leitura: 'O blueprint definitivo para escalar nos marketplaces' },
}

const PROFILES: ProfileLevel[] = [
  {
    level: 1, medal: '⚡', stars: 2, badgeText: 'Perfil em Desenvolvimento',
    lvBg: '#DBEAFE', lvColor: '#1E40AF', barColor: '#3B82F6',
    mainMsg: 'Você tem o potencial. O que falta é o método.',
    elogio:   (n, t, p) => `${n}, seu perfil ${t} + ${p} é um dos mais comuns entre quem começa — e também entre quem transforma isso em negócio real.`,
    subtitle: (_p, l, m) => `Seu aprendizado é ${l.toLowerCase()} e sua motivação principal é ${m.toLowerCase()}.`,
    vslTitle: (l) => VSL_TITLES[1][l],
    vslSub:   (t, p, l) => `Para perfis ${t} + ${p} que aprendem de forma ${l.toLowerCase()}`,
    cta:      (n) => `${n}, esse é o seu ponto de virada. A aula vai te mostrar exatamente onde começar.`,
  },
  {
    level: 2, medal: '🔥', stars: 3, badgeText: 'Perfil Confirmado',
    lvBg: '#FEF3C7', lvColor: '#92400E', barColor: '#F59E0B',
    mainMsg: 'Você tem o perfil. Agora é encurtar o caminho.',
    elogio:   (n, t, p) => `${n}, seu perfil ${t} + ${p} está alinhado com quem já tem maturidade para construir um negócio real nos marketplaces.`,
    subtitle: (p, l, m) => `Personalidade ${p}, absorção ${l.toLowerCase()} e motivação de ${m.toLowerCase()} — uma combinação poderosa.`,
    vslTitle: (l) => VSL_TITLES[2][l],
    vslSub:   (t, p, l) => `Desenvolvida para perfis ${t} + ${p} com absorção ${l.toLowerCase()}`,
    cta:      (n) => `${n}, o próximo passo está claro. Acesse a aula e veja o caminho que faltava.`,
  },
  {
    level: 3, medal: '🚀', stars: 3, badgeText: 'Perfil de Alto Potencial',
    lvBg: '#D1FAE5', lvColor: '#065F46', barColor: '#10B981',
    mainMsg: 'Diagnóstico claro: você nasceu para isso.',
    elogio:   (n, t, p) => `${n}, a combinação ${t} + ${p} raramente aparece em quem ainda não está faturando. Isso muda agora.`,
    subtitle: (p, l, m) => `Perfil ${p} com absorção ${l.toLowerCase()} e motivação de ${m.toLowerCase()} — você só precisa de direção.`,
    vslTitle: (l) => VSL_TITLES[3][l],
    vslSub:   (t, p, l) => `Exclusivo para perfis ${t} + ${p} com absorção ${l.toLowerCase()}`,
    cta:      (n) => `${n}, seu diagnóstico está feito. Agora é hora de agir — entre em contato diretamente.`,
  },
]

function getProfile(score: number): ProfileLevel {
  if (score <= 9) return PROFILES[0]
  if (score <= 17) return PROFILES[1]
  return PROFILES[2]
}

// ── INSIGHTS: level × ptype ──────────────────────────────────
const INSIGHTS: Record<string, string> = {
  '1+Indutor':     'Você age rápido, mas sem o método certo a energia se perde. Com a estrutura certa você avança mais em 30 dias do que a maioria em 6 meses.',
  '1+Sonhador':    'Você tem visão — o que falta é transformá-la em passos práticos. O quiz mostrou que você está mais próximo do que imagina.',
  '1+Analisador':  'Você pesquisa muito, mas ainda não encontrou o método certo para confiar o suficiente para agir. Isso está prestes a mudar.',
  '1+Controlador': 'Você é criterioso e precisa de estrutura sólida antes de avançar. Exatamente por isso o método é tão importante para o seu perfil.',
  '2+Indutor':     'Você tem velocidade de execução e já provou que consegue agir. O que vai destravar seu próximo nível é um processo replicável.',
  '2+Sonhador':    'Você tem a visão clara e a motivação real. Agora é hora de encurtar o caminho com um método já testado por centenas de alunos.',
  '2+Analisador':  'Você já fez o dever de casa. Seus resultados ainda não refletem sua capacidade — o que falta é execução orientada por dados.',
  '2+Controlador': 'Você sabe o que quer e exige qualidade. O próximo passo é encontrar um processo que respeite isso e te leve mais longe.',
  '3+Indutor':     'Você age, aprende e avança — esse é o perfil mais raro. Aplicar velocidade a um método comprovado vai multiplicar seus resultados.',
  '3+Sonhador':    'Diagnóstico claro: você tem visão + motivação + abertura. Quando isso encontra o método certo, os resultados são extraordinários.',
  '3+Analisador':  'Você tem rigor analítico e disposição real. Isso é raro — e altamente valioso para construir um negócio que dura.',
  '3+Controlador': 'Você é exigente consigo mesmo e com os resultados. Esse nível de comprometimento, com o método certo, gera consistência real.',
}

// ── COMPONENT ────────────────────────────────────────────────
export default function QuizSection() {
  const [screen, setScreen]       = useState<Screen>('intro')
  const [qIdx, setQIdx]           = useState(0)
  const [answers, setAnswers]     = useState<Option[]>([])
  const [totalXP, setTotalXP]     = useState(0)
  const [xpFlash, setXpFlash]     = useState({ show: false, amount: 0, key: 0 })
  const [userName, setUserName]   = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [result, setResult]       = useState<ResultData | null>(null)
  const [displayXP, setDisplayXP] = useState(0)
  const [barsActive, setBarsActive] = useState(false)
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const pickAnswer = (opt: Option) => {
    const updated = [...answers, opt]
    setAnswers(updated)
    setTotalXP(prev => prev + opt.xp)

    if (flashTimer.current) clearTimeout(flashTimer.current)
    setXpFlash({ show: true, amount: opt.xp, key: Date.now() })
    flashTimer.current = setTimeout(() => setXpFlash(f => ({ ...f, show: false })), 1100)

    if (qIdx < QS.length - 1) setQIdx(qIdx + 1)
    else setScreen('collect')
  }

  const submitLead = () => {
    if (!userName.trim() || !userPhone.trim()) return
    const a = answers
    const totalScore = a.reduce((s, o) => s + o.s, 0)
    const txp = a.reduce((s, o) => s + o.xp, 0)
    setResult({
      temp:            (a[0]?.temp  ?? 'Sanguíneo')  as Temp,
      ptype:           (a[0]?.ptype ?? 'Sonhador')   as Ptype,
      learn:           (a[6]?.learn ?? 'Visual')     as Learn,
      motiv:           a[7]?.motiv  ?? 'Liberdade total',
      block:           a[1]?.block  ?? 'Nenhum bloqueio relevante',
      totalScore,
      totalXP:         txp,
      estrutura:       a[3]?.attrVal ?? 40,
      disponibilidade: a[4]?.attrVal ?? 40,
      resiliencia:     Math.round(((a[1]?.s ?? 1) / 3) * 100),
      mentalidade:     Math.round((((a[0]?.s ?? 1) + (a[2]?.s ?? 1) + (a[7]?.s ?? 1)) / 9) * 100),
    })
    setScreen('result')
  }

  // XP counter animation on result
  useEffect(() => {
    if (screen !== 'result' || !result) return
    const target = result.totalXP
    let curr = 0
    setDisplayXP(0)
    const iv = setInterval(() => {
      curr = Math.min(curr + Math.ceil(target / 50), target)
      setDisplayXP(curr)
      if (curr >= target) clearInterval(iv)
    }, 30)
    return () => clearInterval(iv)
  }, [screen]) // eslint-disable-line react-hooks/exhaustive-deps

  // Trigger bar fill
  useEffect(() => {
    if (screen !== 'result') return
    setBarsActive(false)
    const t = setTimeout(() => setBarsActive(true), 500)
    return () => clearTimeout(t)
  }, [screen])

  const progress = (qIdx / QS.length) * 100
  const q = QS[qIdx]

  const handleVslClick = () => {
    window.open(VSL_URL, '_blank')
    setTimeout(() => {
      const msg = encodeURIComponent(`Oi! Sou ${userName} — acabei de fazer o diagnóstico e estou assistindo a aula! 🚀`)
      window.open(`https://wa.me/${WPP_NUMBER}?text=${msg}`, '_blank')
    }, 1500)
  }

  // ── INTRO ────────────────────────────────────────────────────
  const renderIntro = () => (
    <div className={styles.introWrap}>
      <span className={styles.badge}>🎯 Diagnóstico Gratuito</span>
      <h2 className={styles.introTitle}>
        Descubra seu <em>Perfil de Empreendedor</em> em 3 Camadas
      </h2>
      <p className={styles.introHook}>
        Em menos de 3 minutos, vamos revelar seu temperamento, personalidade e estilo de aprendizado — e te dizer exatamente qual é o próximo passo para vender nos marketplaces.
      </p>
      <div className={styles.layers}>
        {[
          { icon: '🧬', label: 'Temperamento',  sub: 'O que é inato em você'        },
          { icon: '🧠', label: 'Personalidade', sub: 'Como você toma decisões'       },
          { icon: '📚', label: 'Aprendizado',   sub: 'Como você absorve informação'  },
        ].map(l => (
          <div key={l.label} className={styles.layerCard}>
            <span className={styles.layerIcon}>{l.icon}</span>
            <strong>{l.label}</strong>
            <span>{l.sub}</span>
          </div>
        ))}
      </div>
      <button className={styles.btnPrimary} onClick={() => setScreen('quiz')}>
        Começar Diagnóstico →
      </button>
      <p className={styles.disclaimer}>✓ Gratuito · 8 perguntas · Resultado imediato</p>
    </div>
  )

  // ── QUIZ ─────────────────────────────────────────────────────
  const renderQuiz = () => (
    <div className={styles.quizWrap}>
      <div className={styles.quizHeader}>
        <span className={styles.qCount}>Pergunta {qIdx + 1} de {QS.length}</span>
        <span className={styles.xpBadge}>⚡ {totalXP} XP</span>
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      {xpFlash.show && (
        <div key={xpFlash.key} className={styles.xpFlash}>+{xpFlash.amount} XP</div>
      )}
      <div key={qIdx} className={styles.questionBlock}>
        <span className={styles.eyebrow}>{q.eyebrow}</span>
        <p className={styles.questionText}>{q.text}</p>
      </div>
      <div className={styles.options}>
        {q.options.map((opt, i) => (
          <button key={i} className={styles.optBtn} onClick={() => pickAnswer(opt)}>
            <span className={styles.optLetter}>{String.fromCharCode(65 + i)}</span>
            <span>{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  )

  // ── COLLECT ──────────────────────────────────────────────────
  const renderCollect = () => (
    <div className={styles.collectWrap}>
      <div className={styles.collectCheck}>✓</div>
      <h3 className={styles.collectTitle}>Quiz concluído!</h3>
      <p className={styles.collectXp}>Você acumulou <strong>{totalXP} XP</strong></p>
      <p className={styles.collectSub}>Para revelar seu diagnóstico completo, preencha abaixo:</p>
      <div className={styles.formGroup}>
        <label htmlFor="qz-name">Seu nome</label>
        <input id="qz-name" type="text" placeholder="Como posso te chamar?" value={userName}
          onChange={e => setUserName(e.target.value)} className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="qz-phone">WhatsApp</label>
        <input id="qz-phone" type="tel" placeholder="(XX) XXXXX-XXXX" value={userPhone}
          onChange={e => setUserPhone(e.target.value)} className={styles.input} />
      </div>
      <button className={styles.btnPrimary} onClick={submitLead}
        disabled={!userName.trim() || !userPhone.trim()}>
        Revelar meu Diagnóstico 🚀
      </button>
      <p className={styles.disclaimer}>🔒 Seus dados são usados apenas para enviar seu resultado personalizado.</p>
    </div>
  )

  // ── RESULT ───────────────────────────────────────────────────
  const renderResult = () => {
    if (!result) return null
    const profile   = getProfile(result.totalScore)
    const famoso    = FAMOSOS[`${result.temp}+${result.ptype}`]
    const insight   = INSIGHTS[`${profile.level}+${result.ptype}`] ?? ''
    const tempMeta  = TEMP_META[result.temp]
    const ptypeMeta = PTYPE_META[result.ptype]
    const learnMeta = LEARN_META[result.learn]
    const scorePct  = Math.round((result.totalScore / 24) * 100)

    const attrs = [
      { label: 'Mentalidade',     val: result.mentalidade     },
      { label: 'Resiliência',     val: result.resiliencia     },
      { label: 'Estrutura',       val: result.estrutura       },
      { label: 'Disponibilidade', val: result.disponibilidade },
    ]

    return (
      <div className={styles.resultWrap}>

        {/* Hero */}
        <div className={styles.resultHero}>
          <div className={styles.medal}>{profile.medal}</div>
          <div className={styles.stars}>
            {[0,1,2].map(i => (
              <span key={i} className={i < profile.stars ? styles.starOn : styles.starOff}
                style={i < profile.stars ? { animationDelay: `${0.3 + i * 0.12}s` } : {}}>
                {i < profile.stars ? '⭐' : '☆'}
              </span>
            ))}
          </div>
          <span className={styles.levelBadge} style={{ background: profile.lvBg, color: profile.lvColor }}>
            {profile.medal} {profile.badgeText}
          </span>
          <h3 className={styles.resultTitle}>{profile.mainMsg}</h3>
          <p className={styles.elogio}>{profile.elogio(userName, result.temp, result.ptype)}</p>
          <p className={styles.resultSub}>{profile.subtitle(result.ptype, result.learn, result.motiv)}</p>
        </div>

        {/* Score */}
        <div className={styles.scoreBlock}>
          <div className={styles.scoreRow}>
            <span>Score do diagnóstico</span>
            <strong>{result.totalScore}/24</strong>
          </div>
          <div className={styles.scoreTrack}>
            <div className={styles.scoreFill}
              style={{ width: barsActive ? `${scorePct}%` : '0%', background: profile.barColor }} />
          </div>
          <div className={styles.xpRow}>
            <span>⚡ XP Total acumulado</span>
            <strong className={styles.xpCount}>{displayXP}</strong>
          </div>
        </div>

        {/* 3 Camadas */}
        <div className={styles.layersResult}>
          <h4 className={styles.blockTitle}>Análise em 3 Camadas</h4>
          <div className={styles.layerGrid}>
            <div className={styles.layerResultCard}>
              <span>🧬 Temperamento</span>
              <strong>{tempMeta.icon} {result.temp}</strong>
              <p>{tempMeta.key} — {tempMeta.desc}</p>
            </div>
            <div className={styles.layerResultCard}>
              <span>🧠 Personalidade</span>
              <strong>{ptypeMeta.icon} {result.ptype}</strong>
              <p>{ptypeMeta.desc}</p>
            </div>
            <div className={styles.layerResultCard}>
              <span>📚 Aprendizado</span>
              <strong>{learnMeta.icon} {result.learn}</strong>
              <p>{learnMeta.desc}</p>
            </div>
          </div>
        </div>

        {/* Famoso */}
        {famoso && (
          <div className={styles.famousCard}>
            <span className={styles.famousEyebrow}>📌 empreendedor com o mesmo perfil que o seu</span>
            <h4 className={styles.famousName}>{famoso.nome}</h4>
            <p className={styles.famousWhy}>{famoso.why}</p>
            <blockquote className={styles.famousQuote}>{famoso.quote}</blockquote>
            <span className={styles.famousMatch}>{famoso.match}</span>
          </div>
        )}

        {/* Atributos */}
        <div className={styles.attrsBlock}>
          <h4 className={styles.blockTitle}>Atributos do Perfil</h4>
          <div className={styles.attrsGrid}>
            {attrs.map(a => (
              <div key={a.label} className={styles.attrItem}>
                <div className={styles.attrLabel}>{a.label}</div>
                <div className={styles.attrTrack}>
                  <div className={styles.attrFill}
                    style={{ width: barsActive ? `${a.val}%` : '0%', background: profile.barColor }} />
                </div>
                <div className={styles.attrPct}>{a.val}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Insight */}
        <div className={styles.infoBlock}>
          <h4 className={styles.blockTitle}>💡 Insight do seu Diagnóstico</h4>
          <p className={styles.infoText}>{insight}</p>
        </div>

        {/* Dica de aprendizado */}
        <div className={styles.infoBlock}>
          <h4 className={styles.blockTitle}>🎯 Como absorver melhor a aula</h4>
          <p className={styles.infoText}>{learnMeta.tip}</p>
        </div>

        {/* VSL */}
        <div className={styles.vslCard}>
          <span className={styles.vslEyebrow}>🎁 aula exclusiva desbloqueada</span>
          <h4 className={styles.vslTitle}>{profile.vslTitle(result.learn)}</h4>
          <p className={styles.vslSub}>{profile.vslSub(result.temp, result.ptype, result.learn)}</p>
          <button className={styles.btnVsl} onClick={handleVslClick}>
            Acessar Aula Gratuita →
          </button>
          <p className={styles.vslDisclaimer}>✅ Gratuito · Acesso imediato · Sem cadastro extra</p>
        </div>

        {/* CTA final */}
        <p className={styles.finalCta}>{profile.cta(userName)}</p>

      </div>
    )
  }

  return (
    <section id="quiz" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {screen === 'intro'   && renderIntro()}
          {screen === 'quiz'    && renderQuiz()}
          {screen === 'collect' && renderCollect()}
          {screen === 'result'  && renderResult()}
        </div>
      </div>
    </section>
  )
}
