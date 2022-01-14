import type {
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import Head from 'next/head'

import { WorksList } from '@/components/pages/works/WorksList'
import { getWorks } from '@/libs/microCMS/getWorks'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log('ビルド時に実行：WORKS')
  const res = await getWorks()
  if (res.status === 200) {
    console.log('🍊')
  } else {
    // エラー
    console.log('💣')
  }

  return {
    props: {
      data: res.data.contents,
    },
  }
}

const Works: NextPage<Props> = (props) => {
  return <WorksList data={props.data} />
}

export default Works
