import styles from './PricingSection.module.css'
import CountdownTimer from '@/components/ui/CountdownTimer'
import { PLANS, WA_LINKS } from '@/lib/constants'

export default function PricingSection() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionH2}>
            Escolha o plano ideal para o <span className="gold">seu momento</span>
          </h2>
          <p className={styles.sectionP}>
            Cada plano foi desenhado para atender uma etapa da jornada do empreendedor de marketplace.
          </p>
        </div>

        <div className={styles.pricingNote}>
          🔥 10% OFF para quem fechar nas próximas{' '}
          <span className={styles.countdown}>
            <CountdownTimer />
          </span>
        </div>

        <div className={styles.pricingGrid}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''} fade-up`}
            >
              {plan.popularBadge && (
                <div className={styles.popularBadge}>{plan.popularBadge}</div>
              )}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.planTitle}>{plan.title}</div>
              <div className={styles.planPrice}>
                <div className={styles.period}>{plan.period}</div>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>{plan.price}</span>
                <div className={styles.promotion}>{plan.promotion}</div>
              </div>
              <ul className={styles.planFeatures}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles.check}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINKS[plan.waLink]}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnPlan} ${plan.ctaStyle === 'primary' ? styles.primary : styles.ghost}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
