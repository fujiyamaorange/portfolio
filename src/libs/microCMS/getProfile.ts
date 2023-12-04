import axios, { AxiosResponse } from 'axios'

import { profile } from '../../types/cms-types'

const PROFILE_API_KEY: string = process.env.PROFILE_API_KEY || ''
const ENDPOINT: string = process.env.ENDPOINT || ''

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProfile = async (): Promise<AxiosResponse<profile, any>> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: AxiosResponse<profile, any> = await axios.get(
      `${ENDPOINT}/profile`,
      {
        headers: {
          'Content-type': 'application/json',
          'X-MICROCMS-API-KEY': PROFILE_API_KEY,
        },
      }
    )
    return res
  } catch (e) {
    console.error(e)
    throw e
  }
}
