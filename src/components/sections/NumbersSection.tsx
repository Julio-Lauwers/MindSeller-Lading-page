import styles from './NumbersSection.module.css'
import { NUMBERS } from '@/lib/constants'

const LOGO_PILLS = ['Shopee', 'TikTok Shop', 'Mercado Livre', 'Importação', 'ADS', 'Logística']

export default function NumbersSection() {
  return (
    <section id="numbers" className={styles.numbers}>
      <div className="container">
        <div className={styles.numbersGrid}>
          {NUMBERS.map((item) => (
            <div key={item.label} className={styles.numberItem}>
              <div
                className={`${styles.numVal} fade-up`}
                data-target={item.target}
                data-prefix={item.prefix}
                data-suffix={item.suffix}
              >
                {item.prefix}0{item.suffix}
              </div>
              <div className={`${styles.numLabel} fade-up`}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
