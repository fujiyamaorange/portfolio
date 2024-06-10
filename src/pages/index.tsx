import { Activities } from "@/components/pages/index/Activities";
import { MySelf } from "@/components/pages/index/MySelf";
import { Zenn } from "@/components/pages/index/Zenn";
import { getActivities } from "@/libs/github/getActivities";
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
  const activityUrls = [
    "https://github.com/biomejs/biome/pull/2930",
    "https://github.com/biomejs/biome/pull/2867",
    "https://github.com/biomejs/biome/pull/2112",
    "https://github.com/biomejs/biome/pull/1881",
    "https://github.com/raycast/extensions/pull/10031",
    "https://github.com/raycast/extensions/pull/10714",
    "https://github.com/rollbar/rollbar.js/pull/1128",
  ];
  const activities = await Promise.all(
    activityUrls.map(async (url) => {
      return await getActivities(url);
    }),
  );

  return {
    props: {
      data: res.data,
      articles,
      ogpImages,
      activities,
    },
  };
};

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <MySelf data={props.data} />
      <Activities activities={props.activities} />
      <Zenn
        data={props.data}
        articles={props.articles}
        ogpImages={props.ogpImages}
      />
    </>
  );
};

export default Home;
