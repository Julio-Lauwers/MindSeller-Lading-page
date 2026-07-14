// ===================================
// MINDSELLER — Blog Posts Registry
// ===================================
// Para criar um novo post:
// 1. Adicione um item novo no array BLOG_POSTS abaixo (slug, título, resumo, data, capa).
// 2. Crie o arquivo "src/content/posts/html/{slug}.html" com o conteúdo (imagens e texto).
// O slug vira a URL: /blog/{slug}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string // formato YYYY-MM-DD
  coverAlt: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '11-erros-que-fazem-vendedores-perderem-dinheiro-na-shopee',
    title: '11 Erros que Fazem Vendedores Perderem Dinheiro na Shopee',
    excerpt:
      'Descubra os erros mais comuns que fazem vendedores perderem dinheiro na Shopee e como evitá-los.',
    date: '2026-07-01',
    coverAlt: 'Erros comuns que fazem vendedores perderem dinheiro na Shopee',
  },
]

export function getSortedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
