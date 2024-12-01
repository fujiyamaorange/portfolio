import { WorksList } from "@/components/pages/works/WorksList";
import { getWorks } from "@/libs/microCMS/getWorks";

const Works = async () => {
  const works = await getWorks();

  return <WorksList contents={works.contents} />;
};

export default Works;
