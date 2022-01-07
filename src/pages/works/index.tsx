import { NextPage, GetStaticPropsContext } from 'next'

import { WorksList } from '@/components/pages/works/WorksList'

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // get data from microCMS
  return {
    props: {
      data: {},
    },
  }
}

const Works: NextPage = () => {
  return <WorksList />
}

export default Works
