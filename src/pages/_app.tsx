import { NextSeo } from 'next-seo'
import { Layout } from '@/components/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="FujiyamaOrange Portfolio"
        description="フジムラカイトのポートフォリオサイト"
        canonical="https://fujiyamaorange.vercel.app"
        openGraph={{
          url: 'https://fujiyamaorange.vercel.app',
          type: 'website',
          title: 'fujiyamaorange portfolio',
          description: 'フジムラカイトのポートフォリオサイト',
          locale: 'jp_JP',
          images: [
            {
              url: 'https://user-images.githubusercontent.com/63333564/148645805-6fd653e0-ced6-43da-b17e-04f47f7ac0a1.png',
              width: 800,
              height: 600,
              alt: 'fujiyamaorange portfolio',
              type: 'image/',
            },
            {
              url: 'https://user-images.githubusercontent.com/63333564/148645805-6fd653e0-ced6-43da-b17e-04f47f7ac0a1.png',
              width: 900,
              height: 800,
              alt: 'fujiyamaorange portfolio',
              type: 'image/png',
            },
            {
              url: 'https://user-images.githubusercontent.com/63333564/148645636-a73c4d97-a417-4eb7-9606-4313102f9d6e.png',
              width: 500,
              height: 400,
              alt: 'fujiyamaorange portfolio',
              type: 'image/png',
            },
          ],
          site_name: 'fujiyamaorange portfolio',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://user-images.githubusercontent.com/63333564/148645636-a73c4d97-a417-4eb7-9606-4313102f9d6e.png',
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://user-images.githubusercontent.com/63333564/148645636-a73c4d97-a417-4eb7-9606-4313102f9d6e.png',
            sizes: '76x76',
          },
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
