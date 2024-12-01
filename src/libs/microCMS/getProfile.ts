import axios, { type AxiosResponse } from "axios";
import type { profile } from "../../types/cms-types";

const PROFILE_API_KEY: string = process.env.PROFILE_API_KEY || "";
const ENDPOINT: string = process.env.ENDPOINT || "";

export const getProfile = async (): Promise<AxiosResponse<profile, any>> => {
  try {
    const res: AxiosResponse<profile, any> = await axios.get(
      `${ENDPOINT}/profile`,
      {
        headers: {
          "Content-type": "application/json",
          "X-MICROCMS-API-KEY": PROFILE_API_KEY,
        },
      },
    );
    return res;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
