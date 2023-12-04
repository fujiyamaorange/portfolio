import axios, { AxiosResponse } from 'axios'

import { works } from '@/types/cms-types'

const WORKS_API_KEY: string = process.env.WORKS_API_KEY || ''
const ENDPOINT: string = process.env.ENDPOINT || ''

type DATA = {
  contents: works[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getWorks = async (): Promise<AxiosResponse<DATA, any>> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: AxiosResponse<DATA, any> = await axios.get(
      `${ENDPOINT}/works?limit=100`,
      {
        headers: {
          'Content-type': 'application/json',
          'X-MICROCMS-API-KEY': WORKS_API_KEY,
        },
      }
    )
    return res
  } catch (e) {
    console.error(e)
    throw e
  }
}
