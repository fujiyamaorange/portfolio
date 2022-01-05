import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { profile } from '@/types/cms-types'

type Props = { data: profile }

export const MySelf: React.VFC<Props> = (props) => {
  const { name, introduce, image, hobby } = props.data

  return (
    <>
      <Head>
        <title>FujiyamaOrange Portfolio</title>
        <meta name="description" content="Fujimura Kaito Portfilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props && (
          <>
            <h3>名前</h3>
            <p>{name}</p>
            <h3>自己紹介</h3>
            <div dangerouslySetInnerHTML={{ __html: introduce }}></div>
            <h3>画像</h3>
            <Image src={image.url} width={image.width} height={image.height} />
            <h3>趣味</h3>
            <p>{hobby}</p>
          </>
        )}
      </main>
    </>
  )
}
