import { Activity } from "@/types/activity";
import { load } from "cheerio";
import fetch from "node-fetch";

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getActivities = async (url: string): Promise<Activity> => {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = load(html);
    const title = $("h1").find(".js-issue-title").text().split("\n")[0].trim();
    const dateStr = $("relative-time").attr("datetime");
    const date = dateStr ? formatDate(dateStr) : "";
    const ogpUrl = $('meta[property="og:image"]').attr("content");
    const pathArray = url.split("/");
    const repository = pathArray[3] + "/" + pathArray[4]; // <ユーザー名>/<リポジトリ名> の形式
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
