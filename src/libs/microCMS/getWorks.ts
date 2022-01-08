import axios, { AxiosResponse } from 'axios'

import { works } from '@/types/cms-types'

const WORKS_API_KEY: string = process.env.WORKS_API_KEY || ''
const ENDPOINT: string = process.env.ENDPOINT || ''

type DATA = {
  contents: works[]
}

export const getWorks = async (): Promise<AxiosResponse<DATA, any>> => {
  try {
    const res: AxiosResponse<DATA, any> = await axios.get(`${ENDPOINT}/works`, {
      headers: {
        'Content-type': 'application/json',
        'X-MICROCMS-API-KEY': WORKS_API_KEY,
      },
    })
    return res
  } catch (e) {
    console.error(e)
    throw e
  }
}
