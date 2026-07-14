import fs from 'fs'
import path from 'path'

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function getPostHtml(slug: string): string | null {
  const filePath = path.join(process.cwd(), 'src', 'content', 'posts', 'html', `${slug}.html`)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf-8')
}

export interface BlogPost {
  // ...campos existentes
  cover: string;
  coverAlt: string;
}
