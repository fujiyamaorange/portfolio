"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import type { PostItem } from "@/types/zenn";

type Props = {
  articles: PostItem[];
  ogpImages: (string | null)[];
};

const jumpLink = (url: string) => {
  window.open(url, "_blank");
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>, link: string) => {
  if (event.key === "Enter") {
    jumpLink(link);
  }
};

export const Zenn = (props: Props) => {
  const articles = props.articles;

  return (
    <section className="flex flex-col mx-4 mb-16 text-white sm:w-3/4 sm:mx-auto sm:mb-48">
      <div className="flex flex-col items-center justify-center selection:bg-transparent">
        <span className="mt-4 mb-8 text-3xl font-semibold selection:bg-white selection:text-black">
          Zenn
        </span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {articles.map((article, i) => (
          <article
            key={article.link}
            className="px-8 py-4 transition duration-150 hover:scale-105 bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => jumpLink(article.link)}
            onKeyUp={(e) => handleKeyDown(e, article.link)}
            //  biome-ignore lint/a11y/noNoninteractiveTabindex: This shoule be accessible
            tabIndex={0}
          >
            <div className="sm:flex sm:flex-col sm:justify-between sm:h-full">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/user-icon-howl.png"
                    width="30"
                    height="30"
                    className="rounded-full"
                    aria-hidden="true"
                    alt="user icon"
                  />
                  <p>{article.authorName.toLowerCase()}</p>
                </div>
                {/* biome-ignore lint/performance/noImgElement: This is intentionally not used */}
                <img
                  className="mt-2"
                  src={props.ogpImages[i] ?? "/no_image.png"}
                  alt={article.title}
                />
                <p className="hidden mt-4 text-sm text-gray-400 sm:block">
                  {article.contentSnippet?.substring(0, 80)}...
                </p>
              </div>
              <p className="text-sm text-gray-400 text-end">
                {article.isoDate?.split("T")[0]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
