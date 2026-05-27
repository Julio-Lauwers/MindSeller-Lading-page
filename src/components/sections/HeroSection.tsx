import Image from 'next/image'
import styles from './HeroSection.module.css'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { HERO_BULLETS, WA_LINKS } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.heroBg} hero-bg`} />
      <div className={styles.heroGrid} />
      <div className="container">
        <div className={styles.heroInner}>
          {/* LEFT */}
          <div className={styles.heroLeft}>
            
            <h1 className={`${styles.heroH1} fade-up`}>
              Ajudamos você a vender na{' '}
              <em>Shopee, TikTok Shop e Mercado Livre</em>{' '}
              com estratégia validada
            </h1>
            <p className={`${styles.heroSub} fade-up`}>
              Mentoria e assessoria especializada para começar a vender ou escalar
              mais nos marketplaces com método, dados e suporte de quem faturou milhões.
            </p>
            <ul className={`${styles.heroBullets} fade-up`}>
              {HERO_BULLETS.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className={`${styles.heroBtns} fade-up`}>
              <a
                href={WA_LINKS.hero}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                QUERO ESCALAR MINHAS VENDAS
              </a>
              <a
                href={WA_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnGhost}
              >
                <WhatsAppIcon className={styles.waIcon} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`${styles.heroVisual} fade-right`}>
            <div className={styles.heroImgWrap}>
              <Image
                src="/mentoria.jpeg"
                alt="Mentor de negócios - Mindseller"
                width={600}
                height={550}
                priority
                className={styles.heroImg}
              />
              <div className={styles.heroImgOverlay} />
            </div>
            <div className={`${styles.heroBadgesFloat} ${styles.left}`}>
              <div className={styles.heroBadgeCard}>
                <div className={styles.badgeNum}>+300</div>
                <div className={styles.badgeTxt}>
                  Alunos
                  <br />
                  alavancados
                </div>
              </div>
              <div className={styles.heroBadgeCard}>
                <div className={styles.badgeNum}>+R$20M</div>
                <div className={styles.badgeTxt}>
                  Faturados
                  <br />
                  pelos alunos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
