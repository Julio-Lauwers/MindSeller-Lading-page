import Image from 'next/image'
import styles from './MentorSection.module.css'
import SectionTag from '@/components/ui/SectionTag'
import { MENTOR_MILESTONES, WA_LINKS } from '@/lib/constants'

export default function MentorSection() {
  return (
    <section id="mentor" className={styles.mentor}>
      <div className="container">
        <div className={styles.mentorGrid}>
          <div className={`${styles.mentorImgWrap} fade-left`}>
            <Image
              src="/zemauro.jpeg"
              alt="Zé Mauro - Fundador da Mindseller"
              width={550}
              height={550}
              className={styles.mentorImg}
            />
            <div className={styles.mentorImgBadge}>
              <p>🏆 Reconhecido pela Shopee Brasil</p>
              <span>Top Seller &amp; Parceiro Estratégico Oficial</span>
            </div>
          </div>

          <div className={`${styles.mentorContent} fade-right`}>
            <SectionTag>Conheça o Mentor</SectionTag>
            <div className={styles.quote}>
              &quot;De motoboy e garçom a <em>milhões faturados</em> nos marketplaces.&quot;
            </div>
            <p className={styles.mentorStory}>
              Zé Mauro começou do zero, literalmente. Com apenas R$488 no bolso, ele entrou no
              mundo dos marketplaces sem saber quase nada. Errou muito, aprendeu mais ainda. Cada
              erro se transformou em aprendizado, cada aprendizado em metodologia.
              <br />
              <br />
              Depois de anos testando e validando estratégias reais — sem atalhos e sem fórmulas
              mágicas — ele chegou a faturar milhões. Hoje é reconhecido pela própria Shopee Brasil
              como um dos maiores vendedores do país, e já ajudou mais de 300 alunos a
              transformarem seus negócios.
            </p>
            <div className={styles.mentorMilestones}>
              {MENTOR_MILESTONES.map((m) => (
                <div key={m.num} className={styles.milestone}>
                  <div className={styles.num}>{m.num}</div>
                  <div className={styles.label}>{m.label}</div>
                </div>
              ))}
            </div>
            <a
              href={WA_LINKS.specialist}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Conhecer a Metodologia →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
