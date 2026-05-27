import Image from 'next/image'
import styles from './WhoSection.module.css'
import { WHO_FEATURES, PLATFORMS } from '@/lib/constants'

export default function WhoSection() {
  return (
    <section id="who" className={styles.who}>
      <div className="container">
        <div className={styles.whoGrid}>
          <div className={`${styles.whoText} fade-left`}>
            <h2>
              Especialistas em transformar lojistas em{' '}
              <span className="gold">líderes de mercado</span>
            </h2>
            <p>
              A Mindseller nasceu para resolver um problema real: milhares de empreendedores sem
              saber como estruturar, posicionar e escalar suas operações nos principais marketplaces
              do Brasil.
            </p>
            <div className={styles.whoFeatures}>
              {WHO_FEATURES.map((feature) => (
                <div key={feature.title} className={styles.whoFeature}>
                  <div className={styles.whoFeatureIcon}>{feature.icon}</div>
                  <div className={styles.whoFeatureText}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.platformCards} fade-right`}>
            {PLATFORMS.map((platform) => (
              <div key={platform.name} className={styles.platformCard}>
                <div className={`${styles.platformLogo} ${styles[platform.colorClass]}`}>
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={32}
                    height={32}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.platformInfo}>
                  <h3>{platform.name}</h3>
                  <p>{platform.description}</p>
                </div>
                <div className={styles.platformArrow}>→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
