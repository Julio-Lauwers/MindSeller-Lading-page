import styles from './FinalCtaSection.module.css'
import SectionTag from '@/components/ui/SectionTag'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { WA_LINKS } from '@/lib/constants'

const TRUST_ITEMS = [
  'Sem compromisso',
  'Resposta em até 24h',
  '+300 alunos satisfeitos',
  'Especialistas reais',
]

export default function FinalCtaSection() {
  return (
    <section id="cta-final" className={styles.ctaFinal}>
      <div className={styles.glow} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className={styles.ctaH2}>
          Seu negócio está pronto
          <br />
          para <span className="gold">vender mais?</span>
        </h2>
        <p className={styles.ctaP}>
          Fale agora com um especialista e descubra o plano certo para sua operação crescer de verdade.
        </p>
        <a
          href={WA_LINKS.specialist}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnWaBig}
        >
          <WhatsAppIcon className={styles.waIcon} />
          QUERO FALAR COM UM ESPECIALISTA
        </a>
        <div className={styles.ctaTrust}>
          {TRUST_ITEMS.map((item) => (
            <div key={item} className={styles.ctaTrustItem}>
              <span>✔</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
