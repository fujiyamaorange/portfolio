import { load } from "cheerio";

interface Talk {
  title: string;
  link: string;
  ogpUrl?: string;
  date: string;
  author?: string;
  description?: string;
  category?: string;
  conference?: string;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toISOString();
};

export const getTalk = async (url: string): Promise<Talk> => {
  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const html = await response.text();
    const $ = load(html);

    // タイトルを取得（Speaker Deckの構造に合わせて調整）
    const title =
      $('meta[property="og:title"]').attr("content") ||
      $("h1").text().trim() ||
      $(".deck-title").text().trim() ||
      "";

    // OGP画像を取得
    const ogpUrl = $('meta[property="og:image"]').attr("content");

    // 日付を取得（Speaker Deckの日付形式に対応）
    const dateStr =
      $('meta[property="article:published_time"]').attr("content") ||
      $("time").attr("datetime") ||
      $(".date").text().trim() ||
      $(".deck-date").text().trim();
    const date = dateStr ? formatDate(dateStr) : "";

    // 作者を取得（Speaker Deckの構造に合わせて調整）
    const author =
      $('meta[name="author"]').attr("content") ||
      $(".author").text().trim() ||
      $(".deck-author").text().trim() ||
      "";

    // 説明を取得
    const description =
      $('meta[property="og:description"]').attr("content") ||
      $(".description").text().trim() ||
      $(".deck-description").text().trim() ||
      "";

    // カテゴリを取得（Speaker Deckの構造に合わせて調整）
    const category =
      $('meta[property="article:section"]').attr("content") ||
      $(".category").text().trim() ||
      $(".deck-category").text().trim() ||
      "";

    return {
      title,
      link: url,
      ogpUrl,
      date,
      author,
      description,
      category,
    };
  } catch (error) {
    console.error("Error fetching talk data:", error);
    return {
      title: "404 Not Found",
      link: url,
      date: "-",
    };
  }
};
