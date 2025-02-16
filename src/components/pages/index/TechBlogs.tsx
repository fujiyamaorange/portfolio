"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";

type TechBlog = {
  title: string;
  link: string;
  imageUrl: string;
  date: string;
  contentSnippet: string;
};

const jumpLink = (url: string) => {
  window.open(url, "_blank");
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>, link: string) => {
  if (event.key === "Enter") {
    jumpLink(link);
  }
};

export const TechBlogs = () => {
  const techBlogs: TechBlog[] = [
    {
      title: "マネーフォワードから2名がTSKaigi 2024にてLT登壇します！",
      link: "https://moneyforward-dev.jp/entry/2024/04/23/120000",
      imageUrl:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.image.st-hatena.com%2Fimage%2Fscale%2F4bc70b2c781fe99bb698118eca09ca64728b8563%2Fbackend%3Dimagemagick%3Bversion%3D1%3Bwidth%3D1300%2Fhttps%253A%252F%252Fcdn.user.blog.st-hatena.com%252Fdefault_entry_og_image%252F158909383%252F1667877695816130",
      contentSnippet:
        "こんにちは、Pay事業本部でフロントエンドエンジニアをしている姫野です。2024年5月11日（土）に開催されるTSKaigi 2024にて、マネーフォワードのPay事業本部から、私とfujiyamaorangeの2名が登壇させていただくことになりました。",
      date: "2024-04-23",
    },
    {
      title: "新卒がアウトプット駆動に挑戦して得たものとその勘所",
      link: "https://moneyforward-dev.jp/entry/2023/12/21/095348",
      imageUrl:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.image.st-hatena.com%2Fimage%2Fscale%2F90314b51f86d47537d90b0884576c2c357ee3439%2Fbackend%3Dimagemagick%3Bversion%3D1%3Bwidth%3D1300%2Fhttps%253A%252F%252Fcdn-ak.f.st-hatena.com%252Fimages%252Ffotolife%252Fm%252FmoneyforwardDev%252F20231215%252F20231215141056.png",
      contentSnippet:
        "この記事は、Money Forward Engineering 1 Advent Calendar 2023 21日目の投稿です。 20日目は宮村（みやむー） @miyamura.koyoさんで【Ruby】今年も福岡拠点で ISUCON13 に参加しました！でした。こんにちは、fujiyamaorangeです。普段は福岡拠点にてマネーフォワードPay for Businessのフロントエンド開発を担当しています。※本記事内で登場するアウトプットは「技術記事を書くこと」を指します。",
      date: "2023-12-21",
    },
    {
      title:
        "Webパフォーマンスを自動計測しDatadogで可視化するまで - Money Forward Developers Blog",
      link: "https://moneyforward-dev.jp/entry/2023/07/06/123920",
      imageUrl:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.image.st-hatena.com%2Fimage%2Fscale%2Fda2441981c7bef62a57e21235e3f6ff118a3db93%2Fbackend%3Dimagemagick%3Bversion%3D1%3Bwidth%3D1300%2Fhttps%253A%252F%252Fcdn-ak.f.st-hatena.com%252Fimages%252Ffotolife%252Fm%252FmoneyforwardDev%252F20230706%252F20230706120440.png",
      contentSnippet:
        "こんにちはマネーフォワードPay事業本部の藤村海都です。 GitHub、Twitterもどうぞ。普段はフロントエンド周りの技術記事をZennに投稿しています。Zennはこちら。 2023年4月に新卒エンジニアとしてマネーフォワードに入社し、福岡拠点にてマネーフォワードPay for Businessのフロントエンド開発を担当しています。",
      date: "2023-07-06",
    },
  ];

  return (
    <section className="flex flex-col mx-4 mb-16 text-white sm:w-3/4 sm:mx-auto sm:mb-48">
      <div className="flex flex-col items-center justify-center selection:bg-transparent">
        <span className="mt-4 mb-8 text-3xl font-semibold selection:bg-white selection:text-black">
          Tech Blogs
        </span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {techBlogs.map((article, i) => (
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
                  <p>{article.title}</p>
                </div>
                <Image
                  className="mt-2 w-full"
                  width={300}
                  height={200}
                  src={article.imageUrl ?? "/no_image.png"}
                  alt={article.title}
                />
                <p className="hidden mt-4 text-sm text-gray-400 sm:block">
                  {article.contentSnippet?.substring(0, 80)}...
                </p>
              </div>
              <p className="text-sm text-gray-400 text-end">{article.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
