'use client'

import Link from 'next/link'
import styles from './MobileMenu.module.css'
import { NAV_LINKS, WA_LINKS } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar menu">
          ✕
        </button>
        <div className={styles.logo}>
          Mind<span>seller</span>
        </div>
        <nav className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={WA_LINKS.specialist}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          onClick={onClose}
        >
          Falar com Especialista
        </a>
      </div>
    </div>
  )
}
