import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import Head from 'next/head'

import { getProfile } from '@/libs/microCMS/getProfile'
import { MySelf } from '@/components/pages/index/MySelf'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log('ビルド時に実行')
  const res = await getProfile()
  if (res.status === 200) {
    console.log('🍊')
  } else {
    // エラー
    console.log('💣')
  }

  return {
    props: {
      data: res.data,
    },
  }
}

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>FujiyamaOrange Portfolio</title>
        <meta name="description" content="Fujimura Kaito Portfilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MySelf data={props.data} />
      </main>
    </div>
  )
}

export default Home
