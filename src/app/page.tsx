import { Activities } from "@/components/pages/index/Activities";
import { MySelf } from "@/components/pages/index/MySelf";
import { TalkTheStage } from "@/components/pages/index/TalkTheStage";
import { TechBlogs } from "@/components/pages/index/TechBlogs";
import { Zenn } from "@/components/pages/index/Zenn";
import { getActivities } from "@/libs/github/getActivities";
import { getProfile } from "@/libs/microCMS/getProfile";
import { getTalk } from "@/libs/speakerdeck/getTalk";
import { getOpgImage } from "@/libs/zenn/getArticleOgpUrl";
import { getZennArticles } from "@/libs/zenn/getZennArticles";

type TalkData = {
  url: string;
  conference: string;
};

const Home = async () => {
  const profile = await getProfile();
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
  const talkTheStageData: TalkData[] = [
    {
      url: "https://speakerdeck.com/fujiyamaorange/swc-transformerkarajian-rutypescriptguan-shu-ji-shu-besutopurakuteisu",
      conference: "TSKaigi 2024",
    },
    {
      url: "https://speakerdeck.com/fujiyamaorange/iphone-eye-trackingji-neng-karaxue-buyasasiiakusesibiritei",
      conference: "フロントエンドカンファレンス北海道 2025",
    },
  ];

  const activities = await Promise.all(
    activityUrls.map(async (url) => {
      return await getActivities(url);
    }),
  );

  const talks = await Promise.all(
    talkTheStageData.map(async (talkData) => {
      const talk = await getTalk(talkData.url);
      talk.conference = talkData.conference;
      return talk;
    }),
  );

  return (
    <>
      <MySelf profile={profile} />
      <TalkTheStage talks={talks} />
      <Activities activities={activities} />
      <TechBlogs />
      <Zenn articles={articles} ogpImages={ogpImages} />
    </>
  );
};

export default Home;
