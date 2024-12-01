import type { works } from "@/types/cms-types";

const WORKS_API_KEY: string = process.env.WORKS_API_KEY || "";
const ENDPOINT: string = process.env.ENDPOINT || "";

type Works = {
  contents: works[];
};

export const getWorks = async (): Promise<Works> => {
  try {
    const res = await fetch(`${ENDPOINT}/works?limit=100`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "X-MICROCMS-API-KEY": WORKS_API_KEY,
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
