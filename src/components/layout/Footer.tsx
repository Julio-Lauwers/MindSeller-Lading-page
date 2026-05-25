import styles from './Footer.module.css'
import { FOOTER_SOCIAL, FOOTER_SOLUTIONS, FOOTER_COMPANY, WA_BASE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              Mind<span>seller</span>
            </div>
            <p>Mentoria e assessoria especializada para vendas nos marketplaces. Transformando empreendedores em líderes de mercado.</p>
            <div className={styles.social}>
              {FOOTER_SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.socialBtn}
                  aria-label={item.label}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h4>Soluções</h4>
            <ul>
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Empresa</h4>
            <ul>
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 <span className="gold">Mindseller</span>. Todos os direitos reservados.</span>
          <span>Resultados podem variar. Comprometimento é essencial.</span>
        </div>
      </div>
    </footer>
  )
}
