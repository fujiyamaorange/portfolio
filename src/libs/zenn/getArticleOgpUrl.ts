import { load } from "cheerio";
import fetch from "node-fetch";

export const getOpgImage = async (url: string) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = load(html);
    const ogImage = $('meta[property="og:image"]').attr("content");
    return ogImage || null; // OGP画像URLが見つからなかった場合はnullを返す
  } catch (error) {
    return null;
  }
};
