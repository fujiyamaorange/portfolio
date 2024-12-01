import type { profile } from "../../types/cms-types";

const PROFILE_API_KEY: string = process.env.PROFILE_API_KEY || "";
const ENDPOINT: string = process.env.ENDPOINT || "";

export const getProfile = async (): Promise<profile> => {
  try {
    const res = await fetch(`${ENDPOINT}/profile`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "X-MICROCMS-API-KEY": PROFILE_API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
};
