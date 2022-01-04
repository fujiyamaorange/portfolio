import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { getProfile } from '../libs/microCMS/getProfile'

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
  const { name, introduce, image, hobby } = props.data

  return (
    <div className={styles.container}>
      <Head>
        <title>FujiyamaOrange Portfolio</title>
        <meta name="description" content="Fujimura Kaito Portfilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>名前</h3>
        <p>{name}</p>
        <h3>自己紹介</h3>
        <div dangerouslySetInnerHTML={{ __html: introduce }}></div>
        <h3>画像</h3>
        <Image src={image.url} width={image.width} height={image.height} />
        <h3>趣味</h3>
        <p>{hobby}</p>
      </main>
    </div>
  )
}

export default Home
