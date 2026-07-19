import Image from 'next/image'
import styles from './ToolsSection.module.css'

type Ferramenta = {
  titulo: string
  descricao: string
  imagem: string
  link: string
  locked: boolean
}

const ferramentas: Ferramenta[] = [
  {
    titulo: 'Calculadora de precificação',
    descricao: 'A calculadora que revela seu lucro real — comissão, impostos, taxa fixa e insumos já descontados — direto na aba do Mercado Livre, Shopee e TikTok Shop.',
    imagem: '/calculadora-precificacao.png',
    link: 'https://mindseller-precifica.netlify.app/', 
    locked: false,
  },
  {
    titulo: 'Calculadora de ROAS - Shopee Ads',
    descricao: 'Calculadora inteligente de ROAS para anúncios na Shopee. Conecte sua loja ou insira dados manualmente para calcular metas de break-even e otimizar seus lucros com gráficos de desempenho em tempo real.',
    imagem: '/banner calculadora roas.png', 
    link: 'https://calculadora-roas-mindseller.base44.app',
    locked: false,
  },
  {
    titulo: 'ERP para Marketplaces',
    descricao: 'Sistema de gestão inteligente para marketplaces que integra controle financeiro, gestão de estoque e análise de margens em um único lugar. Fechamento automatico, DRE e muito mais.',
    imagem: '/em desenvolvimento.png',
    link: '',
    locked: true,
  },
  {
    titulo: 'Operação sem estoque',
    descricao: 'Quer começar a vender sem precisar de estoque? Descubra como montar uma operação de sucesso com fornecedores confiáveis e estratégias de vendas inteligentes.',
    imagem: '/baner mindsupply.png',
    link: 'https://mindsupply.app',
    locked: false,
  },
]

export default function ToolsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {ferramentas.map((item) => (
            <a
              key={item.titulo}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageBox}>
                <div className={styles.imageBackground} />
                <Image
                  src={item.imagem}
                  alt={item.titulo}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {item.locked && (
                  <span className={styles.lockBadge} aria-label="Conteúdo bloqueado">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor">
                      <path d="M17 11V8a5 5 0 0 0-10 0v3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 16.5v1.5" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.titulo}</h3>
                <p className={styles.cardText}>{item.descricao}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
