import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import { Layout } from '@/components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FujiyamaOrange Portfolio</title>
        <meta name="description" content="Fujimura Kaito Portfilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
