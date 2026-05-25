import styles from './TestimonialsSection.module.css'
import SectionTag from '@/components/ui/SectionTag'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <SectionTag centered>Depoimentos</SectionTag>
          <h2 className={styles.sectionH2}>
            O que nossos <span className="gold">alunos dizem</span>
          </h2>
          <p className={styles.sectionP}>
            Resultados reais de pessoas reais. Veja o que quem passou pela Mindseller tem a dizer.
          </p>
        </div>
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={`${styles.testimonialCard} fade-up`}>
              <div className={styles.testStars}>{'★'.repeat(t.stars)}</div>
              <p className={styles.testText}>{t.text}</p>
              <div className={styles.testAuthor}>
                <div className={styles.testAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.testName}>{t.name}</div>
                  <div className={styles.testRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
