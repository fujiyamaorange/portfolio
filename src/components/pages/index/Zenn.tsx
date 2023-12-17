import { profile } from "@/types/cms-types";
import { PostItem } from "@/types/zenn";
import Image from "next/image";

type Props = {
  data: profile;
  articles: PostItem[];
  ogpImages: (string | null)[];
};

const jumpLink = (url: string) => {
  window.open(url, "_blank");
};

export const Zenn = (props: Props) => {
  const articles = props.articles;

  return (
    <section className="flex flex-col mx-4 sm:w-3/4 sm:mx-auto mb-16 text-white sm:mb-48">
      <div className="flex flex-col items-center justify-center selection:bg-transparent">
        <span className="mt-4 mb-8 text-3xl font-semibold selection:bg-white selection:text-black">
          Zenn
        </span>
      </div>
      <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
        {articles.map((article, i) => (
          <article
            key={article.link}
            className="px-8 py-4 transition duration-150 hover:scale-110 bg-slate-800 hover:bg-slate-700"
            onClick={() => jumpLink(article.link)}
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
                  <p>{article.authorName}</p>
                </div>
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
