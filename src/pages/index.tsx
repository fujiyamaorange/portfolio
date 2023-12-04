import { MySelf } from "@/components/pages/index/MySelf";
import { getProfile } from "@/libs/microCMS/getProfile";

import { Zenn } from "@/components/pages/index/Zenn";
import { getZennArticles } from "@/libs/zenn/getZennArticles";
import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const res = await getProfile();
  const articles = getZennArticles();

  return {
    props: {
      data: res.data,
      articles,
    },
  };
};

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <MySelf data={props.data} />
      <Zenn data={props.data} articles={props.articles} />
    </>
  );
};

export default Home;
