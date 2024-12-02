import { load } from "cheerio";

interface Activity {
  title: string;
  link: string;
  ogpUrl?: string;
  date: string;
  repository?: string;
  details?: string;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toISOString();
};

export const getActivities = async (url: string): Promise<Activity> => {
  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const html = await response.text();
    const $ = load(html);

    const title = $("h1 .js-issue-title").text().split("\n")[0].trim();
    const dateStr = $("relative-time").attr("datetime");
    const date = dateStr ? formatDate(dateStr) : "";
    const ogpUrl = $('meta[property="og:image"]').attr("content");
    const pathArray = url.split("/");
    const repository = `${pathArray[3]}/${pathArray[4]}`;
    const details = $(".js-comment-body").first().text().trim();

    return {
      title,
      link: url,
      ogpUrl,
      date,
      repository,
      details,
    };
  } catch (error) {
    return {
      title: "404 Not Found",
      link: url,
      date: "-",
    };
  }
};
