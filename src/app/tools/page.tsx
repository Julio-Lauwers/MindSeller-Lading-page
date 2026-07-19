import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import ToolsSection from '@/components/sections/ToolsSection'
import styles from './page.module.css'

export const metadata = {
  title: 'Ferramentas | Mindseller',
  description:
    'Página de ferramentas e recursos para acelerar suas vendas nos marketplaces.',
}

export default function ToolsPage() {
  return (
    <>
      <WhatsAppFloat />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroInner}>
              <span className={styles.label}>Ferramentas</span>
              <h1 className={styles.title}>Recursos para executar mais rápido e vender melhor</h1>
              <p className={styles.subtitle}>
                Templates, checklists e guias práticos que abrem em nova aba. Edite
                o conteúdo facilmente no array de dados do componente.
              </p>
            </div>
          </div>
        </section>
        <ToolsSection />
      </main>
      <Footer />
    </>
  )
}
