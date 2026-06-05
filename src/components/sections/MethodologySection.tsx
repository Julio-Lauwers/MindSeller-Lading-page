import styles from './MethodologySection.module.css'
import SectionTag from '@/components/ui/SectionTag'
import { METHODOLOGY_STEPS } from '@/lib/constants'

export default function MethodologySection() {
  return (
    <section id="methodology" className={styles.methodology}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionH2}>
            O método que já gerou <span className="gold">+R$20M</span>
          </h2>
          <p className={styles.sectionP}>
            5 pilares validados com centenas de alunos para escalar vendas de forma previsível.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {METHODOLOGY_STEPS.map((step) => (
            <div key={step.num} className={`${styles.timelineItem} ${step.side === 'left' ? styles.timelineItemLeft : ''} fade-up`}>
              {step.side === 'right' ? (
                <>
                  <div className={styles.timelineEmpty} />
                  <div className={styles.timelineDot}>{step.num}</div>
                  <div className={styles.timelineContent}>
                    <div className={styles.contentBox}>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.timelineContent}>
                    <div className={styles.contentBox}>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  <div className={styles.timelineDot}>{step.num}</div>
                  <div className={styles.timelineEmpty} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
