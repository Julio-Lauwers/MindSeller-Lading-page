import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import { BLOG_POSTS, getPostBySlug } from '@/content/posts'
import { formatPostDate, getPostHtml } from '@/lib/blog'
import styles from './post.module.css'

interface PostPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Blog Mindseller`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)
  const html = post ? getPostHtml(post.slug) : null

  if (!post || html === null) notFound()

  return (
    <>
      <WhatsAppFloat />
      <Navbar />
      <main className={styles.main}>
        <article className="container">
          <Link href="/blog" className={styles.back}>
            ← Voltar para o Blog
          </Link>
          <span className={styles.date}>{formatPostDate(post.date)}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.cover}>
            <img src={post.cover} alt={post.coverAlt} />
          </div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <Footer />
    </>
  )
}
