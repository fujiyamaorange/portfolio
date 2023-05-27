import Image from 'next/image'
import { profile } from '@/types/cms-types'
import { PostItem } from '@/types/zenn'

type Props = { data: profile; articles: PostItem[] }

const jumpLink = (url: string) => {
  window.open(url, '_blank')
}

export const Zenn = (props: Props) => {
  const articles = props.articles

  console.log(articles)

  return (
    <main className="flex flex-col w-3/4 mx-auto mb-16 text-white sm:mb-48">
      <section className="flex flex-col items-center justify-center selection:bg-transparent">
        <span className="mt-4 mb-8 text-3xl font-semibold selection:bg-white selection:text-black">
          Zenn
        </span>
      </section>
      <section className="grid gap-2 sm:grid-cols-3 sm:gap-4">
        {articles.map((article) => (
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
                <h2 className="font-semibold">{article.title}</h2>
                <p className="hidden mt-4 text-sm text-gray-400 sm:block">
                  {article.contentSnippet?.substring(0, 80)}...
                </p>
              </div>
              <p className="text-sm text-gray-400 text-end">
                {article.isoDate?.split('T')[0]}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
