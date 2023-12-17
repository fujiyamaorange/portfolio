import { MySelf } from "@/components/pages/index/MySelf";
import { Zenn } from "@/components/pages/index/Zenn";
import { getProfile } from "@/libs/microCMS/getProfile";
import { getOpgImage } from "@/libs/zenn/getArticleOgpUrl";
import { getZennArticles } from "@/libs/zenn/getZennArticles";

import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const res = await getProfile();
  const articles = getZennArticles();
  const ogpImages = await Promise.all(
    articles.map(async (article) => {
      return await getOpgImage(article.link);
    }),
  );

  return {
    props: {
      data: res.data,
      articles,
      ogpImages,
    },
  };
};

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <MySelf data={props.data} />
      <Zenn
        data={props.data}
        articles={props.articles}
        ogpImages={props.ogpImages}
      />
    </>
  );
};

export default Home;
