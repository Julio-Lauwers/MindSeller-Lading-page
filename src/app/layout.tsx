import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mindseller | Mentoria e Assessoria para Marketplaces – Shopee, TikTok Shop e Mercado Livre',
  description:
    'Escale suas vendas na Shopee, TikTok Shop e Mercado Livre com mentoria especializada. Método validado, suporte próximo e crescimento real. +300 alunos. +R$20M faturados.',
  openGraph: {
    title: 'Mindseller | Vendas nos Marketplaces com Resultado Real',
    description:
      'Mentoria e assessoria especializada para quem quer vender mais na Shopee, TikTok Shop e Mercado Livre.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
        width: 1200,
        alt: 'Mindseller',
      },
    ],
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Mindseller',
      description:
        'Mentoria e assessoria especializada para vendas nos marketplaces Shopee, TikTok Shop e Mercado Livre.',
      url: 'https://mindseller.com.br',
      telephone: '+55-31-99999-9999',
      address: { '@type': 'PostalAddress', addressCountry: 'BR' },
      sameAs: [],
      offers: [
        { '@type': 'Offer', name: 'Mentoria Light', price: '2250', priceCurrency: 'BRL' },
        { '@type': 'Offer', name: 'Mentoria Intensiva', price: '7200', priceCurrency: 'BRL' },
        { '@type': 'Offer', name: 'Assessoria Completa', price: '10800', priceCurrency: 'BRL' },
      ],
    }),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
