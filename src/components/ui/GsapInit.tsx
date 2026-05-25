'use client'

import { useEffect } from 'react'

export default function GsapInit() {
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Fade up animations
      gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: (i % 3) * 0.12,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Fade left animations
      gsap.utils.toArray<HTMLElement>('.fade-left').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Fade right animations
      gsap.utils.toArray<HTMLElement>('.fade-right').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Counter animations
      const animateCounter = (el: HTMLElement) => {
        const target = parseInt(el.dataset.target || '0')
        const prefix = el.dataset.prefix || ''
        const suffix = el.dataset.suffix || ''
        let current = 0
        const duration = 1800
        const step = target / (duration / 16)

        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          el.textContent = prefix + Math.round(current) + suffix
          if (current >= target) clearInterval(timer)
        }, 16)
      }

      document.querySelectorAll<HTMLElement>('[data-target]').forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => animateCounter(el),
        })
      })

      // Hero parallax
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    init()
  }, [])

  return null
}
