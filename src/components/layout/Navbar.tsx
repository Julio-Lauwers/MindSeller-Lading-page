'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { NAV_LINKS, WA_LINKS } from '@/lib/constants'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav id="navbar" className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navInner}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/LOGO MINDSELLER.png"
                alt="MindSeller Logo"
                width={160}
                height={30}
                priority
              />   
            </Link>

            <div className={styles.navLinks}>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={WA_LINKS.specialist}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
            >
              Falar com Especialista
            </a>

            <button
              className={styles.mobileBtn}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
