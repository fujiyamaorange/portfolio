"use client";

import type { KeyboardEvent } from "react";

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

type Props = {
  talks: Talk[];
};

const jumpLink = (url: string) => {
  window.open(url, "_blank");
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>, link: string) => {
  if (event.key === "Enter") {
    jumpLink(link);
  }
};

export const TalkTheStage = (props: Props) => {
  const talks = props.talks;

  return (
    <section className="flex flex-col mx-4 mb-16 text-white sm:w-3/4 sm:mx-auto sm:mb-48">
      <div className="flex flex-col items-center justify-center selection:bg-transparent">
        <span className="mt-4 mb-8 text-3xl font-semibold selection:bg-white selection:text-black">
          Tech Talk
        </span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {talks.map((talk, _i) => (
          <article
            key={talk.link}
            className="px-8 py-4 transition duration-150 hover:scale-105 bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => jumpLink(talk.link)}
            onKeyUp={(e) => handleKeyDown(e, talk.link)}
            //  biome-ignore lint/a11y/noNoninteractiveTabindex: This shoule be accessible
            tabIndex={0}
          >
            <div className="sm:flex sm:flex-col sm:justify-between sm:h-full">
              <div>
                {talk.conference && (
                  <p className="text-sm text-blue-400 font-medium mb-2">
                    {talk.conference}
                  </p>
                )}
                <h3 className="text-lg font-semibold my-4 line-clamp-2">
                  {talk.title}
                </h3>
                <img
                  className="mt-2 w-full object-cover rounded"
                  src={talk.ogpUrl || "/no_image.png"}
                  alt={talk.title}
                />
                {talk.description && (
                  <p className="hidden mt-4 text-sm text-gray-400 sm:block line-clamp-3">
                    {talk.description}
                  </p>
                )}
              </div>
              <div className="mt-4 text-sm text-gray-400">
                {talk.author && <p>by {talk.author}</p>}
                {talk.date && (
                  <p>{new Date(talk.date).toLocaleDateString("ja-JP")}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
