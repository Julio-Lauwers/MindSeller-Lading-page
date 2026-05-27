import styles from './TestimonialsSection.module.css'
import { HERO_BULLETS, WA_LINKS } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionH2}>
            O que nossos <span className="gold">alunos dizem</span>
          </h2>
          <p className={styles.sectionP}>
            Resultados reais de pessoas reais. Veja o que quem passou pela Mindseller tem a dizer.
          </p>
        </div>

        {/* YouTube Video */}
        <div className={`${styles.videoWrap} fade-up`}>
          <iframe
            src="https://www.youtube.com/embed/vc06g9zra8c"
            title="Depoimento Mindseller"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className={`${styles.heroBtns} fade-up`}>
            <a
              href={WA_LINKS.hero}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              QUERO VENDER NA INTERNET
            </a>
        </div>

      </div>

      
    </section>
  )
}