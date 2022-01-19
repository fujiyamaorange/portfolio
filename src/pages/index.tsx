import { getProfile } from '@/libs/microCMS/getProfile'
import { MySelf } from '@/components/pages/index/MySelf'

import type { NextPage, InferGetStaticPropsType } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
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
  return <MySelf data={props.data} />
}

export default Home
