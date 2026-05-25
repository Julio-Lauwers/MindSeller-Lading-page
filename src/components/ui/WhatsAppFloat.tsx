import styles from './WhatsAppFloat.module.css'
import WhatsAppIcon from './WhatsAppIcon'
import { WA_LINKS } from '@/lib/constants'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINKS.default}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.waFloat}
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className={styles.icon} />
    </a>
  )
}
