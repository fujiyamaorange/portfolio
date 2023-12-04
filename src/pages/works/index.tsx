import { WorksList } from "@/components/pages/works/WorksList";
import { getWorks } from "@/libs/microCMS/getWorks";

import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const res = await getWorks();
  if (res.status === 200) {
    console.log("🍊");
  } else {
    // エラー
    console.log("💣");
  }

  return {
    props: {
      data: res.data.contents,
    },
  };
};

const Works: NextPage<Props> = (props) => {
  return <WorksList data={props.data} />;
};

export default Works;
