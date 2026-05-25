'use client'

import { useState } from 'react'
import styles from './FaqSection.module.css'
import SectionTag from '@/components/ui/SectionTag'
import { FAQS } from '@/lib/constants'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <SectionTag centered>FAQ</SectionTag>
          <h2 className={styles.sectionH2}>
            Perguntas <span className="gold">frequentes</span>
          </h2>
          <p className={styles.sectionP}>
            Tudo o que você precisa saber antes de dar o próximo passo.
          </p>
        </div>

        <div className={styles.faqWrap}>
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button
                className={styles.faqQ}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className={styles.icon}>+</span>
              </button>
              <div className={styles.faqA}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
