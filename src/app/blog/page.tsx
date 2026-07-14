import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import { getSortedPosts } from '@/content/posts'
import { formatPostDate } from '@/lib/blog'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog | Mindseller',
  description:
    'Conteúdos e estratégias para vender mais na Shopee, TikTok Shop e Mercado Livre.',
}

export default function BlogPage() {
  const posts = getSortedPosts()

  return (
    <>
      <WhatsAppFloat />
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.tag}>Blog</span>
            <h1 className={styles.title}>
              Conteúdos para <span className="gold">vender mais</span>
            </h1>
            <p className={styles.subtitle}>
              Estratégias, bastidores e novidades sobre Shopee, TikTok Shop e Mercado Livre.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className={styles.empty}>Em breve novos conteúdos por aqui.</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={post.cover} alt={post.coverAlt} className={styles.image} />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.date}>{formatPostDate(post.date)}</span>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
