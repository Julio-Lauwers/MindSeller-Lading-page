import styles from './HowItWorksSection.module.css'
import SectionTag from '@/components/ui/SectionTag'
import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorksSection() {
  return (
    <section id="how" className={styles.how}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionH2}>
            Simples, direto e com <span className="gold">resultados reais</span>
          </h2>
          <p className={styles.sectionP}>
            Três pilares que garantem que você não vai ficar sozinho nessa jornada de crescimento.
          </p>
        </div>
        <div className={styles.howGrid}>
          {HOW_IT_WORKS.map((item) => (
            <div key={item.num} className={`${styles.howCard} fade-up`}>
              <div className={styles.howNum}>{item.num}</div>
              <div className={styles.howIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
